import React, { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import "./chat.css";

const ChatLibrary = ({ apiKey, prompt, setPrompt, handleResponse }) => {
  const [loading, setLoading] = useState(false);

  const typeText = (element, text) => {
    let index = 0;
    let interval = setInterval(() => {
      if (index < text.length) {
        element.innerHTML += text.charAt(index);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 20);
  };

  const typeAIResponse = (responseText) => {
    const responseContainer = document.getElementById("response_container");
    if (responseContainer) {
      responseContainer.innerHTML = ""; // Clear existing content
      setLoading(true); // Show the loading indicator
      typeText(responseContainer, responseText); // Animate typing the AI response
      setLoading(false); // Hide the loading indicator after typing animation
    }
  };

  function generateUniqueId() {
    const timestamp = Date.now();
    const randomNumber = Math.random();
    const hexadecimalString = randomNumber.toString(16).toUpperCase(); // Ensure uppercase letters

    return `id-${timestamp}-${hexadecimalString}`;
  }

  function chatStripe(isAi, value, uniqueId) {
    return `
      <div class="wrapper ${isAi && "ai"}">
          <div class="chat">
              <div class="message" id="${uniqueId}">${value}</div>
          </div>
      </div>
  `;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const responseContainer = document.getElementById("response_container");
    setLoading(true); // Show the loading indicator

    const data = new FormData(form);

    // user's chatstripe
    responseContainer.innerHTML += chatStripe(false, data.get("prompt"));

    // to clear the textarea input
    form.reset();

    // bot's chatstripe
    const uniqueId = generateUniqueId();
    responseContainer.innerHTML += chatStripe(true, " ", uniqueId);

    // to focus scroll to the bottom
    responseContainer.scrollTop = responseContainer.scrollHeight;

    // specific message div
    const messageDiv = document.getElementById(uniqueId);

    try {
      const configuration = new Configuration({
        apiKey,
      });
      const openai = new OpenAIApi(configuration);

      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        temperature: 0,
        max_tokens: 3000,
        top_p: 1,
        frequency_penalty: 0.5,
        presence_penalty: 0,
      });

      messageDiv.innerHTML = ""; // Clear the loading message

      const trimmed = response.data.choices[0].text;
      handleResponse(trimmed); // Pass the AI response to the parent component
      typeAIResponse(trimmed);
      // Animate the AI response
    } catch (error) {
      console.error(error);
      handleResponse("Something went wrong"); // Set an error message in case of API failure// Hide the loading indicator after API response is received
    } finally {
      setLoading(false);
    }
  };

  const handleRenderResponse = () => {
    if (loading) {
      return <p className="loading-indicator">Loading...</p>;
    } else {
      return <div id="response_container"></div>; // Show the AI response container
    }
  };

  return (
    <>
      <div className="parent">
        <form onSubmit={handleSubmit}>
          <div className="form">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)} // Use the setPrompt prop
            className="input"
          />
          <button className="button" type="submit">
            Ask
          </button>
          </div>
        </form>
        {handleRenderResponse()}
      </div>
    </>
  );
};
export default ChatLibrary 