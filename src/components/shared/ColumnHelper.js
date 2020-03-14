import * as React from "react"
import PropTypes from "prop-types"
import Link from "../shared/Link"

export const GENERATED_ID_COL_INDEX = 0
export const RESTRICTED_COL_INDEX = 1

const RESTRICTED_PRICE_FILTER_NAMES = ["Restricted", "Not restricted"]
export const RESTRICTED_PRICE_FILTER = {
  label: "Restricted Price",
  name: "restricted",
  options: {
    display: false,
    viewColumns: false,
    filter: true,
    filterType: "checkbox",
    filterOptions: {
      names: RESTRICTED_PRICE_FILTER_NAMES,
      logic(isRestricted, filterVal) {
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
    ...(includeRestricted ? [RESTRICTED_PRICE_FILTER] : []),
    ...columns,
  ]
}
