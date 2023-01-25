/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/iframe-has-title */
import logo from "./logo.svg";
import "./App.css";
import AdsComponent from "./AdsComponent";

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
      <>
        <h1>Place To show Google AdSense</h1>
        <AdsComponent dataAdSlot="4999579611" />
      </>
    </div>
  );
}

export default App;
