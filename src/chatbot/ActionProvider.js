class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
      this.userName = "";  // To store the user's name
    }
  
    // This function responds after capturing the user's name
    handleNameInput = (name) => {
      this.userName = name;
      const message = this.createChatBotMessage(
        `Hey ${name}, which service do you need today?`,
        {
            widget: "serviceOptions",
        }
      );
      console.log("User's name received: ", name);
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));  
    }

    handleServiceSelection = (service) => {
        const response = this.createChatBotMessage(
            `You selected ${service}. Here is some information regarding ${service}.`
        );

        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, response],
        }))
    }
}

export default ActionProvider;
