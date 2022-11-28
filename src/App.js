import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/Textform';
import Alert from './components/Alert';
// import About from './components/About';
import React, { useState } from 'react';

 
function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enable", "success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enable", "success")
    }
  }

  const showAlert = (message, type) => {
    setAlert({
        msg: message,
        Type: type
    })
    setTimeout(() => {
      setAlert(null);
    },1500)
}

  return (
    <>
    {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
    {/* <Navbar/> */}
   
    <Navbar title="TextWeb" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
      {/* <About mode={mode}/> */}
    <TextForm showAlert={showAlert} heading="Enter the text to Analyze below" mode={mode}/>
    </div>
    </> 
  );
}

export default App;