import React from 'react'
import { useState  } from 'react'



const Screen = () => {
  const [num , setNum] = useState(0);
  return (
    <div className='w-full h-[120px] relative rounded-b-2xl  bg-stone-800 text-left'>
       <div className='absolute  bottom-0 right-0'> 
            <p className='text-white text-7xl p-5'  > {num}</p>
       </div>

    </div>
  )
}

export default Screen