import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const plus = () => {
    setCount(prevCount => {
      if (prevCount === 9) {
        alert('Достигнуто 10!');
      }
      return prevCount < 10 ? prevCount + 1 : prevCount;
    });
  };

  const min = () => {
    setCount(prevCount => {
      if (prevCount === 1) {
        alert('Достигнуто 0!');
      }
      return prevCount > 0 ? prevCount - 1 : prevCount;
    });
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
          onClick={min}
          style={{
            padding: '5px 50px',
            border: 'none',
            borderRadius: 5,
            background: 'red',
            color: 'white',
          }}
        >
          -
        </button>
        <div>{count}</div>
        <button
          onClick={plus}
          style={{
            padding: '5px 50px',
            border: 'none',
            borderRadius: 5,
            background: 'blue',
            color: 'white',
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default App;
