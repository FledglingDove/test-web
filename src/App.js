import React from "react";

function App() {
  const [message, setMessage] = React.useState();
  function messageListener(message) {
    setMessage(message);
  }
  
  React.useEffect(() => {
    window.addEventListener('message', messageListener);
    return (
      window.removeEventListener('message', messageListener)
    )
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {message ? `We got a message: ${JSON.stringify(message)}` : 'We have not gotten a message from the extension'}
      </header>
    </div>
  );
}

export default App;
