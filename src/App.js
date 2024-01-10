import "./App.css";
import Dictionary from "./Dictionary";
import logo from "./logo.png";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer>
          <a
            href="https://github.com/meli-mac/dictionary-app"
            rel="noreferrer"
            target="_blank"
          >
            Open-source code
          </a>{" "}
          by Melissa Machado
        </footer>
      </div>
    </div>
  );
}
