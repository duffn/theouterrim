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

export const PRICE_FILTER_OPTIONS = {
  filter: true,
  filterType: "custom",
  filterOptions: {
    display: (filters, onChange, filterIndex, column) => {
      return (
        <Grid xs={12}>
          <FormLabel>Price</FormLabel>
          <FormGroup row>
            <Select
              style={{
                flex: 1,
                textAlign: "center"
              }}
              value={filters[filterIndex][0] || 0}
              onChange={evt => {
                filters[filterIndex][0] = evt.target.value
              }}
            >
              <MenuItem value={0}>&gt;</MenuItem>
              <MenuItem value={1}>&gt;=</MenuItem>
              <MenuItem value={2}>&lt;</MenuItem>
              <MenuItem value={3}>&lt;=</MenuItem>
            </Select>
            <TextField
              style={{ flex: 3 }}
              type="number"
              value={filters[filterIndex][1]}
              onChange={evt => {
                filters[filterIndex][1] = evt.target.value
                onChange(filters[filterIndex], filterIndex, column)
              }}
            />
          </FormGroup>
        </Grid>
      )
    },
    logic: (price, filter) => {
      price = Number(price.replace(/\D/g, ""))
      let [operator, amount] = filter

      let include = true
      //skip filtering if user hasn't actually enterd anything
      if (amount !== null && typeof amount !== "undefined") {
        //if user doesn't change from default, operator filter won't have a value, so default here too
        switch (operator || 0) {
          case 0:
            include = price > amount
            break
          case 1:
            include = price >= amount
            break
          case 2:
            include = price < amount
            break
          case 3:
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
