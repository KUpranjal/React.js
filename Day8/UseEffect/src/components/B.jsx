const B=()=>{
  useEffect(()=>{
 console.log("B")
  },[])
  return (
    <div>
        <p>B</p>
      <C/>
    </div>
  )
 
}
