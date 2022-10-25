import React from 'react'
import { useState } from 'react'

function Logic() {
    const [num , setNum] = useState(0);
    function handleClick(){
        setNum(num + 1)
    }
    console.log(num)
  return (
    <div className ='md:w-full   mt-6 '>
       <div className='w-full flex justify-evenly pb-4'>
            <div className='h-14 bg-green-400 w-14 text-center pt-4 rounded-full hover:bg-green-700 '>AC</div>
            <div className='h-14 bg-cyan-500 hover:bg-cyan-700  w-14 text-center pt-4 rounded-full'>()</div>
            <div className='h-`4 bg-cyan-500 hover:bg-cyan-700 w-14 text-center pt-4 rounded-full'>%</div>
            <div className='h-14 bg-cyan-500 hover:bg-cyan-700 w-14 text-center pt-4 rounded-full'>÷</div>

       </div>
       
       <div className='w-full flex justify-evenly pb-4'>
            <div onClick={handleClick} className='h-14 bg-emerald-100 hover:bg-emerald-300  w-14 text-center pt-4 rounded-full '>7</div>
            <div className='h-14 bg-emerald-100 hover:bg-emerald-300 w-14 text-center pt-4 rounded-full'>8</div>
            <div className='h-`4 bg-emerald-100 hover:bg-emerald-300  w-14 text-center pt-4 rounded-full'>9</div>
            <div className='h-14 bg-cyan-500  hover:bg-cyan-700 w-14 text-center pt-4 rounded-full'>*</div>

       </div>


       <div className='w-full flex justify-evenly pb-4'>
            <div className='h-14 bg-emerald-100 hover:bg-emerald-300  w-14 text-center pt-4 rounded-full '>4</div>
            <div className='h-14 bg-emerald-100 hover:bg-emerald-300 w-14 text-center pt-4 rounded-full'>5</div>
            <div className='h-`4 bg-emerald-100 hover:bg-emerald-300 w-14 text-center pt-4 rounded-full'>6</div>
            <div className='h-14 bg-cyan-500  hover:bg-cyan-700 w-14 text-center pt-4 rounded-full'>-</div>


       </div>


       <div className='w-full flex justify-evenly pb-4'>
            <div className='h-14 bg-emerald-100 hover:bg-emerald-300 w-14 text-center pt-4 rounded-full '>1</div>
            <div className='h-14 bg-emerald-100 hover:bg-emerald-300 w-14 text-center pt-4 rounded-full'>2</div>
            <div className='h-`4 bg-emerald-100  hover:bg-emerald-300 w-14 text-center pt-4 rounded-full'>3</div>
            <div className='h-14 bg-cyan-500  hover:bg-cyan-700 w-14 text-center pt-4 rounded-full'>+</div>

       </div>

       <div className='w-full flex justify-evenly pb-4'>
            <div className='h-14 bg-emerald-100   hover:bg-emerald-300 w-14 text-center pt-4 rounded-full '>0</div>
            <div className='h-14 bg-emerald-100 hover:bg-emerald-300 w-14 text-center pt-4 rounded-full'>.</div>
            <div className='h-`4 bg-emerald-100 hover:bg-emerald-300 w-14 text-center pt-4  text-red-600 rounded-full'>X</div>
            <div className='h-14 bg-violet-500  hover:bg-violet-700 w-14 text-center pt-4 rounded-full'>=</div>

       </div>



    </div>
  )
}

export default Logic