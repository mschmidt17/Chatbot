import { createChatBotMessage } from "react-chatbot-kit";
import LinkList from "./LinkList";
import ResponseOptions from "./ResponseOptions";

const botName = "Matias";

const config = {
  botName: botName,
  initialMessages: [
    createChatBotMessage(`Hola!! Soy ${botName}. Como estas?`),
  ],

  customStyles: {
    botMessageBox: {
      backgroundColor: "#131212",
    },
    chatButton: {
      backgroundColor: "#131212",
    },
  },

  widgets: [
    {
      widgetName: "responseOptions",
      widgetFunc: (props) => <ResponseOptions {...props} />,
    },
    {
      widgetName: "contacto",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Mail",
            url: `mailto:matias.schmidt@oulook.es`,
            id: 1,
          },
          {
            text: "LinkedIn",
            url: `https://www.linkedin.com/in/matias-schmidt1/`,
            id: 2,
          },
          {
            text: "GitHub",
            url: `https://github.com/mschmidt17`,
            id: 3,
          },
        ],
      },
    },
    {
      widgetName: "portfolio",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Visitalo!",
            url: `https://matias-schmidt.vercel.app/`,
            id: 1,
          },
        ],
      },
    },
  ],
};

export default config;