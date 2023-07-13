import React from "react";
import { Container } from "./style";

const setYear = new Date().getFullYear();

const Footer = () => {
  return (
    <Container>
      <p>&copy; Copyright Reserved {setYear}</p>
    </Container>
  );
};

export default Footer;
