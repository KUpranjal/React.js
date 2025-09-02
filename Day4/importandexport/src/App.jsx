import Hi from "./components/Example"
import React from "react"
import { animal } from "./components/NamedExport"


// function App() {
//   return (
//   <div>

// <Hi/>
//   </div>

//   )
// }

// export default App


import {Myfn1 as Fn,MyFn2,MyFn3,animal,arr} from "./components/NamedExport"
const App=()=>{
return (
  <div>
    <Fn/>
    <MyFn2/>
    <MyFn3/>
    <h1>{animal}</h1>
    <h1>{arr}</h1>
  </div>
)
}
export default App