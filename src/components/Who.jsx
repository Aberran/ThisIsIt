import React from "react";
import styled from "styled-components";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const Picture = styled.img`
  /* width: 30%; */
  border: 1px solid #FFC300;
  border-radius: 50%;
  `;

const Who = () => {
  return(
    <Section><Picture src="/img/prof.jpg"/></Section>
  )
}

export default Who