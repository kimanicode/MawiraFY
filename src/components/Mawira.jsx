import React, {useContext} from 'react'
import { AppContext } from '../contexts/AppContext'

const Mawira = () => {


    const {mawira,setMawira} = useContext(AppContext)

    const handleDone =(id) =>{
        console.log(id)
        setMawira(
            mawira.map((wira) => (
                wira.id === id ? {...wira, isDone: !wira.isDone}:wira 
            ))
        )

    }

    console.log(mawira)



  return (
    <div>
        <div className='flex justify-center  items-center flex-col  md:flex-row flex-wrap gap-4 w-full py-7'  >
            {mawira.map( (t) =>(
            <div key={t.id} className='bg-cyan-500 text-yellow-100 font-semibold text-xl p-5 rounded-lg md:w-[29.5%] flex justify-between w-[90%]' >
                {
                    t.isDone?(
                        <s className='text-green-600'>{t.wira}</s>
                    ):(
                        <p>{t.wira}</p>
                    )
                    
                }
                <div className='flex gap-2'>
                    <button className='bg-yellow-500 p-2 text-sm font-bold hover:bg-yellow-300 rounded'>Edit</button>
                    <button className='bg-red-700 p-2 text-sm font-bold hover:bg-red-500 rounded'>Delete</button>
                    <button  onClick={() =>handleDone(t.id)} className='bg-green-600 p-2 text-sm fonbold  hover:bg-green-400 rounded'>Done</button>
                </div>
            </div>))}
        </div>

    </div>
  )
}

export default Mawira