import logo from "./logo.svg";
import "./App.css";

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
      <div
        style={{
          position: "absolute",
          left: "0",
          top: "0",
          backgroundColor: "white",
        }}
        dangerouslySetInnerHTML={{
          __html:
            "<iframe id='a1d272e9' name='a1d272e9' src='http://175.41.177.147/revive/www/delivery/afr.php?zoneid=1&amp;cb=INSERT_RANDOM_NUMBER_HERE' frameborder='0' scrolling='no' width='988' height='256' allow='autoplay'><a href='https://175.41.177.147/revive/www/delivery/ck.php?n=ada81b5a&amp;cb=INSERT_RANDOM_NUMBER_HERE' target='_blank'><img src='https://175.41.177.147/revive/www/delivery/avw.php?zoneid=1&amp;cb=INSERT_RANDOM_NUMBER_HERE&amp;n=ada81b5a' border='0' alt='' /></a></iframe>",
        }}
      ></div>
    </div>
  );
}

export default App;
