//import Recipes from "./Pages/Recipes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Wrapper from "./Components/Wrapper";
import Auth from "./Auth/Auth";
// eslint-disable-next-line no-unused-vars
import NewRecipe from "./Pages/NewRecipe";
import EditRecipe from "./Pages/EditRecipe";
// eslint-disable-next-line no-unused-vars
import { token } from "./utils/backend_services";
import Home from "./Pages/Home";
import RecipeCard from "./Pages/RecipeCard";
import DeleteRecipe from "./Pages/DeleteRecipe";

function App() {
  return (
    <>
      {token ? (
        <Wrapper>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/recipe/:id" element={<RecipeCard />} />
              <Route path="/create-recipe" element={<NewRecipe />} />
              <Route path="/delete-recipe/:id" element={<DeleteRecipe />} />
              <Route path="/edit-recipe/:id" element={<EditRecipe />} />
              <Route path="/auth" element={<Auth />} />
            </Routes>
          </Router>
        </Wrapper>
      ) : (
        <Auth />
      )}
    </>
  );
}

export default App;
