import { PropsService } from "./types";
import acolhimento from '../app/assets/images/acolhimento.svg'
import inclusao from '../app/assets/images/inclusao.svg'
import valores from '../app/assets/images/valores.svg'

export const services: PropsService[] = [
  {
    id: 1,
    title: "Atendimento",
    description: "Encontre um profissional de saúde junto ao site da Lacrei Saúde.",
    icon: acolhimento,
    link: "https://paciente.lacreisaude.com.br/"
  },
  {
    id: 2,
    title: "Profissional",
    description: "Sejá um profissional cadastrado na Lacrei Saúde.",
    icon: inclusao,
    link: "https://profissional.lacreisaude.com.br/"
  },
  {
    id: 3,
    title: "Valores",
    description: "A Lacrei saúde possui um grande proprósito, veja sua Missão, Visão e Valores.",
    icon: valores,
    link: "https://lacreisaude.com.br/quem-somos/#missao-visao-valores"
  },
]
