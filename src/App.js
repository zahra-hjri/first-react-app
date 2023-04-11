import "./index.css";
import Counter from "./Counter";

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline container mx-auto mt-10 btn btn-error">
        Hello world!
      </h1>
      start App
      <hr />
      <Counter />
      <hr />
      End App
    </div>
  );
}

export default App;

/*------------------ class component ----------------*/
// import { Component } from "react";

// class App extends Component {
//   render() {
//     return <h1>Hello :)</h1>;
//   }
// }

// export default App;
