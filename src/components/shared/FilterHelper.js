import React from "react"
import {
    FormLabel,
    FormGroup,
    TextField
} from '@material-ui/core'
import { RESTRICTED_COL_INDEX } from './ColumnHelper'

export const createRangeFilter = (labelName, isPriceRangeFilter) => {
    isPriceRangeFilter = isPriceRangeFilter || false
    if(isPriceRangeFilter || false) return createPriceRangeFilter(labelName)
    return {
        filter: true,
        filterType: "custom",
        customFilterListOptions: {
          render: v => {
            if (v[0] && v[1]) {
              return `Min ${labelName}: ${v[0]}, Max ${labelName}: ${v[1]}`
            } else if (v[0]) {
              return `Min ${labelName}: ${v[0]}`
            } else if (v[1]) {
              return `Max ${labelName}: ${v[1]}`
            }
            return false;
          },
          update: (filterList, filterPos, index) => {
            if (filterPos === 0) {
              filterList[index].splice(filterPos, 1, '')
            } else if (filterPos === 1) {
              filterList[index].splice(filterPos, 1)
            } else if (filterPos === -1) {
              filterList[index] = []
            }

            return filterList
          },
        },
        filterOptions: {
          names: [],
          logic(v, filters) {
            if (filters[0] && filters[1]) {
              return v < filters[0] || v > filters[1]
            } else if (filters[0]) {
              return v < filters[0]
            } else if (filters[1]) {
              return v > filters[1]
            }
            return false
          },
          display: (filterList, onChange, index, column) => (
            <div>
              <FormLabel>{labelName}</FormLabel>
              <FormGroup>
                <TextField
                  label="min"
                  type="number"
                  InputLabelProps={{ shrink: true }}
                  value={filterList[index][0] || ''}
                  onChange={event => {
                    filterList[index][0] = event.target.value
                    onChange(filterList[index], index, column)
                  }}
                />
                <TextField
                  label="max"
                  type="number"
                  InputLabelProps={{ shrink: true }}
                  value={filterList[index][1] || ''}
                  onChange={event => {
                    filterList[index][1] = event.target.value
                    onChange(filterList[index], index, column)
                  }}
                />
              </FormGroup>
            </div>
          ),
        },
      }
}

const createPriceRangeFilter = (labelName) => {
    return {
        filter: true,
        filterType: "custom",
        customBodyRender: (value, tableMeta) =>
          `${
          tableMeta.rowData[RESTRICTED_COL_INDEX] ? "(R) " : ""
          }${value.toLocaleString()}`,
        customFilterListOptions: {
          render: v => {
            if (v[0] && v[1]) {
              return `Min ${labelName}: ${v[0]}, Max ${labelName}: ${v[1]}`
            } else if (v[0]) {
              return `Min Price: ${v[0]}`
            } else if (v[1]) {
              return `Max Price: ${v[1]}`
            }
            return false;
          },
          update: (filterList, filterPos, index) => {
            if (filterPos === 0) {
              filterList[index].splice(filterPos, 1, '')
            } else if (filterPos === 1) {
              filterList[index].splice(filterPos, 1)
            } else if (filterPos === -1) {
              filterList[index] = []
            }

            return filterList
          },
        },
        filterOptions: {
          names: [],
          logic(price, filters) {
            const clearedPrice = parseInt(price.replace(/[\D]/gi, ""), 10)
            if (filters[0] && filters[1]) {
              return clearedPrice < filters[0] || clearedPrice > filters[1]
            } else if (filters[0]) {
              return clearedPrice < filters[0]
            } else if (filters[1]) {
              return clearedPrice > filters[1]
            }
            return false
          },
          display: (filterList, onChange, index, column) => (
            <div>
              <FormLabel>{labelName}</FormLabel>
              <FormGroup>
                <TextField
                  label="min"
                  type="number"
                  InputLabelProps={{ shrink: true }}
                  value={filterList[index][0] || ''}
                  onChange={event => {
                    filterList[index][0] = event.target.value
                    onChange(filterList[index], index, column)
                  }}
                />
                <TextField
                  label="max"
                  type="number"
                  InputLabelProps={{ shrink: true }}
                  value={filterList[index][1] || ''}
                  onChange={event => {
                    filterList[index][1] = event.target.value
                    onChange(filterList[index], index, column)
                  }}
                />
              </FormGroup>
            </div>
          ),
        },
      }
}