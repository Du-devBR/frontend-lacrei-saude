'use client'

import { themes } from "@/styles/global-themes"
import styled from "styled-components"

export const ContainerFooter = styled.footer`
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
  border-top: solid 1px ${themes.colors.brand["$brand-purple-20"]} ;
`

export const InfosFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 2rem;
  margin-bottom: 1rem;
  border-bottom: solid 1px ${themes.colors.brand["$brand-purple-20"]} ;

  img {
    max-width: 240px;
    max-height: 152px;
  }
`

export const SocialNetworks = styled.nav`
  ul {
    display: flex;
    gap: 1rem;
    align-items: center;
  }
`

export const Copyright = styled.div`
  display: flex;
  margin: auto;

  p {
    font-size: ${themes.typography.text["$Text-sm"].fontSize};
    color: ${themes.colors.text["$text-body"]};
  }
`
