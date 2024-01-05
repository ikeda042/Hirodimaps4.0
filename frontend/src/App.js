import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';


function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:8000/api/v2/hello-world')
      .then(response => response.json()) // レスポンスをJSONとして解析
      .then(data => setMessage(data.message)) // JSONオブジェクトからmessageプロパティの値を取得
      .catch(err => console.error('Error fetching data:', err));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. {message}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
