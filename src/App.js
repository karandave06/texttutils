
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import Chutaki from './Components/Navbar';
import Textform from './Components/Textform';
import About from './Components/About';
import React,{ useState } from 'react';
import Alert from './Components/Alert';








function App() {

  const toggleMode = ()=>{
    if(mode === 'light'){
      setmode('dark')
      setText('light')
      setpara('Light Mode')
      document.body.style.background = '#0d1843'
      document.body.style.color = 'white'
      setalert("Dark mode has been enabled","success ")


    }
    else{
      setmode('light')
      setText('dark')
      setpara('Dark Mode')
      document.body.style.background = 'white'
      document.body.style.color = 'black'
      setalert("Light mode has been enabled","success ")





    }
  }
  const [mode, setmode] = useState('light')
  const [text, setText] = useState('dark')
  const [para, setpara] = useState('Dark Mode')

  const [alert, showAlert] = useState(null)


  const setalert = (massage,type) =>{
    
showAlert({
  msg: massage,
  type:type
})

setTimeout(() => {
  showAlert(null)
}, 2000);
  }



  return (
   <>
 
    < Chutaki mode = {mode} para = {para} text = {text} toggleMode = {toggleMode} />

        <Alert alert = {alert}/>

      <Textform setalert ={setalert} alert = {alert} mode = {mode}/> 
<About />

 
   </>
   
  );
}

export default App;