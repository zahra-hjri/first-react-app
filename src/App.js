// import Car from "./Car";
// import Counter from "./Counter";
import "./index.css";
import Navbar from "./Navbar";
import ShoppingList from "./User";
import Button from "./Button";

import { useState } from "react";
export default function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div className="App">
      <div className="bg-teal-950 h-screen">
        <Navbar />
        <ShoppingList />
        <Button count={count} onClick={handleClick} />
        <Button count={count} onClick={handleClick} />
        <Button count={count} onClick={handleClick} />

        {/* <Profile /> */}
      </div>
    </div>
  );
}

/*------------------ class component ----------------*/
// import { Component } from "react";

// class App extends Component {
//   render() {
//     return <h1>Hello :)</h1>;
//   }
// }

// export default App;
