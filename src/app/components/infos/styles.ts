'use client'

import { themes } from "@/styles/global-themes"
import styled from "styled-components"


export const ContainerInfos = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin: 4rem 0;

  h2 {
    font-size: ${themes.typography.headline["$Headline-lg"].fontSize};
    color: ${themes.colors.text["$text-accent"]};
    font-weight: ${themes.typography.headline["$Headline-lg"].fontWeight};
    text-align: center;
  }
`

export const GridCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-flow: dense;
  gap: 2rem;
`
