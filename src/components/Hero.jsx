import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

const Section = styled.div`
  height: 100vh;
  background: black;
  scroll-snap-align: center;
  flex-direction:column;
  justify-content: center;
`;
const Container = styled.div`
  height: 100vh;
`


const Hero = () => {
  return(
    <Section>
      <Navbar/>
      <Container>Hero</Container>
    </Section>
  );
};

export default Hero