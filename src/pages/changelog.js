import React from "react"
import { graphql } from "gatsby"

import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"

import Dashboard from "../components/shared/Dashboard"
import Link from "../components/shared/Link"
import SEO from "../components/shared/SEO"
import Title from "../components/shared/Title"
import { ThemeProvider } from "../components/shared/ThemeContext"

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  header: {
    marginBottom: "1rem",
  },
})

export default function ChangelogPage({ data }) {
  const classes = useStyles()

  return (
    <ThemeProvider>
      <Dashboard>
        <SEO title="Changelog" />
        <div className={classes.root}>
          <Title>Changelog</Title>
          <Typography variant="body1" className={classes.header} gutterBottom>
            This is a changelog of important updates to The Outer Rim. If you
            are looking for all updates and more detailed information, see the{" "}
            <Link
              component="a"
              href="https://github.com/duffn/theouterrim/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc"
            >
              issues
            </Link>{" "}
            and{" "}
            <Link
              component="a"
              href="https://github.com/duffn/theouterrim/pulls?q=is%3Apr+is%3Aopen+sort%3Aupdated-desc"
            >
              pull requests
            </Link>{" "}
            on GitHub.
          </Typography>

          {data.allChangelogYaml.nodes.map((node, index) => {
            return (
              <React.Fragment key={index}>
                <Typography component="h1" variant="h5" gutterBottom>
                  {node.date}
                </Typography>
                <ul>
                  {node.items.map((entry, itemIndex) => {
                    return <li key={`${index}_${itemIndex}`}>{entry.item}</li>
                  })}
                </ul>
              </React.Fragment>
            )
          })}
        </div>
      </Dashboard>
    </ThemeProvider>
  )
}

export const query = graphql`
  query ChangelogPageQuery {
    allChangelogYaml {
      nodes {
        date
        items {
          item
        }
      }
    }
  }
`
