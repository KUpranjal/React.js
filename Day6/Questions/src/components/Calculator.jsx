import React, { useState } from 'react'

const Calculator = () => {

    const[val, setVal] = useState("0")

    function appendNumber(num)
    {
        if(val == 0)
        {
            setVal(num)
        }
        else
        {
            setVal(val + String(num))
        }
    }
  return (
    <div className='flex justify-center border items-center h-[100vh] bg-black'>
        <div className=' w-[25vw] h-[70vh] p-2'>
            <div className='text-white text-5xl text-right'>{val}</div>
            <div className='grid grid-cols-4 gap-2 mt-2'>
                <button onClick={() => setVal("0")} className='h-[70px] w-[70px] bg-gray-300 rounded-full text-lg'>C</button>
                <button onClick={() => appendNumber("**")} className='h-[70px] w-[70px] bg-gray-300 rounded-full text-lg'>**</button>
                <button onClick={() => appendNumber("%")} className='h-[70px] w-[70px] bg-gray-300 rounded-full text-lg'>%</button>
                <button onClick={() => appendNumber("/")} className='h-[70px] w-[70px] bg-orange-400 rounded-full text-lg'>/</button>

                <button onClick={() => appendNumber(7)} className='h-[70px] w-[70px] bg-gray-500 rounded-full text-lg'>7</button>
                <button onClick={() => appendNumber(8)} className='h-[70px] w-[70px] bg-gray-500 rounded-full text-lg'>8</button>
                <button onClick={() => appendNumber(9)} className='h-[70px] w-[70px] bg-gray-500 rounded-full text-lg'>9</button>
                <button onClick={() => appendNumber("*")} className='h-[70px] w-[70px] bg-orange-400 rounded-full text-lg'>*</button>

                <button onClick={() => appendNumber(4)} className='h-[70px] w-[70px] bg-gray-500 rounded-full text-lg'>4</button>
                <button onClick={() => appendNumber(5)} className='h-[70px] w-[70px] bg-gray-500 rounded-full text-lg'>5</button>
                <button onClick={() => appendNumber(6)} className='h-[70px] w-[70px] bg-gray-500 rounded-full text-lg'>6</button>
                <button onClick={() => appendNumber("-")} className='h-[70px] w-[70px] bg-orange-400 rounded-full text-lg'>-</button>

                <button onClick={() => appendNumber(1)} className='h-[70px] w-[70px] bg-gray-500 rounded-full text-lg'>1</button>
                <button onClick={() => appendNumber(2)} className='h-[70px] w-[70px] bg-gray-500 rounded-full text-lg'>2</button>
                <button onClick={() => appendNumber(3)} className='h-[70px] w-[70px] bg-gray-500 rounded-full text-lg'>3</button>
                <button onClick={() => appendNumber("+")} className='h-[70px] w-[70px] bg-orange-400 rounded-full text-lg'>+</button>

                <button onClick={() => appendNumber(0)} className='h-[70px]  col-span-2 bg-gray-500 rounded-full text-lg'>0</button>
                <button onClick={() => appendNumber(".")} className='h-[70px] w-[70px] bg-gray-500 rounded-full text-lg'>.</button>
                <button onClick={() => {
                    const ans = eval(val)
                    let temp = Math.floor(ans)
                    if(ans - temp == 0)
                    {
                        setVal(ans)
                    }
                    else
                    {
                        setVal(eval(val).toFixed(2))
                    }
                }} className='h-[70px] w-[70px] bg-orange-400 rounded-full text-lg'>=</button>

            </div>

        </div>
    </div>
  )
}

export default Calculator