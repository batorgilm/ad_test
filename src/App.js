import logo from "./logo.svg";
import "./App.css";
import { useEffect, useRef } from "react";

function App() {
  useEffect(() => {
    console.log("pinecone effect");
  }, []);
  const renderAd = () => {
    return {
      __html:
        "<iframe id='a1d272e9' name='a1d272e9' src='http://175.41.177.147/revive/www/delivery/afr.php?zoneid=1&amp;cb=123' frameborder='0' scrolling='no' width='988' height='256' allow='autoplay'><a href='http://175.41.177.147/revive/www/delivery/ck.php?n=ada81b5a&amp;cb=123' target='_blank'><img src='http://175.41.177.147/revive/www/delivery/avw.php?zoneid=1&amp;cb=123&amp;n=ada81b5a' border='0' alt='' /></a></iframe>",
    };
  };
  return (
    <div className="App">
      <div dangerouslySetInnerHTML={renderAd()}></div>

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
