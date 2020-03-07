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

class PriceFilter extends React.Component {
  state = {
    operator: this.props.filters[this.props.filterIndex][0] || PriceFilterOperator.GTE
  }

  render() {
    let { filters, onChange, filterIndex, column } = this.props
    let [operator, amount] = filters[filterIndex]

    //set default values for appearance's sake if they don't already exist
    if (operator === null || typeof operator === "undefined") {
      operator = PriceFilterOperator.GTE
    }
    if (amount === null || typeof amount === "undefined") {
      amount = 0
    }
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
            value={amount}
            onChange={evt => {
              onChange(
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
      //default the filter value here, otherwise we'd have to default at table level
      //for every table with a price column
      // if (
      //   filters[filterIndex][0] === null ||
      //   typeof filters[filterIndex][0] === "undefined"
      // ) {
      //   filters[filterIndex][0] = PriceFilterOperator.GTE
      // }

      // if (
      //   filters[filterIndex][1] === null ||
      //   typeof filters[filterIndex][1] === "undefined"
      // ) {
      //   filters[filterIndex][1] = 0
      // }

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
      //skip filtering if user hasn't actually enterd anything
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
  }${value}`
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
