import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const startInterval = (increment) => {
    if (intervalId) {
      clearInterval(intervalId);
    }

    const id = setInterval(() => {
      setCount(prevCount => {
        if (increment && prevCount < 10) {
          return prevCount + 1;
        }
        if (!increment && prevCount > 0) {
          return prevCount - 1;
        }
        clearInterval(id);
        return prevCount;
      });
    }, 1000);

    setIntervalId(id);
  };

  return (
    <div className="App" style={{
      height: 700,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        display: 'flex',
        gap: 20,
      }}>
        <button
          onClick={() => startInterval(false)}
          style={{
            padding: '5px 50px',
            border: 'none',
            borderRadius: 5,
            background: 'red'
          }}
        >
          -
        </button>
        <div>{count}</div>
        <button
          onClick={() => startInterval(true)}
          style={{
            padding: '5px 50px',
            border: 'none',
            borderRadius: 5,
            background: 'blue'
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default App;
