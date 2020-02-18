import React from "react"

import About from "../components/About"
import Dashboard from "../components/shared/Dashboard"
import SEO from "../components/shared/SEO"

export default function AboutPage() {
  return (
    <Dashboard>
      <SEO title="About" />
      <About title="About" />
    </Dashboard>
  )
}
