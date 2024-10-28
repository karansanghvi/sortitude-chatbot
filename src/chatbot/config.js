import { createChatBotMessage } from 'react-chatbot-kit';
import CustomHeader from './CustomHeader';
import Options from './Options';

const botName = "Sortitude";

const config = {
  botName: botName,
  initialMessages: [createChatBotMessage(`Hi! I'm ${botName}. What is your good name?`)],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },
  customComponents: {
    header: () => <CustomHeader/>
  },
  widgets: [
    {
        widgetName: "serviceOptions",
        widgetFunc: (props) => <Options {...props} />
    }
  ]
};

export default config;
