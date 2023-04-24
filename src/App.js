import "./index.css";
import Header from "./components/Header";
import Main from "./components/Main";
// import Background from "../src/assets/background.avif";
export default function App() {
  return (
    <div className="App">
      <div className="h-screen">
        <Header />
        <Main />
      </div>
    </div>
  );
}
