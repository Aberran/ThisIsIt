import React from "react";
import styled, { keyframes } from "styled-components";
import Navbar from "./Navbar";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, TorusKnot } from "@react-three/drei";
import * as THREE from "three";
import Typer from "../func/Typer";



const Section = styled.div`
  height: 100vh;
  /* background: #242424; */
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
  padding-left: 100px;
`;

const TopLeft = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content:center;
  gap: 20px;
  /* padding-left: 100px; */
  `;


const BotRight = styled.div`
  flex: 3;
  display: flex; 
  justify-content: flex-end;
  /* /* align-items: flex-end; */
  `;

const WhatIDo = styled.h1`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h1`
  font-size: 70px;
  display: flex;
  align-items: flex-end;
`;

const Tit = styled.h1`
  font-size: 75px;
  font-weight: bold;
  color: transparent;
  /* text-shadow: 1px 0 1px #FFC300, -1px 0 1px #FFC300, 0 1px 1px #FFC300, 0 -1px 1px #FFC300; */
  -webkit-text-stroke: 1px #FFC300;
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
`;

const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color:  #FFC300;
  border-radius: 5px;
  border: 1px solid  #FFC300;
  color: #242424;
  cursor: pointer;
  :hover{
    color:white;
  }
`;

// raycast

const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();

const onMouseMove = (event) => {
  // calculate pointer position in normalized device coordinates
	// (-1 to +1) for both components

	pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

  raycaster.setFromCamera(pointer, test.camera);
  const intersects = raycaster.intersectObjects(test.scene.children);
}

const Hero = () => {
  return(
    <Section>
      <Navbar/>
      <Container>
        <TopLeft>
          <Title>Hello, I'm</Title>
          <Tit>Vladimir Sabik</Tit>
            {/* <WhatIDo>-- Student at Technical University of Kosice</WhatIDo> */}
            <WhatIDo>-- What I do ? </WhatIDo>
            <Typer/>
            <Button>CO TU ?</Button>
        </TopLeft>
        <BotRight>
          <Canvas>
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1}/>
            {/* <TorusKnot args={[10, 3, 100, 10]} scale={0.13}>
              <meshNormalMaterial wireframe={true}/>
            </TorusKnot> */}
            <TorusKnot args={[10, 3, 100, 10]} scale={0.13}>
              <meshNormalMaterial wireframe={false} flatShading={true}/>
            </TorusKnot>
          </Canvas>
        </BotRight>
      </Container>
    </Section>
  );
};


window.addEventListener("mousemove", onMouseMove)
export default Hero