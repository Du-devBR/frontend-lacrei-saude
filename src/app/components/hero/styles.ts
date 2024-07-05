'use client'

import { themes } from "@/styles/global-themes"
import styled from "styled-components"


export const ContainerHero = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 400px;

  img {
    background: linear-gradient(to right, ${themes.colors.gradient["$gradient-simbolo"]});
    border-radius: 0.5rem;
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
`
