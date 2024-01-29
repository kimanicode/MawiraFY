import {AppContextProvider } from "./contexts/AppContext";
import Header from "./components/Header";
import Mawira from './components/Mawira';




function App() {
  
  
  

 
  return (
   <div  className="  w-full ">
      
        <AppContextProvider > 
          <Header  />
          <Mawira />
        </AppContextProvider>
          
      
      
    </div>
  );
}

export default App;
