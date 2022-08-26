import 'react-chatbot-kit/build/main.css'

class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage, stateRef, createCustomMessage) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
        this.createClientMessage = createClientMessage;
        this.stateRef = stateRef;
        this.createCustomMessage = createCustomMessage;
    }
  
    handleHello() {
        const greetingMessage = this.createChatBotMessage('Que te gustaría saber?', 
        {
            widget: "responseOptions",
        });
        this.updateChatbotState(greetingMessage);
    }

    handleSobreMi = () => {
      const message = this.createChatBotMessage("Te cuento un poco sobre mi: Tengo 26 años y soy un desarrollador web Full Stack de Argentina. ")
      this.updateChatbotState(message);
    };

    handlePortfolio = () => {
        const message = this.createChatBotMessage("Podes ver mis proyectos mas recientes en mi portfolio:",
          {
            widget: "portfolio",
          }
        );
        this.updateChatbotState(message);
    };

    handleContacto = () => {
      const message = this.createChatBotMessage("No dudes en contactarme!!",
        {
          widget: "contacto",
        }
      );
      this.updateChatbotState(message);
  };    


    handleSaludo = () => {
      const message = this.createChatBotMessage("Un gusto conocerte!");
      this.updateChatbotState(message);

    }

    handleDefault = () => {
      const message = this.createChatBotMessage("Perdón, no entendí la pregunta. Intentemos de nuevo:")
      this.updateChatbotState(message);
      this.handleHello()
    }


    updateChatbotState(message) {
        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, message],
        }));
    }
}
  
export default ActionProvider;