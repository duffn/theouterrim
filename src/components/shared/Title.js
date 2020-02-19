import React from "react"
import PropTypes from "prop-types"
import Typography from "@material-ui/core/Typography"

export default function Title(props) {
  return (
    <Typography
      style={{ fontFamily: "Saira Semi Condensed" }}
      component="h1"
      variant="h4"
      color="primary"
      gutterBottom
    >
      {props.children}
    </Typography>
  )
}

Title.propTypes = {
  children: PropTypes.node,
}
