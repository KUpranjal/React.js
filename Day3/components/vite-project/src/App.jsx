
import './App.css'
import Navbar from "./components/Navbar"
import Sidebar from './components/sidebar'
function App() {

  return (
    <>
    <div>
<Navbar/> 
<div style={{display:"flex"}}></div> 
<Sidebar/> 
<MainContent/> 
      </div> 
    </>
  )
}

export default App


// function Navbar(props){
//   return(
//     <div>
//       <h3>{props.naam},{props.age},{props.color}</h3>
//       <div>
//         <a href="">Home</a><a href="">Profile</a><a href="">About</a>
//       </div>
//     </div>
//   )
// }






// function Navbar(props){
//   const{naam,age,color}=props
//   return(
//     <div>
//       <h3>{naam},{age},{color}</h3>
//       <div>
//         <a href="">Home</a><a href="">Profile</a><a href="">About</a>
//       </div>
//     </div>
//   )
// }





// function Navbar({naam,age,color}){
  
//   return(
//     <div>
//       <h3>{naam},{age},{color}</h3>
//       <div>
//         <a href="">Home</a><a href="">Profile</a><a href="">About</a>
//       </div>
//     </div>
//   )
// }




