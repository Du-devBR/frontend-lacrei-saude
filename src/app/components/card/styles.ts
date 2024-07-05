'use client'

import { themes } from "@/styles/global-themes"
import styled from "styled-components"

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
  background: ${themes.colors.background["$background-highlight"]};
  box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.3);
  text-align: center;

  h2 {
    font-size: ${themes.typography.headline["$Headline-sm-highlight"].fontSize};
    color: ${themes.colors.text["$text-accent"]};
    font-weight: ${themes.typography.headline["$Headline-xl"].fontWeight};
  }

  p {
    font-size: ${themes.typography.text["$Text-base"].fontSize};
    font-weight: ${themes.typography.text["$Text-base"].fontWeight};
    color: ${themes.colors.text["$text-body"]};
  }
`
