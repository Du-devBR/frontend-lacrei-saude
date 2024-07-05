'use client'

import { themes } from "@/styles/global-themes"
import styled from "styled-components"


export const ContainerHero = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 3rem 0;

  img {
    background: linear-gradient(to right, ${themes.colors.gradient["$gradient-simbolo"]});
    border-radius: 0.5rem;
  }

  @media (max-width: ${themes.grid.md.breakpoints}) {
    margin: 2rem 0;
    flex-direction: column;
    gap: 2rem;
  }
`

export const InfoHero = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 50%;

  h1 {
    font-size: ${themes.typography.headline["$Headline-xl"].fontSize};
    color: ${themes.colors.text["$text-accent"]};
    font-weight: ${themes.typography.headline["$Headline-xl"].fontWeight};
  }

  p {
    font-size: ${themes.typography.headline["$Headline-sm"].fontSize};
    font-weight: ${themes.typography.headline["$Headline-sm"].fontWeight};
    color: ${themes.colors.text["$text-body"]};
  }

  @media (max-width: ${themes.grid.md.breakpoints}) {
    max-width: 100%;
  }

  @media (max-width: ${themes.grid.sm.breakpoints}) {
    text-align: center;
    h1 {
      font-size: ${themes.typography.headline["$Headline-lg"].fontSize};
    }
    p{
      font-size: ${themes.typography.text["$Text-xl-highlight"].fontSize};
    }
  }
`
