'use client'

import { createGlobalStyle } from "styled-components"
import { themes } from "./global-themes"

export default  createGlobalStyle`
  *{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    list-style: none;
    outline: none;
  }

  @media (max-width: ${themes.grid.sm.breakpoints}) {
    body{
      padding: 0 ${themes.grid.sm.margin};
      max-width: ${themes.grid.sm.maxWidth};
      margin: 0 auto;
    }
  }

  @media (min-width: ${themes.grid.sm.breakpoints}) and (max-width: ${themes.grid.md.breakpoints}) {
    body {
      max-width: ${themes.grid.md.maxWidth};
      padding: 0 ${themes.grid.md.margin};
      margin: 0 auto;
    }
  }

  @media (min-width: ${themes.grid.md.breakpoints}) and (max-width: ${themes.grid.lg.breakpoints}) {
    body{
      max-width: ${themes.grid.lg.maxWidth};
      padding: 0 ${themes.grid.lg.margin};
      margin: 0 auto;
    }
  }

  @media (min-width: ${themes.grid.lg.breakpoints}) {
    body {
      max-width: ${themes.grid.xl.maxWidth};
      padding: 0 ${themes.grid.xl.margin};
      margin: 0 auto;
    }
  }
`
