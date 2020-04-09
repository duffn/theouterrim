import React from "react"
import {
  FormLabel,
  FormGroup,
  TextField,
  Grid,
  Select,
  MenuItem,
} from "@material-ui/core"

export const getRangeFilterOptions = fieldLabel => {
  return {
    filter: true,
    filterType: "custom",
    filterOptions: {
      names: [],
      logic(value, filters) {
        /**
         * Necessary for clearing non number values
         * and parsing to number (e.g. localized restricted price "(R) 1,000")
         */
        const clearedValue =
          typeof value === "string"
            ? parseInt(value.replace(/[\D]/gi, ""), 10)
            : value
        if (filters[0] && filters[1]) {
          return clearedValue < filters[0] || clearedValue > filters[1]
        } else if (filters[0]) {
          return clearedValue < filters[0]
        } else if (filters[1]) {
          return clearedValue > filters[1]
        }
        return false
      },
      display: (filters, onChange, filterIndex, column) => (
        <RangeFilter
          filters={filters}
          onChange={onChange}
          filterIndex={filterIndex}
          column={column}
          fieldLabel={fieldLabel}
        />
      ),
    },
    customFilterListOptions: {
      render: filterVal => {
        if (filterVal[0] && filterVal[1]) {
          return `Min ${fieldLabel}: ${filterVal[0]}, Max ${fieldLabel}: ${filterVal[1]}`
        } else if (filterVal[0]) {
          return `Min ${fieldLabel}: ${filterVal[0]}`
        } else if (filterVal[1]) {
          return `Max ${fieldLabel}: ${filterVal[1]}`
        }
        return []
      },
      update: (filterList, filterPos, index) => {
        if (filterPos === 0) {
          filterList[index].splice(filterPos, 1, "")
        } else if (filterPos === 1) {
          filterList[index].splice(filterPos, 1)
        } else if (filterPos === -1) {
          filterList[index] = []
        }

        return filterList
      },
    },
  }
}

const PriceFilterOperator = Object.freeze({
  GT: 0,
  GTE: 1,
  LT: 2,
  LTE: 3,
  toString: val => {
    switch (val) {
      case PriceFilterOperator.GT:
        return ">"
      case PriceFilterOperator.GTE:
        return ">="
      case PriceFilterOperator.LT:
        return "<"
      case PriceFilterOperator.LTE:
        return "<="
      default:
        throw Error(`Invalid price filter operator value: ${val}`)
    }
  },
})

function debounce(fn, delay) {
  var timer = null
  return function() {
    var context = this,
      args = arguments
    clearTimeout(timer)
    timer = setTimeout(function() {
      fn.apply(context, args)
    }, delay)
  }
}

class RangeFilter extends React.Component {
  state = {
    minVal: this.props.filters[this.props.filterIndex][0] || "",
    maxVal: this.props.filters[this.props.filterIndex][1] || "",
  }

  constructor(props) {
    super(props)

    props.filters[props.filterIndex] = ["", ""]
  }

  debouncedChange = debounce(this.props.onChange, 400)

  static getDerivedStateFromProps(props, state) {
    let { filters, filterIndex } = props
    let [minVal, maxVal] = filters[filterIndex]

    if (
      (minVal === null || typeof minVal === "undefined") &&
      (maxVal === null || typeof maxVal === "undefined")
    ) {
      filters[filterIndex] = ["", ""]
      return { minVal: "", maxVal: "" }
    } else return null
  }

