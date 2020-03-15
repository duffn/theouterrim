import * as React from "react"
import PropTypes from "prop-types"
import Link from "../shared/Link"
import {
  FormLabel,
  MenuItem,
  Select,
  TextField,
  FormGroup,
  Grid,
} from "@material-ui/core"

export const GENERATED_ID_COL_INDEX = 0
export const RESTRICTED_COL_INDEX = 1

const RESTRICTED_PRICE_FILTER_NAMES = ["Restricted", "Not restricted"]
const RESTRICTED_COL = {
  label: "Restricted Price",
  name: "restricted",
  options: {
    display: false,
    viewColumns: false,
    filter: true,
    filterType: "checkbox",
    filterOptions: {
      names: RESTRICTED_PRICE_FILTER_NAMES,
      logic: (isRestricted, filterVal) => {
        const show =
          (filterVal.indexOf(RESTRICTED_PRICE_FILTER_NAMES[0]) > -1 &&
            isRestricted) ||
          (filterVal.indexOf(RESTRICTED_PRICE_FILTER_NAMES[1]) > -1 &&
            !isRestricted)
        return !show
      },
    },
  },
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

class PriceFilter extends React.Component {
  state = {
    operator:
      this.props.filters[this.props.filterIndex][0] || PriceFilterOperator.GTE,
    amount: this.props.filters[this.props.filterIndex][1] || 0,
  }

  constructor(props) {
    super(props)

    props.filters[props.filterIndex] = [PriceFilterOperator.GTE, 0]
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
      filters[filterIndex] = [PriceFilterOperator.GTE, 0]
      return { operator: PriceFilterOperator.GTE, amount: 0 }
    } else return null
  }

  render() {
    let { filterIndex, column } = this.props
    return (
      <Grid xs={12}>
        <FormLabel>Price</FormLabel>
        <FormGroup row>
          <Select
            style={{
              flex: 1,
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
            style={{ flex: 3 }}
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
      `${PriceFilterOperator.toString(filterVal[0])} ${filterVal[1]}`,
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

export function humanizedNumberRender(value) {
  return (value && value.toLocaleString && value.toLocaleString()) || value
}

export function indexRender(value, tableMeta, bookData, currentBook) {
  let indices = value.split(",")
  return (
    <div>
      {indices.map((index, count) => {
        let idAndPage = index.split(":").map(s => s.trim())
        let book = bookData.allBooksYaml.edges
          .map(({ node }) => node)
          .filter(node => node.generatedId === idAndPage[0])

        return currentBook !== idAndPage[0] ? (
          <span key={`${tableMeta.rowData[GENERATED_ID_COL_INDEX]}-${count}`}>
            <Link to={`/books/${idAndPage[0]}/`}>{book[0].name}</Link>:
            {idAndPage[1]}
            {count !== indices.length - 1 ? ", " : ""}
          </span>
        ) : (
          <span key={`${tableMeta.rowData[GENERATED_ID_COL_INDEX]}-${count}`}>
            {book[0].name}:{idAndPage[1]}
            {count !== indices.length - 1 ? ", " : ""}
          </span>
        )
      })}
    </div>
  )
}

export const ColumnProviderPropTypes = {
  children: PropTypes.element.isRequired,
  currentBook: PropTypes.string,
  //metadata is a dictionary that maps generatedId to the object
  //of the shape described here
  metadata: PropTypes.objectOf({
    isRestricted: PropTypes.bool,
    isBrawn: PropTypes.bool,
  }),
}

//columnMeta will be the metadata object described in ColumnProviderPropTypes
export function damageRender(value, tableMeta, columnMeta) {
  return `${
    columnMeta[tableMeta.rowData[GENERATED_ID_COL_INDEX]].isBrawn ? "+" : ""
  }${value.toLocaleString && value.toLocaleString() || value}`
}

export const makeColumns = (columns, includeRestricted) => {
  includeRestricted = includeRestricted || false

  return [
    {
      name: "generatedId",
      options: { display: false, viewColumns: false, filter: false },
    },
    ...(includeRestricted ? [RESTRICTED_COL] : []),
    ...columns,
  ]
}
