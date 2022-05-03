import React from "react";
import styled from "styled-components";
const Logo = styled.h1`
  display: inline-block;
  color: ${(props) => props.theme.text};
  font-family: "Pacifico", cursive;
  text-transform: uppercase;
  background-image: linear-gradient(
    to left,
    rgb(107, 184, 255),
    rgb(70, 104, 255)
  );
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  position: fixed;
  left: 2rem;
  top: 2rem;
  z-index: 3;
  @media screen and (max-width: 40em) {
    font-size: 1.5em;
    left: 1rem;
    top: 2rem;
  }
`;
const LogoComponent = () => {
  return <Logo>QN</Logo>;
};

export default LogoComponent;
