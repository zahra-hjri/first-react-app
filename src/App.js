import "./index.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
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
