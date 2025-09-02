
// import React, { useEffect, useState } from "react";

// import { useEffect } from "react"

// const App = () => {
//   const [count, setCount] = useState(0);
//   const [text, setText] = useState(""); // Correct initialization
//  // useEffect(()=>{
// //   //   console.log("Use effeect fired")
// //   // })
// //   // useEffect(()=>{
// //   //   console.log("Use effect 2 fired")
// //   // },[])
//   useEffect(() => {
//     console.log("Use effect 3 fired");
//   }, [text]);

//   return (
//     <div>
//       <div>
//         <input
//           onChange={e => setText(e.target.value)}
//           type="text"
//         />
//         <h1>{text}</h1>
//       </div>
//       <div>{count}</div>
//       <button onClick={() => setCount(count + 1)}>+</button>
//       <button onClick={() => setCount(0)}>reset</button>
//       <button onClick={() => setCount(count - 1)}>-</button>
//     </div>
//   );
// };

// export default App;

// import {A} from "./components/A"
// import extra from "./components/extra"
// const App=()=>{
//   useEffect(()=>{
//  console.log("App")
//   },[])
//   return (
//     <div>
//       <A/>
//       <extra/>
//     </div>
//   )
 
// }
// export default App
import React, { useEffect } from "react";
import Extra from "./components/extra";
import UsersWithShimmer from "./components/shimmer";


const App = () => {
  useEffect(() => {
    console.log("App");
  }, []);

  return (
    <div>
      {/* <A /> */}
      {/* <Extra /> */}
      {/* <ProductList /> */}
      <UsersWithShimmer />
    </div>
  );
};

export default App;
