import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Typer = () => {

  const {text} = useTypewriter({
    words: ["Ja", "Ty", "On", "Ona"], loop: false,
  });

  return (
    <h1>
      I'm a
      <span style={{fontWeight: "bold", color: "green"}}>
        {text}
      </span>
      <Cursor/>
    </h1>

  )
};

export default Typer;