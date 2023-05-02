import { useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
// import DarkMode from "./components/DarkMode/DarkMode";
import "./index.css";
// import ReactDOM from "react-dom/client";

export default function App() {
  const [toggelChangeBg, setToggelChangeBg] = useState(false);

  return (
    <div className="App">
      <div className={`h-screen ${toggelChangeBg ? "dark" : "light"}`}>
        <Header
          toggelChangeBg={toggelChangeBg}
          setToggelChangeBg={setToggelChangeBg}
        />
        <Main
          toggelChangeBg={toggelChangeBg}
          setToggelChangeBg={setToggelChangeBg}
        />
        <div className={` ${toggelChangeBg ? "dark" : "light"}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
}
