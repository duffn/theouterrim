import React from "react"
import clsx from "clsx"
import AppBar from "@material-ui/core/AppBar"
import Box from "@material-ui/core/Box"
import CssBaseline from "@material-ui/core/CssBaseline"
import Container from "@material-ui/core/Container"
import Divider from "@material-ui/core/Divider"
import Drawer from "@material-ui/core/Drawer"
import Grid from "@material-ui/core/Grid"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"
import IconButton from "@material-ui/core/IconButton"
import List from "@material-ui/core/List"
import MenuIcon from "@material-ui/icons/Menu"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import { makeStyles, useTheme } from "@material-ui/core/styles"

import Link from "./Link"
import TopLayout from "./TopLayout"

import {
  booksListItems,
  equipmentListItems,
  transportationListItems,
  characterListItems,
  adversaryListItems,
  creatureListItems,
  secondaryListItems,
} from "./listItems"

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}))

function Copyright() {
  return (
    <>
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        <Link color="inherit" to="/">
          The Outer Rim
        </Link>{" "}
        {new Date().getFullYear()} |{" "}
        <a color="#E85B46" href="https://patreon.com/duffn">
          Patreon
        </a>{" "}
        |{" "}
        <a
          color="#0070BA"
          href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&amp;hosted_button_id=NXWKR5KT8AS5U&amp;source=url"
        >
          Donate
        </a>{" "}
        | <a href="https://github.com/duffn/theouterrim">Source Code</a>
      </Typography>
      <Typography
        component="p"
        style={{ color: "#D2D2D2", fontStyle: "italic", marginTop: "2rem" }}
        gutterBottom
      >
        Star Wars, Edge of the Empire, Age of Rebellion, Force and Destiny, and
        all associated works are the copyright of their respective copyright
        holders.
      </Typography>
    </>
  )
}

const drawer = (
  <>
    <Divider />
    <List>{booksListItems}</List>
    <Divider />
    <List>{equipmentListItems}</List>
    <Divider />
    <List>{transportationListItems}</List>
    <Divider />
    <List>{characterListItems}</List>
    <Divider />
    <List>{adversaryListItems}</List>
    <Divider />
    <List>{creatureListItems}</List>
    <Divider />
    <List>{secondaryListItems}</List>
  </>
)

export default function Dashboard({ children }) {
  const classes = useStyles()
  const theme = useTheme()
  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <TopLayout>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              style={{ fontFamily: "Saira Semi Condensed" }}
              variant="h6"
              noWrap
            >
              The Outer Rim
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          {drawer}
        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={3}>
              {children}
            </Grid>
            <Box pt={15}>
              <Copyright />
            </Box>
          </Container>
        </main>
      </div>
    </TopLayout>
  )
}
