'use client'

import { themes } from "@/styles/global-themes";
import styled from "styled-components";

export const ButtonLinkCta = styled.a`
  padding: 0.625rem 2rem;
  text-decoration: none;
  border: none;
  border-radius: 0.5rem;
  transition: ease-in-out 0.3s;
  margin: auto;
  font-size: ${themes.typography.text["$Text-xl-highlight"]};
  color: ${themes.colors.text["$text-invert"]};
  background-color: ${themes.colors.background["$background-accent-medium"]};

  &:hover{
    background-color: ${themes.colors.background["$background-accent-dark"]};
  }
`
