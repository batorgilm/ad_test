import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div
        dangerouslySetInnerHTML={{
          __html: `<iframe id='a9960d98' name='a9960d98' src='http://18.141.180.51/revive/www/delivery/afr.php?zoneid=6&amp;cb=INSERT_RANDOM_NUMBER_HERE' frameborder='0' scrolling='no' width='468' height='60' allow='autoplay'><a href='http://18.141.180.51/revive/www/delivery/ck.php?n=a7fc8764&amp;cb=INSERT_RANDOM_NUMBER_HERE' target='_blank'><img src='http://18.141.180.51/revive/www/delivery/avw.php?zoneid=6&amp;cb=INSERT_RANDOM_NUMBER_HERE&amp;n=a7fc8764' border='0' alt='' /></a></iframe>
          `,
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
