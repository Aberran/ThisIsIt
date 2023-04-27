import React from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;
`

const Container = styled.div`
  width: 1400px;
  background-color: rebeccapurple;
`

const Links = styled.div`
  width: 1400px;
  background-color: rebeccapurple;
`

const Icons = styled.div`
  width: 1400px;
  background-color: rebeccapurple;
`


const Navbar = () => {
  return(
    <Section>
      <Container>
        <Links>
        
        </Links>
        <Icons>

        </Icons>
      </Container>
    </Section>
  )
}

export default Navbar