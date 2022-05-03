import React from "react";
import styled, { keyframes } from "styled-components";
import PowerButton from "../subComponents/PowerButton";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { YinYang } from "./AllSvg";
import { useState } from "react";
import Intro from "./Intro";
import "../style/animation.scss";
// style theme cho component
// theme này là lightTheme
const ContentContainer = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "karla", sans-serif;
    font-weight: 500;
  }
`;
// container
const Container = styled.div`
  padding: 2rem;
`;
const Contact = styled.a`
  display: block;
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  z-index: 1;
`;
const BLOG = styled(NavLink)`
  display: block;
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 50%;
  right: calc(1rem + 2vw);
  transform: rotate(90deg) translate(-50%);
  z-index: 1;
  @media (max-width: 30em) {
    & > h2 {
      font-size: 1em;
    }
  }
  @media (max-width: 40em) {
    & > h2 {
      font-size: 1.2em;
    }
  }
`;
const WORK = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  position: absolute;
  top: 50%;
  left: 1rem;
  transform: rotate(-90deg) translate(-50%);
  z-index: 1;
  @media (max-width: 30em) {
    // left: calc(1rem + 2vw);
    left: 0.5rem;
    top: 43%;
    & > h2 {
      font-size: 1em;
      left: calc(1rem + 2vw);
    }
  }
  @media (max-width: 40em) {
    & > h2 {
      left: calc(1rem + 2vw);
      font-size: 1.2em;
    }
  }
`;
const BottomBar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;
const ABOUT = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};

  z-index: 1;
  @media (max-width: 30em) {
    & > h2 {
      font-size: 1em;
    }
  }
  @media (max-width: 40em) {
    & > h2 {
      font-size: 1.2em;
      color: ${(props) => props.theme.text};
    }
  }
`;
const SKILL = styled(NavLink)`
  color: ${(props) => props.theme.text};
  z-index: 1;
  @media (max-width: 30em) {
    & > h2 {
      font-size: 1em;
    }
  }
  @media (max-width: 40em) {
    & > h2 {
      font-size: 1.2em;
    }
  }
`;
// const Rotate = keyframes`

//   form{
//     tranform: rotate(0);
//   }
//   to{
//     tranform: rotate(360deg);
//   }
// `;

const Center = styled.button`
  position: absolute;
  top: ${(props) => (props.click ? "85%" : "50%")};
  left: ${(props) => (props.click ? "92%" : "50%")};
  transform: translate(-50%);
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  transition: all 1s ease;
  z-index: 9999;
  & > :last-child {
    display: ${(props) => (props.click ? "none" : "inline-block")};
    padding-top: 1rem;
  }
  // @media only screen and (max-width: 50em) {
  //   top: 90%;
  //   left: 90%;
  //   width: 80px;
  //   height: 80px;
  // }
  // @media only screen and (max-width: 50em) {
  //   .fXTKVu {
  //     top: 50%;
  //     left: 50%;
  //   }
  // }
  // @media only screen and (max-width: 30em) {
  //   width: 40px;
  //   height: 40px;
  // }
`;
const DarDiv = styled.div`
  position: absolute;
  background-color: #7fb5ff;
  bottom: 0;
  top: 0;
  right: 50%;
  width: ${(props) => (props.click ? "50%" : "0%")};
  height: ${(props) => (props.click ? "100%" : "0%")};
  z-index: 1;
  transition: height 0.5s ease, width 0.5s ease;
  @media screen and (max-width: 50em) {
    height: 50%;
    right: 0px;
    width: 100%;
    transition: width 0.5s ease 0s, height 1s ease 0.5s;
  }
`;
const Content = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <ContentContainer>
      <DarDiv click={click} />
      <Container>
        <PowerButton />
        <LogoComponent />
        <SocialIcons theme={click ? "currentColor" : "light"} />
        <Center className="logo-spin" click={click}>
          <YinYang
            onClick={() => handleClick()}
            width={click ? 95 : 200}
            heigth={click ? 95 : 200}
            fill="currentColor"
          />
          <span>Click Here</span>
        </Center>
        <Contact href="mailto:qnhat3103@gmail.com">
          <motion.h2
            initial={{
              y: -200,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Say hi...
          </motion.h2>
        </Contact>
        <BLOG to="/Blog">
          <motion.h2
            initial={{
              y: -200,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Blog
          </motion.h2>
        </BLOG>
        <WORK to="/Work" click={click}>
          <motion.h2
            initial={{
              y: -200,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Work
          </motion.h2>
        </WORK>
        <BottomBar>
          <ABOUT to="/About" click={click}>
            <motion.h2
              initial={{
                y: -200,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              About Me
            </motion.h2>
          </ABOUT>
          <SKILL to="/Skills">
            <motion.h2
              initial={{
                y: -200,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              My Skill
            </motion.h2>
          </SKILL>
        </BottomBar>
      </Container>
      {/* click hiện thẻ intro ko là null */}
      {click ? <Intro click={click} /> : null}
    </ContentContainer>
  );
};

export default Content;
