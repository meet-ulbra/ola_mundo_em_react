import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Contador de Olá Mundos: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Aumentar</button>
      </header>
    </div>
  );
}


export default App;
