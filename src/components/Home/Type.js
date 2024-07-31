import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Automate to Avoid Human Errors",
          "Server Room Infrastructure",
          "Scripting with Python, CSS, C++",
          "Server Hardware Requirements",
          "Display Systems and IT Products",
          "Solar Systems Installation&Automation with KNX Protocol",
          "Connection and IoT Equipment",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 25,
      }}
    />
  );
}

export default Type;
