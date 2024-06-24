import $ from "jquery";
import "bootstrap";
import DataTable from "datatables.net-bs5";
import * as SimpleJekyllSearch from "~/js/simple-jekyll-search.min.js";
import * as ThemeSwitcher from "~/js/theme-switcher.js";

$(function() {
  $(".table").DataTable({
    scrollX: true,
  });
});

import "~/styles/main.scss";
