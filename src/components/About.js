import React from "react"
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"

import Link from "./shared/Link"
import Title from "./shared/Title"

export default function About({ title }) {
  return (
    <Container>
      <Title>{title}</Title>
      <Typography component="p" gutterBottom>
        Welcome to The Outer Rim!
      </Typography>
      <Typography component="p" gutterBottom>
        The Outer Rim is a fan-made site for the Fantasy Flight Games' Star Wars
        role-playing game. Here you can find stats on weapons, vehicles,
        characters, and more!
      </Typography>
      <Typography component="p" gutterBottom>
        Not enough thanks can be given to the amazing, original{" "}
        <Link
          component="a"
          href="https://web.archive.org/web/20190203010718/http://swrpg.viluppo.net/"
        >
          viluppo FFG Star Wars index
        </Link>
        . After viluppo was not updated for years and eventually pulled down,
        this site was born from its ashes.
      </Typography>
      <Typography component="p" gutterBottom>
        If you enjoy the site, please consider donating through{" "}
        <Link component="a" href="https://patreon.com/duffn">
          Patreon
        </Link>{" "}
        or{" "}
        <Link
          component="a"
          href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&amp;hosted_button_id=NXWKR5KT8AS5U&amp;source=url"
        >
          PayPal.
        </Link>
      </Typography>
    </Container>
  )
}
