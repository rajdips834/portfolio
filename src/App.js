import "./App.css";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
    </>
  );
}

export default App;
