import Image from "next/image";
import {
  ContainerFooter,
  Copyright,
  InfosFooter,
  SocialNetworks,
} from "./styles";
import iconFooter from "../../assets/images/icon-footer.png";
import { socialNetworks } from "@/database/social-networks";
import { SocialNetwork } from "../ui/social-network";

export function Footer() {
  return (
    <ContainerFooter>
      <InfosFooter>
        <Image src={iconFooter} alt="" />
        <SocialNetworks>
          <ul>
            {socialNetworks.map((socialNetwork) => (
              <SocialNetwork key={socialNetwork.id} data={socialNetwork} />
            ))}
          </ul>
        </SocialNetworks>
      </InfosFooter>
      <Copyright>
        <p>
          Site de links informativos para Lacrei Saúde - Todos os direitos
          resevados á Lacrei Saúde.
        </p>
      </Copyright>
    </ContainerFooter>
  );
}
