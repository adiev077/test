import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const plus = () => {
    if (count < 10) {
      setCount(prevCount => prevCount + 1);
    }
    if(count === 10) {
      alert("достигнуто 10")
    }
  };

  const min = () => {
    if (count > 0) {
      setCount(prevCount => prevCount - 1);
    }
    if(count === 0) {
      alert("Нельзя меньше 0")
    }
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
