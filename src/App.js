import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div
        dangerouslySetInnerHTML={{
          __html:
            "<iframe id='a81b9a17' name='a81b9a17' src='http://175.41.177.147/revive/www/delivery/afr.php?zoneid=1&amp;cb=INSERT_RANDOM_NUMBER_HERE' frameborder='0' scrolling='no' width='988' height='256' allow='autoplay'><a href='http://175.41.177.147/revive/www/delivery/ck.php?n=a96f42e6&amp;cb=INSERT_RANDOM_NUMBER_HERE' target='_blank'><img src='http://175.41.177.147/revive/www/delivery/avw.php?zoneid=1&amp;cb=INSERT_RANDOM_NUMBER_HERE&amp;n=a96f42e6' border='0' alt='' /></a></iframe>",
        }}
      ></div>

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
