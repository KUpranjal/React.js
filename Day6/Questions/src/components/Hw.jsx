import React, { useState } from 'react'

const Hw = () => {
    const[show, setShow] = useState(false)
    const[curr, setCurr] = useState(0)
    const colors = ["blue", "white", "red", "yellow", "green"]
  return (
    <div>
        <button onClick={() => {
            setShow(!show)
        }}>Click Me</button>
        {show && <div style={{backgroundColor : "red",height : "200px", width : "200px" }}></div>}
        {show ? <div style={{backgroundColor : "red",height : "200px", width : "200px" }}></div> : ""}
        <div style={{backgroundColor : colors[curr]}} onClick={() => {
            setCurr(curr + 1)
            if(curr == colors.length)
            {
                setCurr(0)
            }
        }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, quo quisquam, aut similique a cum excepturi quos autem temporibus assumenda itaque accusantium natus ducimus cumque iusto maiores, eius architecto dolorem.
        </div>

    </div>
  )
}

export default Hw