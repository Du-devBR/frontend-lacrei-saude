import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Global from "../styles/globals";
import StyledComponentsRegistry from "@/lib/registry";
import Favicon from "../../public/favicon.ico";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lacrei Saude - Infos",
  description: "Site de informações lacrei saude.",
  icons: [{ rel: "icon", url: Favicon.src }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <StyledComponentsRegistry>
          <Global />
          <Header />
          {children}
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
