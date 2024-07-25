import Recipes from "./Pages/Recipes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Auth from "./Auth/Auth";
// eslint-disable-next-line no-unused-vars
import NewRecipe from "./Pages/NewRecipe";
// eslint-disable-next-line no-unused-vars
import ProtectedRoutes from "./Auth/ProtectedRoutes";


function App() {
  
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/" element={<Recipes />} />
          {/**<ProtectedRoutes path='/personal-recipes'>
            
            <Route path='/create-recipe' element={NewRecipe} />
          </ProtectedRoutes>*/}
          
          {/* Add more routes here */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
