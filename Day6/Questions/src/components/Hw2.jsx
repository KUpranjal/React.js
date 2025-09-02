import React, { useState } from 'react'

const Hw2 = () => {
    const[showDrop, setShowDrop] = useState(false)
  return (
    <div>
        <div style={{backgroundColor : "black", color : 'white', height : "50px", display : 'flex', alignItems : "center"}}>
            <p onMouseLeave={() => {
                setShowDrop(false)
            }} style={{cursor : "pointer"}} onMouseEnter={() => {
                setShowDrop(true)
            }}>Dropwdown</p>          
        </div>

        {
          showDrop && <div style={{backgroundColor : "yellow", width : "10vw"}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem repudiandae quis eum doloribus enim praesentium natus magnam dolorum ducimus, reiciendis repellat, sit, consectetur ex dicta iste officiis vel rem obcaecati.
                Nulla ipsa quidem, sunt incidunt facere exercitationem tempora facilis repellendus qui voluptatum est animi minus accusamus? Molestias alias eos consectetur nisi illum harum, sequi eum blanditiis suscipit ab, temporibus distinctio!
            </div>
        }
    </div>
  )
}

export default Hw2