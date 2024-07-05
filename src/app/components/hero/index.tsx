import { ContainerHero, InfoHero } from "./styles";
import icon from "../../assets/images/icon_hero.png";
import Image from "next/image";
export function Hero() {
  return (
    <ContainerHero>
      <InfoHero>
        <h1>Conecte-se com a Lacrei Saúde.</h1>
        <p>
          Aqui você encontra links que irão te direcionar para áreas específicas
          do site da Lacrei Saúde.
        </p>
      </InfoHero>
      <Image src={icon} alt="" />
    </ContainerHero>
  );
}
