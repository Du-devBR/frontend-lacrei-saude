import Image from "next/image";
import {
  ButtonLinkService,
  ConntainerServices,
  ContainerCardService,
  ContainerImagePaciente,
  ContainerImageProfissional,
  InfoCardService,
} from "./styles";
import paciente from "../assets/images/card-pessoas-paciente.png";
import profissional from "../assets/images/card-profissionais-da-saude.png";

export default function Services() {
  return (
    <ConntainerServices>
      <h1>Temos o prazer de juntar pessoas do bem!</h1>
      <p>
        O nosso papel é construir a conexão entre as pessoas da
        comunidadeLGBTQIAPN+que precisam de atendimento clínico com
        profissionais da saúde.
      </p>
      <ContainerCardService>
        <Image src={paciente} alt="" />
        <ContainerImagePaciente></ContainerImagePaciente>
        <InfoCardService>
          <h2>Pacientes</h2>
          <p>
            Conecte-se a profissionais da saúde que estudam as necessidades da
            comunidade LGBTQIAPN+.
          </p>
          <ButtonLinkService href="https://paciente.lacreisaude.com.br/">
            Buscar Atendimento
          </ButtonLinkService>
        </InfoCardService>
      </ContainerCardService>
      <ContainerCardService>
        <Image src={profissional} alt="" />
        <ContainerImageProfissional></ContainerImageProfissional>
        <InfoCardService>
          <h2>Profissionais da saúde</h2>
          <p>
            Buscamos profissionais da saúde qualificados que priorizam o
            bem-estar físico e mental de pessoas LGBTQIAPN+.
          </p>
          <ButtonLinkService href="https://profissional.lacreisaude.com.br/">
            Oferecer Atendimento
          </ButtonLinkService>
        </InfoCardService>
      </ContainerCardService>
    </ConntainerServices>
  );
}
