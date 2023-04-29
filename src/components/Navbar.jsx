import React from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
  `;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  `;

const Logo = styled.img`
  height: 80px;
  `;

const List = styled.ul`
  display:flex;
  gap: 20px;
  list-style: none;
  `;

const ListItem = styled.li``;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  `;

const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`;

const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #FFC300;
  border-radius: 5px;
  border: none;
  color: black;
`;

const Navbar = () => {
  return(
    <Section>
      <Container>
        <Links>
          <Logo src="./img/LogoBsmall.png"/>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Studio</ListItem>
            <ListItem>Works</ListItem>
            <ListItem>Contact</ListItem>
          </List>
        </Links>
        <Icons>
          <Icon src="./img/searchLogoSmall50.png"/>
          <Button>Button</Button>
        </Icons>
      </Container>
    </Section>
  );
}

export default Navbar