'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var api = require('@openai/api');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const ChatLibrary = ({
  apiKey,
  prompt,
  children
}) => {
  const [response, setResponse] = React.useState(null);
  React.useEffect(() => {
    const fetchData = async () => {
      if (apiKey && prompt) {
        const configuration = new api.Configuration({
          apiKey
        });
        const openai = new api.OpenAIApi(configuration);
        try {
          const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt,
            temperature: 0.7,
            maxTokens: 100,
            n: 1,
            stop: ['\n']
          });
          setResponse(response.data.choices[0].text.trim());
        } catch (error) {
          console.error(error);
        }
      }
    };
    fetchData();
  }, [apiKey, prompt]);
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, children);
};

exports["default"] = ChatLibrary;
//# sourceMappingURL=index.js.map
