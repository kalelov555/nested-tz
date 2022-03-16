import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  function createNewContainer(event) {
    const parent = event.target.parentElement;
    const newCon = document.createElement("div");
    parent.insertBefore(newCon, event.target);

    newCon.classList.add("container");
    const newBtnAdd = document.createElement("button");
    newBtnAdd.classList.add("addBtn");
    newBtnAdd.innerHTML = "Add";
    newCon.appendChild(newBtnAdd);

    const newContainerButton = document.createElement("button");
    newContainerButton.innerHTML = "container";
    newCon.insertBefore(newContainerButton, newBtnAdd);

    newContainerButton.addEventListener("click", createNewContainer);

    const newInputButton = document.createElement("button");
    newInputButton.innerHTML = "input";
    newCon.appendChild(newInputButton);

    newInputButton.addEventListener("click", createNewInput);
  }

  function createNewInput(event) {
    function onChange(e) {
      console.log(e.target.value);
    }
    const parent = event.target.parentElement;
    const newInput = document.createElement("input");
    parent.insertBefore(newInput, event.target);

    newInput.addEventListener("change", onChange);
  }

  function convertToJson(event) {
    const all = document.getElementsByTagName("body");

    for (let el of all) {
      console.log(el);
    }
  }

  return (
    <div className="container">
      <button className="btnCon" onClick={createNewContainer}>
        container
      </button>
      <button className="btnInp" onClick={createNewInput}>
        input
      </button>
      <button className="addBtn" onClick={convertToJson}>
        Add
      </button>
    </div>
  );
}

export default App;
