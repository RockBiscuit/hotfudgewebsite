import React, { useState } from 'react';
import Home from './components/home';

const App = () => {
  const [step, setStep] = useState("home"); 


  return (
    <div>
     
      {step === "home" && <Home setStep={setStep} />}

    </div>
  );
};

export default App;