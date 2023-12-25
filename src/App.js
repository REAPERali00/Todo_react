import "./App.css";
import meme from "./assets/7-o.jpg";
import React, { Component } from "react";

function App() {
  return (
    <div className="center">
      <h1>Hello world</h1>
      <p className="Paragraph">This is a paragraph</p>
      <h2>
        this is a <b>heading</b> without the center class
      </h2>
      <img src={meme} alt="meme" />
      <p className="borders">
        this is to <b>test</b> borders
      </p>
      <p className="margins">
        this is to <b>test</b> margin
      </p>
      <p className="Outlined">
        this is to <b>test</b> border outline.
      </p>
      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUJcmljayByb2xs">
        Surprise link
      </a>
      <ol>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ol>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
      <h2 className="Position_parent">
        <p>Testing position Property</p>
      </h2>
    </div>
  );
}

export default App;
