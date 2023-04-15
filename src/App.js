import logo from "./logo.svg";
import "./App.css";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Search />
      <footer>
        <a href="https://github.com/hamidehparsa/weather-react" target="_blank">
          Open-source code
        </a>
        by Hamideh Parsaeian
      </footer>
    </div>
  );
}

export default App;
