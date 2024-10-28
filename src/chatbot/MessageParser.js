class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
      this.isWaitingForName = true;  // Flag to track if bot is waiting for the name
    }
  
    parse(message) {
      if (this.isWaitingForName) {
        // Capture the user's name and send a personalized response
        const name = message.trim();
        if (name) {
          console.log("Name input detected: ", name);
          this.actionProvider.handleNameInput(name);  // Call handleNameInput instead of handleNameResponse
          this.isWaitingForName = false;  // Set flag to false after name is captured
        }
      }
    }
}

export default MessageParser;
