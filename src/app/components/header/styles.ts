
'use client'
import { themes } from "@/styles/global-themes";
import styled from "styled-components";

export const ContainerHeader = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;
`

export const Logotype = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  img {
    max-width: 210px;
  }

`
export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;

  ul {
    li, a {
      text-decoration: none;
      font-size: ${themes.typography.text["$Text-xl-highlight"]};
      color: ${themes.colors.text["$text-accent"]};
      transition: ease-in-out 0.3s;

      &:hover{
        color: ${themes.colors.text["$text-hover"]};
      }
    }
  }
`
