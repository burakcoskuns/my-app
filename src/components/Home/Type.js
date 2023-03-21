import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Automation&Server Room Infrastructure",
          "Scripting with Python, CSS, C++",
          "Server Hardware Requirements",
          "Display Systems and IT Products",
          "Connection and IoT Equipment",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
