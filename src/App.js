import "./App.css";
import Home from "./pages/home/Home";
import BuildWhat from "./pages/buildWhat/BuildWhat";
import Projects from "./pages/project/Projects";
import LetsTalk from "./pages/buyMeCoffee/LetsTalk";
import About from "./pages/About/About";

function App() {
  return (
    <>
      <Home></Home>
      <About />
      <BuildWhat></BuildWhat>
      <Projects></Projects>
      <LetsTalk> </LetsTalk>
    </>
  );
}

export default App;
