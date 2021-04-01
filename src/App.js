import "./css/App.css";
import Search from "./Search.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          {/*title*/}
          <h1 className="title">Web Dictionary</h1>
          <h3 className="subtitle"> What are you looking for?</h3>
        </div>
      </header>

      {/*search*/}
      <Search />
      {/*footer*/}
    </div>
  );
}

export default App;
