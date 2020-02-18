import React from "react"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import ListSubheader from "@material-ui/core/ListSubheader"

import Link from "./Link"

export const booksListItems = (
  <div>
    <ListSubheader inset>Books</ListSubheader>
    <ListItem button component={Link} to="/books">
      <ListItemText primary="Books" />
    </ListItem>
  </div>
)

export const equipmentListItems = (
  <div>
    <ListSubheader inset>Equipment</ListSubheader>
    <ListItem button component={Link} to="/gear">
      <ListItemText primary="Gear" />
    </ListItem>
    <ListItem button component={Link} to="/weapons">
      <ListItemText primary="Weapons" />
    </ListItem>
    <ListItem button component={Link} to="/armor">
      <ListItemText primary="Armor" />
    </ListItem>
    <ListItem button component={Link} to="/weapon-attachments">
      <ListItemText primary="Attachments" />
    </ListItem>
    <ListItem button component={Link} to="/qualities">
      <ListItemText primary="Qualities" />
    </ListItem>
  </div>
)

export const transportationListItems = (
  <div>
    <ListSubheader inset>Transporation</ListSubheader>
    <ListItem button component={Link} to="/vehicles">
      <ListItemText primary="Vehicles" />
    </ListItem>
    <ListItem button component={Link} to="/starships">
      <ListItemText primary="Starships" />
    </ListItem>
    <ListItem button component={Link} to="/vehicle-attachments">
      <ListItemText primary="Attachments" />
    </ListItem>
  </div>
)

export const characterListItems = (
  <div>
    <ListSubheader inset>Characters</ListSubheader>
    <ListItem button component={Link} to="/skills">
      <ListItemText primary="Skills" />
    </ListItem>
    <ListItem button component={Link} to="/talents">
      <ListItemText primary="Talents" />
    </ListItem>
    <ListItem button component={Link} to="/abilities">
      <ListItemText primary="Abilities" />
    </ListItem>
    <ListItem button component={Link} to="/species">
      <ListItemText primary="Species" />
    </ListItem>
  </div>
)

export const adversaryListItems = (
  <div>
    <ListSubheader inset>Adversaries</ListSubheader>
    <ListItem button component={Link} to="/adversaries">
      <ListItemText primary="Adversaries" />
    </ListItem>
    <ListItem button component={Link} to="/adversaries-gear">
      <ListItemText primary="Gear" />
    </ListItem>
    <ListItem button component={Link} to="/adversaries-weapons">
      <ListItemText primary="Weapons" />
    </ListItem>
    <ListItem button component={Link} to="/adversaries-armor">
      <ListItemText primary="Armor" />
    </ListItem>
  </div>
)

export const creatureListItems = (
  <div>
    <ListSubheader inset>Creatures</ListSubheader>
    <ListItem button component={Link} to="/creatures">
      <ListItemText primary="Creatures" />
    </ListItem>
    <ListItem button component={Link} to="/creatures-weapons">
      <ListItemText primary="Weapons" />
    </ListItem>
  </div>
)

export const secondaryListItems = (
  <div>
    <ListSubheader inset>The Outer Rim</ListSubheader>
    <ListItem button component={Link} to="/about">
      <ListItemText primary="About" />
    </ListItem>
    <ListItem button component={Link} to="/supporters">
      <ListItemText primary="Supporters" />
    </ListItem>
    <ListItem button component="a" href="https://patreon.com/duffn">
      <ListItemText style={{ textDecoration: "underline" }} primary="Patreon" />
    </ListItem>
    <ListItem
      button
      component="a"
      href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&amp;hosted_button_id=NXWKR5KT8AS5U&amp;source=url"
    >
      <ListItemText style={{ textDecoration: "underline" }} primary="Donate" />
    </ListItem>
  </div>
)
