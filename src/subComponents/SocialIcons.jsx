import React from "react";
import { NavLink } from "react-router-dom";
import { DarkTheme, lightTheme } from "../components/Themes";
import {
  Facebook,
  Github,
  Twitter,
  YouTube,
  Download,
} from "../components/AllSvg";
import { motion } from "framer-motion";
import styled from "styled-components";
const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 2rem;
  z-index: 3;
  & > :not(:last-child) {
    margin: 0.5rem 0;
  }
  @media screen and (max-width: 40em) {
    left: 1rem;
}
  }
`;
const Line = styled.span`
  width: 2px;
  height: 8rem;
  background-color: ${(props) =>
    props.color === "dark" ? DarkTheme.text : DarkTheme.body};
`;
const SocialIcons = (props) => {
  return (
    <Icons>
      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1 }}
      >
        <a style={{ color: "#000" }} href="https://github.com/nhat31032k">
          <Github
            // color="#000"
            width="25"
            height="25"
            fill={props.theme === "dark" ? lightTheme.text : lightTheme.body}
            // fill="currentColor"
          />
        </a>
      </motion.div>
      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1 }}
      >
        <a style={{ color: "#4B7BE5" }} href="#">
          <Twitter
            width="25"
            height="25"
            // fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
            fill="currentColor"
          />
        </a>
      </motion.div>
      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1 }}
      >
        <a
          style={{ color: "#4700D8" }}
          href="https://www.facebook.com/profile.php?id=100032964128064"
        >
          <Facebook
            width="25"
            height="25"
            // fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
            fill="currentColor"
          />
        </a>
      </motion.div>
      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1 }}
      >
        <a
          style={{ color: "#FFD32D" }}
          href="https://drive.google.com/file/d/1sz68WxWj0HGL9Jtz9U07xXZFMitIxsTd/view?usp=sharing"
        >
          <Download
            width="25"
            height="25"
            // fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
            fill="currentColor"
          />
        </a>
      </motion.div>
      <Line
        color={props.theme}
        initial={{
          height: 0,
        }}
        animate={{
          height: "8rem",
        }}
        transition={{
          type: "spring",
          duration: 1,
          delay: 0.8,
        }}
      />
    </Icons>
  );
};

export default SocialIcons;
