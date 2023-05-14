import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import Search from "./Search";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Weather Application</h1>
        </header>
        <main>
          <Search />
        </main>
        <footer>
          <a
            href="https://github.com/kmlaird/weather-app-react.git"
            target="_blank"
            rel="noreferrer"
          >
            Open-sourced code
          </a>{" "}
          by{" "}
          <a
            href="https://www.linkedin.com/in/kimlaird/"
            target="_blank"
            rel="noreferrer"
          >
            Kim Laird
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
