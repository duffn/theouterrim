import React from "react"

import About from "../components/About"
import Dashboard from "../components/shared/Dashboard"
import SEO from "../components/shared/SEO"

export default function Index() {
  return (
    <Dashboard>
      <SEO title="Home" />
      <About title="The Outer Rim" />
    </Dashboard>
  )
}
