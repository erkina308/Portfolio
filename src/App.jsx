import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Project1 from "./pages/Project-1";
// import NavBar from "./components/NavBar";

export default function App() {
  return (
    <>
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/project-1" element={<Project1 />} />
      </Routes>
    </>
  );
}
