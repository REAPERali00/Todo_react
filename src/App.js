import "./App.css";
import meme from "./assets/7-o.jpg";
function App() {
  return (
    <div className="center">
      <h1>Hello world</h1>
      <p className="Paragraph">This is a paragraph</p>
      <h2>this is a heading without the center class</h2>
      <img src={meme} alt="meme" />
      <p className="borders">this is to test borders</p>
      <p className="margins">this is to test margin</p>
      <p className="Outlined">this is to test border outline.</p>
    </div>
  );
}

export default App;
