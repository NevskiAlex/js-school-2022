import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.scss";
import Form from "./components/form";

function App() {
  const [switcher, setSwitcher] = useState(true);
  const [myDataLocal, setMyDataLocal] = useState([]);
  const [shower, setshower] = useState(true);

  const myClick = () => {
    setSwitcher(!switcher);
  };
  const myShow = () => {
    setshower(!shower);
  };

  // useEffect(() => {
  //   fetch("https://63a48578821953d4f2b71eb2.mockapi.io/api/v1/doto-list")
  //     .then((response) => response.json())
  //     .then((myDataFromServer) => setMyDataLocal(myDataFromServer));
  // }, []);

  // myDataLocal.map(()=>{})
  // console.log();

  // for (var i=0, i < myDataLocal.length , i++) {
  //   myDataLocal[i];
  // }

  let element: any[] = [];

  myDataLocal.forEach((item: { Friends: any }, index) => {
    // console.log("myitem", index, item);
    // element.push(item.name);
    // element.push(item.Friends);

    item.Friends.forEach(
      (friend: { age: number; name: string }, index2: number) => {
        // console.log("myFriend", index2, friend.age);
        element.push(friend.name);
      }
    );
  });

  // console.log("<0>", element);

  const fn = (a: string, b: number, c: boolean, d: any, e: any): any => {
    console.log(a, b, c, d, e);
    return a + b;
  };

  console.log("<0>", fn("hello", 1, true, ["x1"], { a: 1 }));

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
      <div>
        Friends:
        <ul>
          {element && element.map((myName) => <li key={myName}>{myName}</li>)}
        </ul>
      </div>
      {myDataLocal &&
        myDataLocal.map((item: any) => {
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
            id: myDataLocal.length + 1,
            done: value.checkbox,
          };

          setMyDataLocal([...myDataLocal, newData as never]);
        }}
      />
    </div>
  );
}

export default App;
