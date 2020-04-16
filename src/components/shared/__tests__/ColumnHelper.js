import {
  GENERATED_ID_COL_INDEX,
  RESTRICTED_COL_INDEX,
  makeColumns,
} from "../ColumnHelper"

describe("The ColumnFactory", () => {
  const generatedIdCol = {
    name: "generatedId",
    options: { display: false, viewColumns: false, filter: false },
  }

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

  const startCols = [
    {
      label: "Name",
      name: "name",
      options: {
        customBodyRender: (value, tableMeta) => (
          <Link
            to={`/armor/${tableMeta.rowData[GENERATED_ID_COL_INDEX]}/${slugify(
              value
            )}/`}
          >
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

  // it("inserts the restricted column when the includeRestricted argument is true", () => {
  //   let cols = makeColumns(startCols, true)
  //   expect(cols[RESTRICTED_COL_INDEX]).toBe(RESTRICTED_COL)
  // })

  it("doesn't insert the restricted column when the includeRestricted argument is false", () => {
    expect(makeColumns(startCols, false)[RESTRICTED_COL_INDEX]).not.toEqual(
      RESTRICTED_COL
    )
  })

  it("doesn't insert the restricted column when the includeRestricted argument is absent", () => {
    expect(makeColumns(startCols)[RESTRICTED_COL_INDEX]).not.toEqual(
      RESTRICTED_COL
    )
  })
})
