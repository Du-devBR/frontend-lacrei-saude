import { PropsSocialNetwork } from "@/database/types";
import { SocialNetworkLink } from "./styles";
import Image from "next/image";

interface Props {
  data: PropsSocialNetwork;
}
export function SocialNetwork({ data }: Props) {
  return (
    <li>
      <SocialNetworkLink href={data.link} target="_blanck">
        <Image src={data.icon} alt="" />
      </SocialNetworkLink>
    </li>
  );
}
