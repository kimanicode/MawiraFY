import { useState ,createContext } from 'react'

export const AppContext = createContext()



export const AppContextProvider = ( props) => {
  

    const [wira,setWira] =useState('')
    const[mawira, setMawira] = useState([ ])



    const handleClick =(e) =>{
        e.preventDefault()
        if(wira){
            setMawira([...mawira,{id:Date.now(),wira , isDone:false}])
            setWira('')

        }
        

    }
    const handleChange = (event)=>{
        setWira(event.target.value)

    }


   
  return (
    <AppContext.Provider value={{wira,setWira,mawira,setMawira,handleClick ,handleChange}} >
        {props.children}
        {/* {console.log(props.children)} */}

    </AppContext.Provider>
  )
}
