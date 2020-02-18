import React from "react";
import Link from "./Link";

export const armorColumns = [
  {
    title: "Name",
    field: "name",
    render: rowData => (
      <Link to={`/armor/${rowData.generatedId}`}>{rowData.name}</Link>
    ),
    defaultSort: "asc"
  },
  { title: "Defense", field: "defense" },
  { title: "Soak", field: "soak" },
  { title: "Price", field: "price" },
  { title: "Encum.", field: "encumbrance" },
  { title: "HP", field: "hp" },
  { title: "Rarity", field: "rarity" },
  { title: "Index", field: "index" }
];
