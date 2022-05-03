//home button
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { PowerBtn } from "../components/AllSvg";

const Power = styled.button`
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translate(-50%, 0);
  background-color: #fcf6f4;
  padding: 0.3rem;
  border-radius: 50%;
  border: 1px solid #000;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 3;
  &:hover {
    background-color: rgba(70, 104, 255, 0.4);
    box-shadown: 0px 0px 8px 6px rgba(0, 255, 0, 0.2);
    color: rgb(70, 104, 255);
  }
  & > *first-child {
    text-decoration: none;
    color: inherit;
  }
  @media screen and (max-width: 40em) {
    width: 2rem;
    height: 2rem;
    & > a > svg {
      width: 20px;
      height: 20px;
    }
  }
`;
const PowerButton = () => {
  return (
    <Power>
      {/* icon trở về trang chủ*/}
      <NavLink to="/">
        <PowerBtn width={30} height={30} fill="currentColor" />
      </NavLink>
    </Power>
  );
};

export default PowerButton;
