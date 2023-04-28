import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

const Section = styled.div`
  height: 100vh;
  background: black;
  scroll-snap-align: center;
  flex-direction:column;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const TopLeft = styled.div``;
const BotRight = styled.div``;
const WhatIDo = styled.div``;
const Title = styled.h1``;
const Desc = styled.p``;
const Line = styled.div``;
const Subtitle = styled.h2``;
const Button = styled.button``;

const Hero = () => {
  return(
    <Section>
      <Navbar/>
      <Container>
        <TopLeft>
          <Title>Ahoj. Paca. Mama.</Title>
          <WhatIDo></WhatIDo>
          <Desc>Mam rad pacu aj lejcu</Desc>
            <Line/>
            <Subtitle></Subtitle>
        </TopLeft>
        <BotRight>
          {/* {3d model} */}
          <img src="./img/test400x490.png" />
        </BotRight>
      </Container>
    </Section>
  );
};

export default Hero