import React, { useState } from 'react';
import "./index.css";
import botAvatar from './assets/Group 2.png';
import userAvatar from './assets/Group 3.png';
import Summarization from './Summarization';
import Categorization from './Categorization';

function Chatbot() {

    const [messages, setMessages] = useState([
        {
            sender: 'bot',
            text: 'Hello, I am Sortitude! What is your good name?'
        },
    ]);
    const [userInput, setUserInput] = useState('');
    const [step, setStep] = useState(1);

    // user input handler
    const handleInputChange = (event) => {
        setUserInput(event.target.value);
    };

    const handleUserSubmit = () => {
        if (!userInput.trim()) return;

        if (step === 1) {
            setMessages((prevMessages) => [
                ...prevMessages,
                {
                    sender: 'user',
                    text: userInput
                },
                {
                    sender: 'bot',
                    text: `Hello ${userInput}, which service would you like to choose`
                },
            ]);
            setStep(2);
        } else {
            handleServiceSelection(userInput.toLowerCase());
        }
        setUserInput('');
    };

    const handleServiceSelection = (service) => {
        let response;
        if (service === 'summarization') {
            response = <Summarization/>;
        } else if (service === 'categorization') {
            response = <Categorization/>;
        }

        setMessages((prevMessages) => [
            ...prevMessages,
            {
                sender: 'user',
                text: service.charAt(0).toUpperCase() + service.slice(1)
            },
            {
                sender: 'bot',
                text: response,
            },
            // {
            //     sender: 'bot',
            //     text: 'Which service would you like to choose next?'
            // }
        ]);
        // setStep(2);
        setStep(3);
    }

  return (
    <>
        <div className='chatContainer'>
            <div className='chatWindow'>
                {messages.map((message, index) => (
                    <div key={index} className={message.sender === 'bot' ? 'botMessage' : 'userMessage'}>
                        <img 
                            src={message.sender === 'bot' ? botAvatar : userAvatar} 
                            alt={`${message.sender} avatar`} 
                            className="avatar" 
                        />
                        <span className="messageText">{message.text}</span>
                    </div>
                ))}
            </div>
            {step === 2 && (
                <div className="options">
                    <button onClick={() => handleServiceSelection('summarization')} className='optionButton'>Summarization</button>
                    <button onClick={() => handleServiceSelection('categorization')} className='optionButton'>Categorization</button>
                </div>
            )}
            <div style={{ display: 'flex' }}>
                <input
                    type="text"
                    value={userInput}
                    onChange={handleInputChange}
                    placeholder='Type your message...'
                    className='input'
                />
                <button
                    onClick={handleUserSubmit}
                    className='button'
                >
                    Send
                </button>
            </div>
        </div> 
    </>
    )
}

export default Chatbot
