import React from "react";
import "../assets/style.css";  // You can style the buttons in this CSS file

const Options = (props) => {
  const options = [
    { text: "Summarization", handler: () => props.actionProvider.handleServiceSelection("Summarization"), id: 1 },
    { text: "Categorization", handler: () => props.actionProvider.handleServiceSelection("Categorization"), id: 2 },
  ];

  return (
    <div className="options-container">
      {options.map((option) => (
        <button
          key={option.id}
          onClick={option.handler}
          className="option-button"
        >
          {option.text}
        </button>
      ))}
    </div>
  );
};

export default Options;
