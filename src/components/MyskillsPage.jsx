import React from "react";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import { lightTheme } from "./Themes";
import { Design, Develope } from "../components/AllSvg";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import BigTitle from "../subComponents/BigTitle";
// import ParticalComponent from "../subComponents/ParticalComponent";
const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media screen and (max-width: 480px) {
    // flex-direction: column;
    // justify-content: space-between;
    // dipslay: block;
    // flex-wrap: wrap;
  }
  @media (max-width: 50em) {
    flex-direction: column;
    padding: 8rem 0px;
    height: auto;
  }
`;
const Main = styled.div`
  border: 1px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  font-family: "Unbutu Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
  @media screen and (max-width: 480px) {
    // flex-direction: column;
    dipslay: block;
    // margin-top: 200px;
    // flex-wrap: wrap;
    // justify-content: space-between;
  }
  @media (max-width: 30em) {
    & > :nth-child(5) {
      margin-bottom: 4rem;
    }
  }
  @media (max-width: 50em) {
    width: 50vw;
    height: max-content;
    margin-top: 2rem;
  }
`;
const Tilte = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1rem + 1vw);
  ${Main}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }

  & > *:first-child {
    margin-right: 1rem;
  }
  @media (max-width: 25em) {
    font-size: calc(0.8em + 1vw);
  }
`;
const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;

  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  ul,
  p {
    margin-left: 2rem;
  }
`;
const MyskillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <LogoComponent theme="light" />
        <SocialIcons theme="light" />
        <PowerButton />
        {/* <ParticalComponent theme="light" /> */}
        <Main>
          <Tilte>
            <Develope width={40} heigth={40} />
            Html,Css
          </Tilte>
          <Description>
            I value business or brand for which i'm creating, thus i enjoy
            bringing new ideas to life.
          </Description>
          <Description>
            <strong>SOME SKILLS I HAVE </strong>
            <ul>
              <li>Bem</li>
              <li>All elements of Html</li>
              <li>Responsive</li>
              <li>FlexBox,Grid</li>
              <li>Animation</li>
            </ul>
          </Description>
        </Main>
        <Main>
          <Tilte>
            <Develope width={40} heigth={40} />
            Javascript
          </Tilte>
          <Description>
            I value business or brand for which i'm creating, thus i enjoy
            bringing new ideas to life.
          </Description>
          <Description>
            <strong>SOME SKILLS I HAVE </strong>
            <ul>
              <li>Variables</li>
              <li>Function</li>
              <li>String,Array,Object</li>
              <li>DOM</li>
              <li>Api</li>
            </ul>
          </Description>
        </Main>
        <BigTitle text="SKILLS" top="80%" right="30%" />
        {/* <Main>1</Main>
        <Main>2</Main> */}
      </Box>
      {/* <Box></Box> */}
    </ThemeProvider>
  );
};

export default MyskillsPage;
