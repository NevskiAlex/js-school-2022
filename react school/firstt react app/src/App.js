import logo from "./logo.svg";
import "./App.css";
import { Header, HeaderMob } from "./components/header/Header";
import { useEffect, useState } from "react";

function App() {
  const [piple, setPiple] = useState();
  const [myMoney, setMoney] = useState({});

  const fetchPeaple = () => {
    fetch("https://swapi.dev/api/people")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        setPiple(data);
      });
  };

  const fetchCurrency = () => {
    fetch("currency.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setMoney(data);
      });
  };

  const onChange = (e) => {
    console.log(e.target.value);
  };

  useEffect(() => {
    fetchPeaple();
  }, []);

  useEffect(() => {
    fetchCurrency();
  }, []);

  return (
    <div className="App">
      <div>
        <form>
          <select>
            {Object.keys(myMoney).map((key) => (
              <option key={key}>{key}</option>
            ))}
          </select>
          <input type="text" value={100} onChange={onChange} />
          <select>
            {Object.keys(myMoney).map((key, index) =>
              index === 1 ? (
                <option selected key={key}>
                  {key}
                </option>
              ) : (
                <option key={key}>{key}</option>
              )
            )}
          </select>
          <input type="text" />
        </form>
      </div>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Header /> */}
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
