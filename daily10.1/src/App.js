import logo from './logo.svg';
import './App.css';

const lista = ['passo1', 'passo2', 'passo3'];

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

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
        <p>{lista.map((index) => Task(index))}</p>
      </header>
    </div>
  );
}

export default App;
