import { PropsService, PropsSocialNetwork } from "./types";
import linkedin from '../app/assets/images/icon-linkedin.svg'
import facebook from '../app/assets/images/icons-facebook.svg'
import instagran from '../app/assets/images/icon-instagran.svg'

export const socialNetworks: PropsSocialNetwork[] = [
  {
    id: 1,
    name: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/company/lacrei"
  },
  {
    id: 2,
    name: "Facebook",
    icon: facebook,
    link: "https://www.facebook.com/lacrei.saude/"
  },
  {
    id: 3,
    name: "Instagran",
    icon: instagran,
    link: "https://www.instagram.com/lacrei.saude"
  },
]
