import Hero from "./components/Hero";
import Works from "./components/Works";
import Who from "./components/Who";
import Contact from "./components/Contact";
import styled from "styled-components";
// import Test from "./components/Test";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: linear-gradient(#242424, #5f5656);
  &::-webkit-scrollbar{display:none};
`

// #263238
// #242424

function App() {

  return (
    <Container>
      <Hero/>
      <Who/>
      <Works/>
      <Contact/>
      {/* <Test/> */}
    </Container>
  )
}

export default App
