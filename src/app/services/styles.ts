'use client'

import { themes } from "@/styles/global-themes"
import styled from "styled-components"

export const ConntainerServices = styled.section`
  display: flex;
  flex-direction: column;
  margin: 3rem 0;

  h1{
    font-size: ${themes.typography.headline["$Headline-xl"].fontSize};
    color: ${themes.colors.text["$text-heading"]};
    text-align: center;
    margin-bottom: 1rem;
  }

  p{
    font-size: ${themes.typography.headline["$Headline-sm-highlight"].fontSize};
    color: ${themes.colors.text["$text-body"]};
    text-align: center;
    margin-bottom: 3rem;
  }

  @media (max-width: ${themes.grid.sm.breakpoints}) {
    h1{
    font-size: ${themes.typography.headline["$Headline-lg"].fontSize};
    color: ${themes.colors.text["$text-heading"]};
    text-align: center;
  }

  p{
    font-size: ${themes.typography.headline["$Headline-sm-highlight"].fontSize};
    color: ${themes.colors.text["$text-body"]};
    text-align: center;
    margin-bottom: 3rem;
  }
  }

`

export const ContainerCardService = styled.div`
  display: flex;
  border-radius: 0.5rem;
  position: relative;
  gap: 42px;
  overflow: hidden;
  margin: 4rem 0;

   &:nth-last-child(1){
    flex-direction: row-reverse;
  }

  img {
    max-width: 450px;
    max-height: 450px;
    z-index: 10;
    border-radius: 0 0 38% 0 ;
    margin-top: -40px;

  }

  @media (max-width: ${themes.grid.sm.breakpoints}) {
    margin: 0rem 0;
    padding: 1.5rem;
    img {
      display: none;
    }
  }
`

export const ContainerImagePaciente = styled.div`
  position: absolute;
  width: 450px;
  height: 450px;
  top: -82px;
  left: -112px;
  gap: 0px;
  opacity: 0px;
  border-radius: 100%;
  background: linear-gradient(to right, ${themes.colors.gradient["$gradient-lacrei"]});

  @media (max-width: ${themes.grid.sm.breakpoints}) {
    display: none;
  }

`

export const ContainerImageProfissional = styled.div`
  position: absolute;
  width: 450px;
  height: 450px;
  top: -80px;
  right: -80px;
  gap: 0px;
  opacity: 0px;
  border-radius: 100%;
  background: linear-gradient(to right, ${themes.colors.gradient["$gradient-lacrei"]});

  @media (max-width: ${themes.grid.sm.breakpoints}) {
    display: none;
  }

`

export const  InfoCardService = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;

  h2{
    font-size: ${themes.typography.headline["$Headline-lg"].fontSize};
    color: ${themes.colors.text["$text-heading"]};
  }

  p{
    font-size: ${themes.typography.headline["$Headline-sm-highlight"].fontSize};
    color: ${themes.colors.text["$text-body"]};
    text-align: left;
    margin-bottom: 1rem;
  }

  @media (max-width: ${themes.grid.sm.breakpoints}) {
    h2{
      font-size: ${themes.typography.headline["$Headline-sm-highlight"].fontSize};
    }

    p{
      font-size: ${themes.typography.text["$Text-base"].fontSize};
      color: ${themes.colors.text["$text-body"]};
    }
  }

`
export const ButtonLinkService = styled.a`
  align-self: flex-start;
  padding: 0.625rem 2rem;
  text-decoration: none;
  border: none;
  border-radius: 0.5rem;
  transition: ease-in-out 0.3s;
  font-size: ${themes.typography.text["$Text-xl-highlight"]};
  color: ${themes.colors.text["$text-invert"]};
  background-color: ${themes.colors.background["$background-accent-medium"]};

  &:hover{
    background-color: ${themes.colors.background["$background-accent-dark"]};
  }

  @media (max-width: ${themes.grid.sm.breakpoints}) {
    width: 100%;
    text-align: center;
  }
`
