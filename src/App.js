import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

function App() {
  const [text, setText] = useState(`
  # Header h1

  ## Sub-head h2
  
  \`<div></div>\`, backticks code
  
  \`\`\`
  // this is multi-line code:
  
  function addNumbers(a, b) {
    return a + b;
  }
  
  \`\`\`
  
  boldtext **bold** 
  
  Tweet it [links](https://twitter.com/intent/tweet)
  > blockquote
  
  ![React Logo w/ Text](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png)
  
  ### list of items:
  - First item
  - Second item
  - Third item
  `);

  return (
    <div className="App">
      <textarea id='editor' onChange={(e) => {setText(e.target.value)}} value={text}  style={{ width: "300px", resize: "none" }}></textarea>
      <div id='preview'>
        <ReactMarkdown>{text}</ReactMarkdown>
      </div>
    </div>
  );
}

export default App;