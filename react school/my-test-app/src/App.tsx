import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.scss";
import Form from "./components/form";

function App() {
  const [switcher, setSwitcher] = useState(true);
  const [data, setData] = useState([]);
  const [shower, setshower] = useState(true);

  const myClick = () => {
    setSwitcher(!switcher);
  };
  const myShow = () => {
    setshower(!shower);
  };

  useEffect(() => {
    fetch("https://63a48578821953d4f2b71eb2.mockapi.io/api/v1/doto-list")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [switcher]);

  useEffect(() => {
    fetch("https://63a48578821953d4f2b71eb2.mockapi.io/api/v1/homework-2")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [shower]);

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={myClick}>
          <img src={logo} className="App-logo" alt="logo" />
        </button>
        {switcher && (
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
        )}
      </header>
      <p>test text P</p>
      {data &&
        data.map((item: any) => {
          // console.log(item);
          return (
            <div key={item.name}>
              <span>{item.id}</span>
              <span>{item.name}</span>
              <span>{item.done}</span>
              <input type="checkbox" checked={item.done} />
            </div>
          );
        })}

      <div className="homework">
        <p>homework</p>
        <button onClick={myShow} className="btn">
          Show text
        </button>
        {shower && <p>Show text on slick</p>}
      </div>

      <Form
        onSubmitMy={(value: any) => {
          // console.log(value);
          const newData: any = {
            name: value.name,
            id: data.length + 1,
            done: value.checkbox,
          };

          setData([...data, newData as never]);
        }}
      />
    </div>
  );
}

export default App;
