import Image from "next/image";
import { ContainerHeader, Logotype, Navbar } from "./styles";
import logo from "../../assets/images/logo.svg";
import { Button } from "../ui/button";
import Link from "next/link";
export function Header() {
  return (
    <ContainerHeader>
      <Logotype>
        <Link href={"/"}>
          <Image alt="" src={logo}></Image>
        </Link>
      </Logotype>
      <Navbar>
        <ul>
          <li>
            <a href="https://lacreisaude.com.br/quem-somos/" target="_blank">
              Quem é a Lacrei?
            </a>
          </li>
        </ul>
        <Button />
      </Navbar>
    </ContainerHeader>
  );
}
