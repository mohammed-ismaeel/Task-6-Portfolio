import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Details from "./Pages/Details";
// import ProjectDetails from "./components/ProjectDetails/ProjectDetails";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Details/:id" element={<Details />}></Route>
      </Routes>
    </>
  );
}

export default App;
