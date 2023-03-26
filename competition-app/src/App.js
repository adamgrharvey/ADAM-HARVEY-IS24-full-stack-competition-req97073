import logo from './logo.svg';
import './App.css';
import axios from 'axios';

const backendURL = 'http://localhost:3000'

axios
  .get(`${backendURL}/api`, {
    headers: {
      'content-type': 'application/json',
    },
  })
  .then((res) => {
    // if server returns 200 (success)
    if (res.status === 200) {
      console.log(res);
    }
  })
  .catch((err) => {
    console.log(err);
  });

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
