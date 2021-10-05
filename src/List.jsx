import React from "react";
import * as pi from "./math.js";
import * as calculate from "./calculator.js";

// function List() {
//   return (
//     <ul>
//       <li>{pi.default}</li>
//       <li>{pi.doublePi()}</li>
//       <li>{pi.triplePi()}</li>
//     </ul>
//   );
// }

function List() {
  return (
    <ul>
      <li>{calculate.add(1, 2)}</li>
      <li>{calculate.subtract(1, 2)}</li>
      <li>{calculate.multiple(1, 2)}</li>
      <li>{calculate.divide(1, 2)}</li>
    </ul>
  );
}

export default List;
