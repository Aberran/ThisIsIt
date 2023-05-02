import React from "react";
import styled from "styled-components";

const data = [
  "CAD Design",
  "3D Modeling",
  "Product Design",
  "Web Design",
  "Development",
]

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`
const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
`

const TopLeft = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px
`

const ListItem = styled.li`
 font-size: 100px;
 font-weight: bold;
 cursor: pointer;
 /* color: transparent; */
`

const BotRight = styled.div`
  flex: 1;
`


const Works = () => {
  return(
    <Section>
      <Container>
        <TopLeft>
          <List>
            {data.map((item) => (
              <ListItem key={item}>{item}</ListItem>
            ))}
          </List>
        </TopLeft>
        <BotRight></BotRight>
      </Container>
    </Section>
  )
}

export default Works