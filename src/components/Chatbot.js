import React, { useState } from 'react';
import './Chatbot.css'; // Ensure you have this CSS file for styling

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [character, setCharacter] = useState(null); // State to track selected character

    // Predefined responses for Monica, Tsunade, and Hindi Chatbot
    const getResponse = (input) => {
        if (character === 'Monica') {
            switch (input.toLowerCase()) {
                case 'hello':
                    return "Hey! How you doin'?";
                case 'how are you?':
                    return "I'm fabulous, just like my cooking!";
                case 'what can you do?':
                    return "I can chat, give advice, and make your day better!";
                case 'what is pcos?':
                    return "Oh, PCOS? It's when your ovaries aren't following the rules. You get hormonal chaos, and yeah... irregular periods. Not cute, but we can deal with it!";
                case 'how to manage pcos?':
                    return "Well, first off—eat clean (ish), work out a little, and meditate. Trust me, it works. You gotta show your body who's boss!";
                case 'can weight loss help with pcos?':
                    return "YES! Dropping a little weight helps your body balance things out, like insulin and your hormones. Bonus: your jeans will fit better!";
                case 'how does stress affect pcos?':
                    return "Stress? Oh honey, it's like pouring gasoline on a fire. Stress makes everything worse—periods, acne, weight, you name it! So take it easy, okay?";
                default:
                    return "Could you be any more specific? Tell me more about your PCOS struggles, and I gotchu!";
            }
        } else if (character === 'Tsunade') {
            switch (input.toLowerCase()) {
                case 'hello':
                    return "Oi! What do you want?";
                case 'how are you?':
                    return "I'm busy, but I'm fine.";
                case 'what can you do?':
                    return "I can heal you or knock you out, your choice!";
                case 'what is pcos?':
                    return "PCOS is a condition that messes with your ovaries. It causes hormonal imbalance, and that’s never good. If you’re dealing with this, get some proper treatment from a good doc!";
                case 'how to manage pcos?':
                    return "Managing PCOS is simple—eat healthy, stay active, and reduce stress. You can't let it control you, fight back like a true warrior!";
                case 'can weight loss help with pcos?':
                    return "Of course! Losing weight can help balance those hormones. But don't expect a miracle overnight; stay disciplined and patient!";
                case 'how does stress affect pcos?':
                    return "Stress is like the enemy of your body. It messes up your hormones even more. Stay calm, or you’ll end up with more than just a headache!";
                
                default:
                    return "Don’t waste my time! Get to the point!";
            }
        } else if (character === 'Hindi') {
            switch (input) {
                case 'नमस्ते':
                    return "नमस्ते! कैसे हैं आप?";
                case 'आप कैसे हैं?':
                    return "मैं अच्छा हूँ! आप कैसे हैं?";
                case 'आप क्या कर सकते हैं?':
                    return "मैं आपके सवालों का जवाब दे सकता हूँ और पीसीओएस के बारे में जानकारी दे सकता हूँ!";
                case 'पीसीओएस क्या है?':
                    return "पीसीओएस एक हार्मोनल समस्या है जिससे अनियमित पीरियड्स और वजन बढ़ सकता है।";
                case 'पीसीओएस को कैसे मैनेज करें?':
                    return "स्वस्थ भोजन करें, व्यायाम करें और तनाव कम करें।";
                case 'क्या वजन कम करने से पीसीओएस में मदद मिलती है?':
                    return "हाँ! वजन कम करने से हार्मोन संतुलित होते हैं और पीसीओएस के लक्षण कम होते हैं।";
                case 'तनाव पीसीओएस को कैसे प्रभावित करता है?':
                    return "तनाव हार्मोन को और खराब कर देता है, इसलिए ध्यान और योग करें!";
                case 'Aap kya kar sakte hain?':
                    return "Main aapko pcos ke bare mein info de sakta hu";
                case 'Weight loss se pcos cure hota hain kya?':
                    return "Haan weight loss karne se PCOD ke liye madad hota hai";
                 
                default:
                    return "मुझे ठीक से समझ नहीं आया, कृपया और स्पष्ट करें!";
            }
        }
        return "Choose a character first!";
    };

    const handleSend = () => {
        if (input.trim() === '') return;

        // Add user message
        setMessages([...messages, { text: input, sender: 'user' }]);

        // Get response from the selected character
        const response = getResponse(input);

        // Add bot response
        setMessages(prevMessages => [...prevMessages, { text: response, sender: 'bot' }]);

        // Clear input
        setInput('');
    };

    return (
        <div className="chatbot">
            <div className="chatbot-header">
                <h2>Your Friendly Chatbot 🤖</h2>
                <div>
                    <button onClick={() => setCharacter('Monica')}>Monica</button>
                    <button onClick={() => setCharacter('Tsunade')}>Tsunade</button>
                    <button onClick={() => setCharacter('Hindi')}>Hindi</button> {/* ✅ New Hindi Option */}
                </div>
            </div>
            <div className="chatbot-messages">
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.sender}`}>
                        {msg.text}
                    </div>
                ))}
            </div>
            <div className="chatbot-input">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message..."
                />
                <button onClick={handleSend}>Send</button>
            </div>
        </div>
    );
};

export default Chatbot;