  render() {
    let { filterIndex, column, fieldLabel } = this.props
    return (
      <div>
        <FormLabel>{fieldLabel}</FormLabel>
        <FormGroup row style={{ justifyContent: "space-between" }}>
          <TextField
            style={{
              flex: "0 1 45%",
            }}
            label="Min"
            type="number"
            InputLabelProps={{ shrink: true }}
            value={this.state.minVal}
            onChange={evt => {
              this.setState({ minVal: evt.target.value })
              this.debouncedChange(
                [evt.target.value, this.state.maxVal],
                filterIndex,
                column
              )
            }}
          />
          <TextField
            style={{
              flex: "0 1 45%",
            }}
            label="Max"
            type="number"
            InputLabelProps={{ shrink: true }}
            value={this.state.maxVal}
            onChange={evt => {
              this.setState({ maxVal: evt.target.value })
              this.debouncedChange(
                [this.state.minVal, evt.target.value],
                filterIndex,
                column
              )
            }}
          />
        </FormGroup>
      </div>
    )
  }
}

class PriceFilter extends React.Component {
  state = {
    operator:
      this.props.filters[this.props.filterIndex][0] || PriceFilterOperator.GTE,
    amount: this.props.filters[this.props.filterIndex][1] || "",
  }

  constructor(props) {
    super(props)

    props.filters[props.filterIndex] = [PriceFilterOperator.GTE, ""]
  }

  debouncedChange = debounce(this.props.onChange, 400)

  static getDerivedStateFromProps(props, state) {
    let { filters, filterIndex } = props
    let [operator, amount] = filters[filterIndex]

    //set initial values
    if (
      (operator === null || typeof operator === "undefined") &&
      (amount === null || typeof amount === "undefined")
    ) {
      //need to set value in props as well, otherwise this will be triggered again after
      //a reset, which causes the state-based updating on the amount field to fail the first time
      filters[filterIndex] = [PriceFilterOperator.GTE, ""]
      return { operator: PriceFilterOperator.GTE, amount: "" }
    } else return null
  }

  render() {
    let { filterIndex, column } = this.props
    return (
      <Grid xs={12}>
        <FormLabel>Price</FormLabel>
        <FormGroup row style={{ justifyContent: "space-between" }}>
          <Select
            style={{
              flex: "0 1 20%",
              textAlign: "center",
            }}
            value={this.state.operator}
            onChange={evt => {
              this.setState({ operator: evt.target.value })
              this.debouncedChange(
                [evt.target.value, this.state.amount],
                filterIndex,
                column
              )
            }}
          >
            <MenuItem value={PriceFilterOperator.GT}>&gt;</MenuItem>
            <MenuItem value={PriceFilterOperator.GTE}>&gt;=</MenuItem>
            <MenuItem value={PriceFilterOperator.LT}>&lt;</MenuItem>
            <MenuItem value={PriceFilterOperator.LTE}>&lt;=</MenuItem>
          </Select>
          <TextField
            style={{ flex: "0 1 75%" }}
            type="number"
            value={this.state.amount}
            onChange={evt => {
              this.setState({ amount: evt.target.value })
              this.debouncedChange(
                [this.state.operator, evt.target.value],
                filterIndex,
                column
              )
            }}
          />
        </FormGroup>
      </Grid>
    )
  }
}

export const PRICE_FILTER_OPTIONS = {
  filter: true,
  filterType: "custom",
  customFilterListOptions: {
    render: filterVal =>
      filterVal[1] === ""
        ? []
        : `${PriceFilterOperator.toString(filterVal[0])} ${filterVal[1]}`,
  },
  filterOptions: {
    display: (filters, onChange, filterIndex, column) => {
      return (
        <PriceFilter
          filters={filters}
          onChange={onChange}
          filterIndex={filterIndex}
          column={column}
        />
      )
    },
    logic: (price, filter) => {
      price = Number(price.replace(/\D/g, ""))
      let [operator, amount] = filter

      let include = true
      //skip filtering if user hasn't actually entered anything
      if (amount !== null && typeof amount !== "undefined") {
        switch (operator) {
          case PriceFilterOperator.GT:
            include = price > amount
            break
          case PriceFilterOperator.GTE:
            include = price >= amount
            break
          case PriceFilterOperator.LT:
            include = price < amount
            break
          case PriceFilterOperator.LTE:
            include = price <= amount
            break
        }
      }

      //logic wants to know what we DONT want to show
      return !include
    },
  },
}
