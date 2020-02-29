import {
  GENERATED_ID_COL_INDEX,
  RESTRICTED_COL_INDEX,
  makeColumns,
} from "../ColumnFactory"

describe("The ColumnFactory", () => {
  const generatedIdCol = {
    name: "generatedId",
    options: { display: false, viewColumns: false, filter: false },
  }

  const restrictedCol = {
    name: "restricted",
    options: { display: false, viewColumns: false, filter: false },
  }

  const startCols = [
    {
      label: "Name",
      name: "name",
      options: {
        customBodyRender: (value, tableMeta) => (
          <Link to={`/armor/${tableMeta.rowData[GENERATED_ID_COL_INDEX]}/`}>
            {value}
          </Link>
        ),
        sortDirection: "asc",
        filter: false,
      },
    },
    { label: "Defense", name: "defense" },
    { label: "Soak", name: "soak" },
    { label: "Price", name: "price" },
    { label: "Encum.", name: "encumbrance" },
    { label: "HP", name: "hp" },
    { label: "Rarity", name: "rarity" },
    { label: "Index", name: "index", options: { filter: false } },
  ]

  it("doesn't change any of the passed in columns", () => {
    expect(makeColumns(startCols)).toEqual(expect.arrayContaining(startCols))
  })

  it("inserts the generatedId column in the correct place", () => {
    expect(makeColumns(startCols)[GENERATED_ID_COL_INDEX]).toEqual(
      generatedIdCol
    )
  })

  it("inserts the restricted column when the includeRestricted argument is true", () => {
    let cols = makeColumns(startCols, true)
    expect(cols[RESTRICTED_COL_INDEX]).toEqual(restrictedCol)
  })

  it("doesn't insert the restricted column when the includeRestricted argument is false", () => {
    expect(makeColumns(startCols, false)[RESTRICTED_COL_INDEX]).not.toEqual(
      restrictedCol
    )
  })

  it("doesn't insert teh restricted column when the includeRestricted argument is absent", () => {
    expect(makeColumns(startCols)[RESTRICTED_COL_INDEX]).not.toEqual(
      restrictedCol
    )
  })
})
