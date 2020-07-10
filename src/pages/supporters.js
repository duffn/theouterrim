import React from "react"
import Grid from "@material-ui/core/Grid"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import StarIcon from "@material-ui/icons/Star"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"

import Dashboard from "../components/shared/Dashboard"
import Link from "../components/shared/Link"
import SEO from "../components/shared/SEO"
import { ThemeProvider } from "../components/shared/ThemeContext"

const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: "Saira Semi Condensed",
    marginTop: "2rem",
  },
}))

const donators = [
  "Andrew J.",
  "David B.",
  "Marshall M.",
  "Soren H.",
  "Eric S. ",
]

const senates = ["Brad K.", "Simon B."]
const padawans = ["Bryan", "Austin W.", "Randall D.", "Geoff R."]
const jedis = ["Brian E.", "Greg C."]

const Supporters = () => {
  const classes = useStyles()

  return (
    <ThemeProvider>
      <Dashboard>
        <SEO title="Supporters" />
        <Grid item xs={12}>
          <Typography
            className={classes.title}
            component="h1"
            variant="h4"
            gutterBottom
          >
            Thank you for supporting The Outer Rim!
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography component="p" gutterBottom>
            Find out more about the different tiers on{" "}
            <Link component="a" href="https://patreon.com/duffn">
              Patreon
            </Link>
            .
          </Typography>
          <Typography
            className={classes.title}
            component="h1"
            variant="h2"
            color="primary"
            gutterBottom
          >
            I Am The Senate
          </Typography>
          <List>
            {senates.map((senate, index) => {
              return (
                <ListItem key={index}>
                  <ListItemIcon>
                    <StarIcon />
                  </ListItemIcon>
                  <ListItemText
                    disableTypography
                    primary={
                      <Typography type="body2" style={{ fontSize: "2rem" }}>
                        {senate}
                      </Typography>
                    }
                  />
                </ListItem>
              )
            })}
          </List>
          <Typography
            className={classes.title}
            component="h1"
            variant="h3"
            color="primary"
            gutterBottom
          >
            Jedi
          </Typography>
          <List>
            {jedis.map((jedi, index) => {
              return (
                <ListItem key={index}>
                  <ListItemIcon>
                    <StarIcon />
                  </ListItemIcon>
                  <ListItemText
                    disableTypography
                    primary={
                      <Typography type="body2" style={{ fontSize: "1.5rem" }}>
                        {jedi}
                      </Typography>
                    }
                  />
                </ListItem>
              )
            })}
          </List>
          <Typography
            className={classes.title}
            component="h1"
            variant="h4"
            color="primary"
            gutterBottom
          >
            Padawan
          </Typography>
          <List>
            {padawans.map((padawan, index) => {
              return (
                <ListItem key={index}>
                  <ListItemIcon>
                    <StarIcon />
                  </ListItemIcon>
                  <ListItemText primary={padawan} />
                </ListItem>
              )
            })}
          </List>
        </Grid>
        <Grid item xs={6}>
          <Typography component="p" gutterBottom>
            Donate with{" "}
            <Link
              component="a"
              href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&amp;hosted_button_id=NXWKR5KT8AS5U&amp;source=url"
            >
              PayPal
            </Link>
            .
          </Typography>
          <Typography
            className={classes.title}
            component="h1"
            variant="h3"
            color="primary"
            gutterBottom
          >
            Donators
          </Typography>
          <List>
            {donators.map((donator, index) => {
              return (
                <ListItem key={index}>
                  <ListItemIcon>
                    <StarIcon />
                  </ListItemIcon>
                  <ListItemText primary={donator} />
                </ListItem>
              )
            })}
          </List>
        </Grid>
      </Dashboard>
    </ThemeProvider>
  )
}

export default Supporters
