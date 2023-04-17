import "./App.css";
import Search from "./Search";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Search />
      <footer>
        <a
          href="https://github.com/hamidehparsa/weather-react"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>
        by Hamideh Parsaeian
      </footer>
    </div>
  );
}

export default App;
