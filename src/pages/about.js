import React from "react"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"

import Dashboard from "../components/shared/Dashboard"
import Link from "../components/shared/Link"
import SEO from "../components/shared/SEO"
import Title from "../components/shared/Title"

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  header: {
    marginBottom: "1rem",
  },
})

export default function AboutPage({ data }) {
  const classes = useStyles()

  return (
    <Dashboard>
      <SEO title="About" />
      <Title>About The Outer Rim</Title>
      <Typography variant="body1" className={classes.header} gutterBotztom>
        The Outer Rim is a free and open-source fan-made site for Fantasy Flight
        Games' Star Wars role-playing game. Here you can find stats on weapons,
        vehicles, characters, and more!
      </Typography>

      <div className={classes.root}>
        <Typography variant="h6" gutterBottom>
          Who made this?
        </Typography>
        <Typography variant="body1">
          The Outer Rim code is maintained by a few folks and the content is
          contributed and curated by even more! See them all on the{" "}
          <Link to="/contributors/">contributors page</Link>.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Immense credit goes to the original Viluppo Star Wars FFG Index. That
          site was shut down in February 2020 and The Outer Rim was born from
          its ashes.
        </Typography>

        <Typography variant="h6" gutterBottom>
          What is "free and open-source"?
        </Typography>
        <Typography variant="body1">
          Free is well, free. You're never going to get charged to use this
          site. Ever.
        </Typography>
        <Typography variant="body1" gutterBottom>
          As for "open-source," it means that all the code that powers this
          website is{" "}
          <Link component="a" href="https://github.com/duffn/theouterrim">
            available online
          </Link>{" "}
          and is open to contributions from others.
        </Typography>

        <Typography variant="h6" gutterBottom>
          Can I help add and audit content?
        </Typography>
        <Typography variant="body1" gutterBottom>
          Please! Detailed instructions are currently in{" "}
          <Link
            component="a"
            href="https://docs.google.com/spreadsheets/d/1NLgyvj_xCfOGdDGqqfX1xtOvjmucXA0J_8LVq5d4Tm4/edit#gid=0"
          >
            this Google Sheet
          </Link>
          .
        </Typography>

        <Typography variant="h6" gutterBottom>
          Can I help with some code?
        </Typography>

        <Typography variant="body1" gutterBottom>
          Absolutely! Check out the{" "}
          <Link component="a" href="https://github.com/duffn/theouterrim">
            repository on GitHub
          </Link>
          .
        </Typography>

        <Typography variant="h6" gutterBottom>
          Why are some records missing data in some columns?
        </Typography>
        <Typography variant="body1" gutterBottom>
          We are constantly adding new data and auditing existing data. If you
          see a column that is empty for a particular record, it probably just
          hasn't been updated yet! If it's been that way for awhile, then
          something may indeed be wrong.{" "}
          <Link
            component="a"
            href={`mailto:${encodeURIComponent("feedback@theouterrim.co")}`}
          >
            Reach out
          </Link>{" "}
          and let us know. Check back often for new and updated data.
        </Typography>

        <Typography variant="h6" gutterBottom>
          Why can't I sort by some columns?
        </Typography>
        <Typography variant="body1" gutterBottom>
          In an effort to get more content in quickly, we disabled sorting on
          some columns. I'll spare you the tecnical details as to why this is,
          but rest assured that we will be turning sorting back on soon! Note
          that, in the meantime, you can still filter by these columns, so if
          you're looking for a particular value, use the filter in the
          upper-right hand corner of a table.
        </Typography>

        <Typography variant="h6" gutterBottom>
          How do I know which books have been entered and audited?
        </Typography>
        <Typography variant="body1" gutterBottom>
          You can find a full list on the{" "}
          <Link to="/content-status/">content status</Link> page.
        </Typography>

        <Typography variant="h6" gutterBottom>
          I found a bug in the data!
        </Typography>
        <Typography variant="body1" gutterBottom>
          Thanks for catching that! There is a link on each and every item
          detail page that you can use to send us an email and let us know about
          the issue.
        </Typography>

        <Typography variant="h6" gutterBottom>
          I found a bug in the code!
        </Typography>
        <Typography variant="body1" gutterBottom>
          Oops, sorry about that! If you could report it on the{" "}
          <Link
            component="a"
            href="https://github.com/duffn/theouterrim/issues"
          >
            issues page
          </Link>{" "}
          and we'll take a look.
        </Typography>

        <Typography variant="h6" gutterBottom>
          I have an idea for a new feature!
        </Typography>
        <Typography variant="body1" gutterBottom>
          Awesome! If you could let us know on the{" "}
          <Link
            component="a"
            href="https://github.com/duffn/theouterrim/issues"
          >
            issues page
          </Link>
          , we'll take a look.
        </Typography>
        <Typography variant="h6" gutterBottom>
          Can I donate to the project?
        </Typography>
        <Typography variant="body1" gutterBottom>
          Yes, you can! All donations are truly and greatly appreciated. You can
          either visit my{" "}
          <Link
            component="a"
            color="secondary"
            href="https://patreon.com/duffn"
          >
            Patreon
          </Link>{" "}
          page,{" "}
          <Link
            component="a"
            color="secondary"
            href="https://www.buymeacoffee.com/duffn"
          >
            buy me a coffee
          </Link>
          , or{" "}
          <Link
            component="a"
            color="secondary"
            href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&amp;hosted_button_id=NXWKR5KT8AS5U&amp;source=url"
          >
            donate via PayPal
          </Link>
          .
        </Typography>
      </div>
    </Dashboard>
  )
}
