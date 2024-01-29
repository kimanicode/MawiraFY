// import React ,{useContext, useEffect} from 'react'
// import { AppContext } from '../contexts/AppContext'



// function Logic() {
//      const {num ,setNum, liNum ,updateCalc,operators} = useContext(AppContext)
     
//      useEffect(() => {
     
       
//      }, [num ,setNum, liNum ,updateCalc,operators])
     
     
     
     

     
      


     

    
    
//     function handleClick(){
     
        
//     }
//     function clearScreen(){
//      setNum(prevNum => prevNum  == 0)
//      console.log(num)
//  }
    
//   return (
//     <div className =' md:container md:mx-auto md:w-2/3    mt-6 '>
//        <div className='w-full flex justify-evenly pb-4'>
//             <button onClick={clearScreen} className='h-14 bg-green-400 w-14 text-center  rounded-full hover:bg-green-700 '>AC</button>

//             <button className='h-14 bg-cyan-500 hover:bg-cyan-700  w-14 text-center  rounded-full'>()</button>

//             <button className='h-`4 bg-cyan-500 hover:bg-cyan-700 w-14 text-center  rounded-full'>%</button>

//             <button className='h-14 bg-cyan-500 hover:bg-cyan-700 w-14 text-center  rounded-full' onClick={updateCalc('/')}>÷</button>


//        </div>
       
//        <div className='w-full flex justify-evenly pb-4'>
//             <button onClick={handleClick} className='h-14 bg-emerald-100 hover:bg-emerald-300  w-14 text-center  rounded-full '>{liNum[7]}</button>
//             <button className='h-14 bg-emerald-100 hover:bg-emerald-300 w-14 text-center  rounded-full'>{liNum[8]}</button>
//             <button className='h-`4 bg-emerald-100 hover:bg-emerald-300  w-14 text-center  rounded-full'>{liNum[9]}</button>
//             <button className='h-14 bg-cyan-500  hover:bg-cyan-700 w-14 text-center  rounded-full' onClick={updateCalc('*')}>*</button>

//        </div>


//        <div className='w-full flex justify-evenly pb-4'>
//              <button className='h-14  bg-emerald-100 hover:bg-emerald-300 w-14 text-center  rounded-full'>{liNum[4]}</button>
//              <button className='h-14  bg-emerald-100 hover:bg-emerald-300 w-14 text-center  rounded-full'>{liNum[5]}</button>
//              <button className='h-14  bg-emerald-100 hover:bg-emerald-300 w-14 text-center  rounded-full'>{liNum[6]}</button>
//             <button className='h-14 bg-cyan-500  hover:bg-cyan-700 w-14 text-center  rounded-full' onClick={updateCalc('-')}>-</button>


//        </div>


//        <div className='w-full flex justify-evenly pb-4'>
//             <button className='h-14  bg-emerald-100 hover:bg-emerald-300 w-14 text-center  rounded-full'>{liNum[1]}</button>
//             <button className='h-14  bg-emerald-100 hover:bg-emerald-300 w-14 text-center  rounded-full'>{liNum[2]}</button>
//             <button className='h-14  bg-emerald-100 hover:bg-emerald-300 w-14 text-center  rounded-full'>{liNum[3]}</button>
//             <button className='h-14 bg-cyan-500  hover:bg-cyan-700 w-14 text-center  rounded-full' onClick={updateCalc('+')}>+</button>

//        </div>

//        <div className='w-full flex justify-evenly pb-4'>
//             <button className='h-14  bg-emerald-100 hover:bg-emerald-300 w-14 text-center  rounded-full'>{liNum[0]}</button>
//             <button className='h-14 bg-emerald-100 hover:bg-emerald-300 w-14 text-center  rounded-full'>.</button>
//             <button className='h-`4 bg-emerald-100 hover:bg-emerald-300 w-14 text-center   text-red-600 rounded-full'>X</button>
//             <button className='h-14 bg-violet-500  hover:bg-violet-700 w-14 text-center  rounded-full'>=</button>

//        </div>
       



       





//     </div>
//   )
// }

// export default Logic