import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import styled from "styled-components";

const AutoTypeRow = styled.h1`
  font-size: 40px;
  color: white;
`;

const AutoType = styled.span`
  font-weight: bold;
  color: #FFC300;
`;

const Typer = () => {

  const [text] = useTypewriter({
    words: ["PhD. Candidate.", "Researcher.", "CAD Designeer.", "Web Developer.", "Father.", "Will be Husband."], 
    loop: {},
    // typeSpeed: 120,
  });

  return (
    <AutoTypeRow>
      I'm a {" "}
      <AutoType>
        {text}
      </AutoType>
      <span>
        <Cursor/>
      </span>
    </AutoTypeRow>
  )
};

export default Typer;