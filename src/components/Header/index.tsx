import React from "react";

import { Container, Divright, WhoWeAre, BTNSchedule } from "./styles";
import LogoButton from "../LogoButton";
import Link from "next/link";

const Header = () => {
  return (
    <Container>
      <Link href="/">
        <LogoButton />
      </Link>
      <Divright>
        <Link href="/quemSomos">
          <WhoWeAre>Quem Somos</WhoWeAre>
        </Link>
        <Link href="/agendarConsulta">
          <BTNSchedule>Agendar Consulta</BTNSchedule>
        </Link>
      </Divright>
    </Container>
  );
};

export default Header;
