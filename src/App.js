import "./App.css";
import Home from "./pages/home/Home";
import ILikeToBuild from "./pages/likeToBuild/LikeToBuild";
import BuildWhat from "./pages/buildWhat/BuildWhat";
import Projects from "./pages/project/Projects";

function App() {
  return (
    <>
      <Home></Home>
      <ILikeToBuild></ILikeToBuild>
      <BuildWhat></BuildWhat>
      <Projects></Projects>
    </>
  );
}

export default App;
