import { PropsService } from "@/database/types";
import { ContainerCard } from "./styles";
import Image from "next/image";
import { ButtonLink } from "../ui/button-link";

interface Props {
  data: PropsService;
}
export function Card({ data }: Props) {
  return (
    <ContainerCard>
      <Image src={data.icon} alt="" />
      <h2>{data.title}</h2>
      <p>{data.description}</p>
      <ButtonLink key={data.id} link={data.link} />
    </ContainerCard>
  );
}
