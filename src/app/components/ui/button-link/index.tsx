import { ButtonLinkCta } from "./styles";

interface Props {
  link: string;
}
export function ButtonLink({ link }: Props) {
  return (
    <ButtonLinkCta href={link} target="_blanck">
      Acessar link
    </ButtonLinkCta>
  );
}
