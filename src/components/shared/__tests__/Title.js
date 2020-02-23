import React from "react"
import renderer from "react-test-renderer"
import Title from "../Title"

describe("Title", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Title>The Outer Rim</Title>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
