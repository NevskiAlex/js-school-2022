import logo from "./logo.svg";
import "./App.css";
import { Header, HeaderMob } from "./components/header/Header";
import { useEffect, useState } from "react";

function App() {
  const [piple, setPiple] = useState();
  const fetchPeaple = () => {
    fetch("https://swapi.dev/api/people")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setPiple(data);
      });
  };
  useEffect(() => {
    fetchPeaple();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Header />
        {piple &&
          piple.results.map((newData) => {
            return <p>{newData.name}</p>;
          })}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <HeaderMob />
      </header>
    </div>
  );
}

export default App;
