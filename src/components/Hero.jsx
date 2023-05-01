import React from "react";
import styled, { keyframes } from "styled-components";
import Navbar from "./Navbar";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, TorusKnot } from "@react-three/drei";


const Section = styled.div`
  height: 100vh;
  background: black;
  scroll-snap-align: center;
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div`
  height: 100vh;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const TopLeft = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  /* padding-left: 100px; */
  `;


const BotRight = styled.div`
  flex: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  `;

const WhatIDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h1`
  font-size: 75px;
`;

const Tit = styled.h1`
  font-size: 75px;
  font-weight: bold;
  cursor: pointer;
  color: black;
  text-shadow: 1px 0 1px #FFC300, -1px 0 1px #FFC300, 0 1px 1px #FFC300, 0 -1px 1px #FFC300;
  /* animation: pulsate 2s infinite; */
  position: relative;

  ::after{
    content: "Vladimir Sabik";
    position: absolute;
    top: 0;
    left: 0;
    color: #FFC300;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
    animation : moveText 3s linear both;

    @keyframes moveText {
        to{
          width: 100%;
        }
      }
  }

  @keyframes pulsate {
    0% {
    text-shadow: 0 0 0 rgba(255,195,0, 1);
  }
  50% {
    text-shadow: 0 0 20px rgba(255,195,0, 0.5);
  }
  100% {
    text-shadow: 0 0 0 rgba(255,195,0, 1);
  }
  }
`;

const Desc = styled.p`
  font-style: 24px;
  color: #FFC300;
  `;

const Subtitle = styled.h2`
`;

const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #FFC300;
  border-radius: 5px;
  border: 1px solid #FFC300;
  color: black;
  cursor: pointer;
  :hover{
    color:white;
  }
`;

// raycast

const raycaster = new THREE.Raycaster
const pointer = new THREE.Vector2()

const Hero = () => {
  return(
    <Section>
      <Navbar/>
      <Container>
        <TopLeft>
          <Title>Hello, I am <Tit>Vladimir Sabik</Tit></Title>
          <WhatIDo>-- What i do</WhatIDo>
          <Desc>Mam rad pacu aj lejcu</Desc>
            <Subtitle>xasdafaw</Subtitle>
            <Button>CO TU ?</Button>
        </TopLeft>
        <BotRight>
          <Canvas>
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1}/>
            <TorusKnot args={[10, 3, 100, 10]} scale={0.13}>
              <meshNormalMaterial wireframe={true}/>
            </TorusKnot>
            <TorusKnot args={[10, 3, 100, 10]} scale={0.13}>
              <meshNormalMaterial wireframe={false} flatShading={true}/>
            </TorusKnot>
          </Canvas>
        </BotRight>
      </Container>
    </Section>
  );
};

export default Hero