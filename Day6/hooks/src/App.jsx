import React from "react";
import Introduce from "./Components/Introduce";
import Counter from "./Components/counters"; // default export
import Demos from "./Components/Demo";       // default export

function Intro() {
  return (
    <div>
      <Introduce />
      <Counter />
      <Demos />
    </div>
  );
}

export default Intro;
