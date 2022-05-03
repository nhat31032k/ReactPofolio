import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import styled from "styled-components";

//particle config files
import configDark from "../configs/particlesjs-config.json";
import configLight from "../configs/particlesjs-config-light.json";

const Box = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 0;
`;

const ParticalComponent = (props) => {
  return (
    <Box>
      <Particles
        style={{ position: "absolute", top: 0 }}
        params={props.theme === "light" ? configLight : configDark}
      />
    </Box>
  );
};

export default ParticalComponent;
