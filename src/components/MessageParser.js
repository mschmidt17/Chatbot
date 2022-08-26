class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
        const lowerCaseMessage = message.toLowerCase();

        if (lowerCaseMessage.includes('hola') || lowerCaseMessage.includes('ey') || lowerCaseMessage.includes('hpla') || lowerCaseMessage.includes('todo bien')) {
            return this.actionProvider.handleHello();
        } else if (lowerCaseMessage.includes('gracias') || lowerCaseMessage.includes('chau') || lowerCaseMessage.includes('adios')) {
            return this.actionProvider.handleSaludo();
        } else {
           return this.actionProvider.handleDefault();
        }
    }
}

export default MessageParser;