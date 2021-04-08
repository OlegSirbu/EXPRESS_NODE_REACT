import React, { useState, useEffect } from "react";
import "./App.css";
import { getList } from "./api";
import InputElement from "./components/InputElement";
import List from "./components/List";

function App() {
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    async function getData() {
      return await getList();
    }
    const lists = getData().then(data => {
      debugger
      setList(data);
    });
    console.log('lists',lists)
    return () => {};
  }, []);

  const addNewTodo = () => {
    if (inputValue) {
      setList([...list, { name: inputValue, done: false }]);
      setInputValue("");
    }
  };
  const onChangeStatus = index => {
    console.log([...list, (list[index].done = !list[index].done)]);
    setList([...list, (list[index].done = !list[index].done)]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <List list={list} onChangeStatus={onChangeStatus} />
        <InputElement inputValue={inputValue} setInputValue={setInputValue} />
        <button onClick={() => addNewTodo()}>Add new todo</button>
      </header>
    </div>
  );
}

export default App;
