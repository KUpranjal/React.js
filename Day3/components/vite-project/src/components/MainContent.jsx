import Card from "./Card"


function MainContent()
{
  return (
    <main style={{border : "1px solid black", height : "90vh", width : "100%", display : "grid", gridTemplateColumns : "1fr 1fr 1fr 1fr", gap : "20px"}}>
      <Card name={"TV"} />
      <Card name={"Fridge"} />
      <Card name={"kuchbhi"} />
      <Card name={"kuchbhi"} />
      <Card name={"kuchbhi"} />
      <Card name={"kuchbhi"} />
      <Card name={"kuchbhi"} />
      <Card name={"kuchbhi"} />
    </main>
  )
}


export default MainContent