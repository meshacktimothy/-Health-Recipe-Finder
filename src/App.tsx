import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/AboutPage";
import Recipes from "./pages/Recipes";
import { Route, Routes } from "react-router-dom";
import ViewDetails from "./pages/RecipesDetails";
import BrowseRecipe from "./pages/Recipes";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/AboutPage" element={<Aboutpage />}></Route>
        <Route path="/Recipes" element={<Recipes />}></Route>
        <Route path="/view" element={<ViewDetails />}></Route>
        <Route path="/browseRecipes" element={<BrowseRecipe />}></Route>
      </Routes>
    </>
  );
}
