import './App.css';
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import config from './components/Config.js';
import MessageParser from './components/MessageParser';
import ActionProvider from './components/ActionProvider.js';
import { useState } from "react";
import gif from './giphy.webp' 





function App() {


  const [botState, setBotState] = useState(false);

  const cambiarState = () => {
    if (botState === true) {
      setBotState(false);
    } else {
      setBotState(true);
    }
  };


  
  return (
    <>
     {botState ? (
          <div>
            <div className="cajaActivada" onClick={(e) => cambiarState()}> X </div>
            <div className="chatbotLanding">
              <div className='container'>
                <Chatbot
                  config={config}
                  messageParser={MessageParser}
                  actionProvider={ActionProvider}
                />    
              </div>
            </div>
          </div>
        ) : (
          <div className="cajaBoton" onClick={(e) => cambiarState()}> <img src={gif} alt='gif' width='120'/> </div>
        )}
    </>
  );
}

export default App;
