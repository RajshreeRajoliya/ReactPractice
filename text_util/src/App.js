import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
 

  
} from "react-router-dom";

function App() {
  const [mode,setMode]=useState('dark');
  const[alert,setalert] = useState(null);

const showalert=(message,type)=>{
  setalert({
    message:message,
    type:type
  })
  setTimeout(()=>{
    setalert(null);
  },1500)
}


  const toggleMode=()=>{
    if(mode==='dark'){
      setMode('light');
      showalert("light mode enabled","sucess")
      document.title="TextUtil Light Mode"
    }
    else {
      setMode('dark');
      showalert("light mode disabled","sucess")
      document.title=" TextUtil Dark Mode"
    }
  }
  return (
   <>
       <Router>
   
    <Navbar title="TextUtil" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>

    <div className='container'>
        {/* //to match exact path  we need to use exact keyword*/}
          <Routes>
          <Route path="/about" element={<About />}>
            
          </Route>
          <Route path="/" element={ <TextForm showAlert={showalert} heading="Enter The Text"/>}>
         
          </Route>

         </Routes>
        
    </div>
    </Router>
  
   </>
  );
}

export default App;
