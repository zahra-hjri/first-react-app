import "./index.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
// import ReactDOM from "react-dom/client";

export default function App() {
  return (
    <div className="App">
      <div className="h-screen">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}
