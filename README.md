# AI-Powered Chat Library

This library allows you to integrate an AI-powered chat component into your React application. The chat component uses the OpenAI API to generate intelligent responses based on user input.

# Installation

To use the AI-powered chat library in your React application, you need to follow these steps:

1. Install the required dependencies using npm or yarn:

```sh
npm install rca-react-chatai
```

# Importing Component

```js
import ChatLibrary from "rca-react-chatai";
```


# USAGE

Once you have imported the ChatLibrary component, you can use it in your application as follows:

```js
import React, { useState } from "react";
import ChatLibrary from "rca-react-chatai";


const Chat = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");


const apiKey = "your_own_apiKey";


  const handleResponse = (response) => {
    setResponse(response);
  };


  return (
    <div>
      //below is the input and ask button
      <ChatLibrary
        apiKey={apiKey}
        prompt={prompt}
        setPrompt={setPrompt}
        handleResponse={handleResponse}
      />
      //below is the div that holds the response (response container)
      <div id="response_container" className="response-container"></div>
    </div>
  );
};


export default Chat;
```

# Warning

This library only works with vite projects (npx create-vite@latest your_project). If you use create react app it won’t work.
WE EXCUSE OURSELVES FOR THE INCONVENIENCE AND WE WILL WORK ON IT BECAUSE IT IS STILL IN DEVELOPMENT

# Custom Styling

The chat component comes with default styling, but you can customize it to match your application's design. To do this, you can override the CSS classes provided by the library.

For example, to change the input and button styles, you can add your own CSS:

```css
/* custom.css */
.response_container {
  /* modify the styles of the response container ( the container that has the response )*/
}

div {
  /* you can modify the styles of the div that holds them all */
}
```

Then, import your custom CSS in your React application:

```js
import React from "react";
import ChatLibrary from "rca-react-chatai";
import "./custom.css"; // Import your custom styles
```

The chat component will now use your custom styles for the input and button.

# Real-World Use Cases

The AI-powered chat library can be used for various real-world applications, including:

Customer Support Chatbots
Language Translation Services
Content Generation
Question Answering Systems
Chat-based Interfaces

# Contributions

As it is still being improved day by day , it came from being 50 lines of code to copy to 26 lines of code to copy.
If you find any issues with the library or have suggestions for improvements, feel free to contribute by opening an issue or submitting a pull request on the GitHub repository.
Or furthermore you can talk with me on my [https://www.linkedin.com/in/mico-dan-778732258](linkedIN account).



# Watch Demo
- [Watch Demo Here](https://youtu.be/cYTcD_RqQwE)
