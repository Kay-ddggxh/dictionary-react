import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <i class="fas fa-genderless App-logo img-fluid"></i>
        </header>
        <main>
          <Dictionary defaultKeyword="puppy" />
        </main>
        <footer className="App-footer">
          Coded by Kathrin Welfare. View{" "}
          <a
            href="https://github.com/Kathrin-ddggxh/dictionary-react"
            target="_blank"
            rel="noreferrer"
          >
            open-source code
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
