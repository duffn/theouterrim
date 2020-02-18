import React from "react";
import Link from "./Link";

export const booksColumns = [
  {
    title: "Name",
    field: "name",
    render: rowData => (
      <Link to={`/books/${rowData.generatedId}`}>{rowData.name}</Link>
    ),
    defaultSort: "asc"
  },
  { title: "System", field: "system" },
  { title: "Key", field: "key" },
  { title: "Initials", field: "initials" }
];
