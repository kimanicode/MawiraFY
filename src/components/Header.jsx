import React,{useContext} from 'react'
import { AppContext } from "../contexts/AppContext";


const Header = () => {
    const {wira, handleChange,handleClick} = useContext(AppContext)

//    console.log(mawira)
   

  return (
    
    <div className='w-full bg-sky-700  text-white  h-full'> 

        <h1 className='text-center font-bold text-3xl py-6 '>MawiraFY</h1> 

        <div className='flex justify-center items-center w-full  py-6'>
            
            <input type="text" name="wira" id=""  className='rounded-full h-20  w-[90%] shadow-sm box-shadow-black border    relative px-6 font-bold items-stretch text-yellow-600 text-xl focus:outline-none focus:border-cyan-500 placeholder:px70' placeholder='Enter Wira ...' value={wira} onChange={handleChange}/>
            <button className='bg-cyan-300 text-yellow-800 absolute right-[6%] p-5 rounded-full font-semibold hover:bg-cyan-200 hover:text-yellow-600' onClick={handleClick}>Add</button>
        </div>

        
        
    </div>
  )
}

export default Header