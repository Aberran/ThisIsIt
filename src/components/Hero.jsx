import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

const Section = styled.div`
  height: 100vh;
  background: black;
  scroll-snap-align: center;
`

const Hero = () => {
  return(
    <Section>
      <Navbar></Navbar>
    </Section>
  )
}

export default Hero