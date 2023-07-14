import React from "react";
import { Container } from "./style";



const Footer = () => {
  const setYear = new Date().getFullYear();
  return (
    <Container>
      <p>&copy; Copyright Reserved {setYear}</p>
    </Container>
  );
};

export default Footer;
