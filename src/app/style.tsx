"use client";

import { themes } from "@/styles/global-themes";
import styled from "styled-components";

export const Pai = styled.div`
  width: 100%;
  background-color: gray;
`;

export const Teste = styled.h1`
  color: ${themes.colors.brand["$brand-purple-20"]};
  font-size: ${themes.typography.headline["$Headline-xl"].fontSize};
  font-weight: ${themes.typography.headline["$Headline-xl"].fontWeight};
  line-height: ${themes.typography.headline["$Headline-xl"].lineHeiht};
`;
