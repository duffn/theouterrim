import React from "react";
import Link from "./Link";

export const qualitiesColumns = [
  {
    title: "Name",
    field: "name",
    render: rowData => (
      <Link to={`/qualities/${rowData.generatedId}`}>{rowData.name}</Link>
    ),
    defaultSort: "asc"
  },
  { title: "Active", field: "active" },
  { title: "Ranked", field: "ranked" },
  { title: "Effect", field: "effect" },
  { title: "Index", field: "index" }
];
