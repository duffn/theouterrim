import React from "react"

import AppBar from "@material-ui/core/AppBar"
import Box from "@material-ui/core/Box"
import CssBaseline from "@material-ui/core/CssBaseline"
import Container from "@material-ui/core/Container"
import Divider from "@material-ui/core/Divider"
import Drawer from "@material-ui/core/Drawer"
import Grid from "@material-ui/core/Grid"
import Hidden from "@material-ui/core/Hidden"
import IconButton from "@material-ui/core/IconButton"
import List from "@material-ui/core/List"
import MenuIcon from "@material-ui/icons/Menu"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"

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
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
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
        <Link component="a" color="secondary" href="https://patreon.com/duffn">
          Patreon
        </Link>{" "}
        |{" "}
        <Link
          component="a"
          color="secondary"
          href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&amp;hosted_button_id=NXWKR5KT8AS5U&amp;source=url"
        >
          Donate
        </Link>
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

export default function Dashboard(props) {
  const { container } = props
  const classes = useStyles()
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <TopLayout>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component={Link}
              to="/"
              underline="none"
              style={{ fontFamily: "Saira Semi Condensed", color: "#FFFFFF" }}
              variant="h6"
              noWrap
            >
              The Outer Rim
            </Typography>
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer}>
          <Hidden smUp implementation="css">
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true,
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={3}>
              {props.children}
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
