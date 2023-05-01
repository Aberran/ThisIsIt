import React from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Container  = styled.div`
  height: 100vh;
  width: 100%;
  scroll-snap-align: center;
`;

const Test = () => {
  return (
    <Container>
      <Canvas>
        <OrbitControls enableZoom={false}/>
        <directionalLight position={[3,2,1]}/>
        <ambientLight intensity={0.5}/>
        <mesh>
          <boxGeometry args={[1,1,1]}/>
          <meshStandardMaterial color="#FFC300"/>
        </mesh>
      </Canvas>
    </Container>
  )
}

export default Test