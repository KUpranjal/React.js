
function Navbar(){
  
  return(
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",backgroundColor:"black",color:"white",height:"80px",padding:"0px 10px 0px 10px"}}>
    <h3>LOGO</h3>
      <div style={{display:"flex",gap:"10px"}}>
        <a style={{color:"white", textDecoration:"none" }} href="">Profile</a>
        <a style={{color:"white", textDecoration:"none" }} href="">Home</a>
        <a style={{color:"white", textDecoration:"none" }} href="">About</a>
      </div>
    </div>
  )
}
export default Navbar