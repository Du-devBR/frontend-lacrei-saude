import { services } from "@/database/services";
import { Card } from "../card";
import { ContainerInfos, GridCards } from "./styles";

export function Infos() {
  return (
    <ContainerInfos>
      <h2>Encontre os melhores atendimentos</h2>
      <GridCards>
        {services.map((service) => (
          <Card key={service.id} data={service} />
        ))}
      </GridCards>
    </ContainerInfos>
  );
}
