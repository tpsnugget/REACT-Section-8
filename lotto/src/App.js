import React from 'react';
import Lotto from "./Lotto"
import './App.css';

function App() {
  return (
    <div className="App">
      <Lotto />
      <Lotto title="Mini Daily" maxNum={10} numBalls={4}/>
    </div>
  );
}

export default App;
