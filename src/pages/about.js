import React from "react"

import About from "../components/About"
import Dashboard from "../components/Dashboard"
import SEO from "../components/SEO"

export default function AboutPage() {
  return (
    <Dashboard>
      <SEO title="About" />
      <About title="About" />
    </Dashboard>
  )
}
