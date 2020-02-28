import * as React from "react"

export const GENERATED_ID_COL_INDEX = 0
export const RESTRICTED_COL_INDEX = 1

export const makeColumns = (columns, includeRestricted) => {
  includeRestricted = includeRestricted || false

  return [
    {
      name: "generatedId",
      options: { display: false, viewColumns: false, filter: false },
    },
    ...(includeRestricted
      ? [
          {
            name: "restricted",
            options: { display: false, viewColumns: false, filter: false },
          },
        ]
      : []),
    ...columns,
  ]
}
