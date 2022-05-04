import React from "react";
import styled from "styled-components";
import Avatar from "../assets/images/chongyun.png";
import { motion } from "framer-motion";
const Box = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 65vw;
  display: flex;
  height: 55vh;
  background: linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      bottom,
    linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      top;
  background-repeat: no-repeat;
  background-size: 100% 2px;
  border-left: 2px solid ${(props) => props.theme.body};
  border-right: 2px solid ${(props) => props.theme.text};
  z-index: 1;
  @media (max-width: 50em) {
    border-right-width: initial;
    border-left-width: initial;
    border-right-color: initial;
    border-left-color: initial;
    background: linear-gradient(rgb(127, 181, 255) 50%, rgb(252, 246, 244) 50%)
        0px 0px / 2px 100% no-repeat,
      linear-gradient(rgb(127, 181, 255) 50%, rgb(252, 246, 244) 50%) 100% 0px;
    border-style: solid none;
    border-image: initial;
    border-top: 2px solid rgb(252, 246, 244);
    border-bottom: 2px solid rgb(0, 0, 0);
    background-position: 0px 0px, 100% 0px;
    background-repeat: no-repeat;
  }
  @media (max-width: 30em) {
    width: 70vw;
  }
  @media (max-width: 40em) {
    width: 60vw;
  }
  @media (max-width: 50em) {
    flex-direction: column;
    justify-content: space-between;
    // height: 70vh;
  }
  @media (max-width: 60em) {
    width: 70vw;
  }
  @media (max-width: 1200em) {
    width: 65vw;
    height: 84vh !important;
  }
`;
const SubBox = styled.div`
  width: 50%;
  position: relative;
  display: flex;
  .pic {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0%);
    width: 100%;
    height: auto;
  }
  @media (max-width: 50em) {
    width: 100%;
    height: auto;
    // margin-bottom: 350px;
  }
  @media (max-width: 30em) {
    .pic {
      display: block;
      width: 100%;
      margin-top: 20rem;
    }
  }
`;
const Text = styled.div`
  font-size: calc(1em + 1.5rem);
  color: ${(props) => props.theme.body};
  padding: 2rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  & > *last-child {
    color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.6)`};
    font-size: calc(1.5vw + 0.5rem);
    fonnt-weight: 300;
  }
  @media (max-width: 40em) {
    font-size: calc(1rem + 1.5vw);
    z-index: 999;
  }
  @media (max-width: 40em) {
    & > :last-child {
      font-size: calc(0.5rem + 1vw);
    }
  }
`;
const Intro = () => {
  return (
    <Box
      initial={{ height: 0 }}
      animate={{ height: "55vh" }}
      transition={{ type: "spring", duration: 2, delay: 1 }}
    >
      <SubBox>
        <Text>
          <h1>Hi,</h1>
          <h3>I'm Nguyen Hoang Quang Nhat,</h3>
          <h6>
            currently a final year student at Ton Duc Thang University. I am a
            person who is very eager to learn new things, persistent and
            determined in work. I am very interested in technology, especially
            WEB development and learning about electronic technologies
          </h6>
        </Text>
      </SubBox>
      <SubBox>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 2 }}
        >
          <img src={Avatar} className="pic" />
        </motion.div>
      </SubBox>
    </Box>
  );
};

export default Intro;
