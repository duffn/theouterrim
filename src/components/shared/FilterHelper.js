import React from "react"
import {
  FormLabel,
  FormGroup,
  TextField
} from '@material-ui/core'
import { RESTRICTED_COL_INDEX } from './ColumnHelper'

export const getCustomRangeFilterListOptions = (labelName) => {
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
      }
    }
  }
}

export const getRangeFilterOptions = (labelName) => {
  return {
    filterOptions: {
      names: [],
      logic(v, filters) {
        /**
         * Necessary for clearing non number values
         * and parsing to number (e.g. localized restricted price "(R) 1,000")
         */
        const clearedValue = typeof (v) === "string"
          ? parseInt(v.replace(/[\D]/gi, ""), 10)
          : v
        if (filters[0] && filters[1]) {
          return clearedValue < filters[0] || clearedValue > filters[1]
        } else if (filters[0]) {
          return clearedValue < filters[0]
        } else if (filters[1]) {
          return clearedValue > filters[1]
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
    }
  }
}

export const getCustomPriceBodyRender = () => {
  return {
    customBodyRender: (value, tableMeta) =>
      `${
      tableMeta.rowData[RESTRICTED_COL_INDEX] ? "(R) " : ""
      }${value.toLocaleString()}`,
  }
}