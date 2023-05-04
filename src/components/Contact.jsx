import React from "react";
import styled from "styled-components";
import Map from "./Map";


const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

const TopLeft = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const Input = styled.input`
  /* background-color: whitesmoke; */
  padding: 20px; 
  border: none;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 20px; 
  border: none;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 20px;
  background-color:  #FFC300;
  border-radius: 5px;
  border: 1px solid  #FFC300;
  color: #242424;
  cursor: pointer;
  :hover{
    color:white;
  }
`;

const BotRight = styled.div`
  flex: 1;
`;

const handleSubmit = f => (
  f.preventDefault()
)

const Contact = () => {
  return(
    <Section>
      <Container>
        <TopLeft>
          <Form onSubmit={handleSubmit}>
            <Title>Contact Me</Title>
            <Input placeholder="Name"></Input>
            <Input placeholder="Email"></Input>
            <TextArea placeholder="Write your message" rows={10}/>
            <Button type="submit">Send</Button>
          </Form>
        </TopLeft>
        <BotRight>
          <Map/>
        </BotRight>
      </Container>
    </Section>
  )
}

export default Contact