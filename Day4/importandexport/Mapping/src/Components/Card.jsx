export function Card({name,desc,price,cat,img}){


return(
    <div style={{border:"1px solid black"}}>
        <img style={{height:"250px",width:"90%"}} src={img} alt=""/>
        <div>
            <h2>{name}</h2>
            <p>{desc}</p>
            <p>{cat}</p>
            <p>{price}</p>
        </div>
    </div>
)
}