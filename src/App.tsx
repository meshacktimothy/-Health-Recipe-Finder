import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/AboutPage";
import Recipes from "./pages/Recipes";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/AboutPage" element={<Aboutpage />}></Route>
        <Route path="/Recipes" element={<Recipes />}></Route>
      </Routes>

      {/* <About /> */}
      {/* <Aboutpage /> */}
    </div>
  );
}
