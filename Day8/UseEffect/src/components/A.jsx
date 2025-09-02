const A=()=>{
  useEffect(()=>{
 console.log("A")
  },[])
  return (
    <div>
        <p>A</p>
      <B/>
    </div>
  )
 
}
