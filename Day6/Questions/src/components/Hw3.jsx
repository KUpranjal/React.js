import React, { useState } from 'react'

function Hw3() {
    const[items, setItems]= useState([])
    const [text,setText]=useState("")
  return (
    <div >
        <input className='border'  value={text} type="text" onChange={(e)=>{
            setText(e.target.value)
         } } />
         <button onClick={()=>{
            setItems([text,...items])
            setText("")
         }}>Add</button>
         {items.length>0 && <ul>{
         items.map((items)=>{
            return <li>{items}</li>
         })
         }</ul>}
    </div>
  )
}

export default Hw3