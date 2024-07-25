// eslint-disable-next-line no-unused-vars
import React,{ useState} from 'react';
import EditRecipe from './EditRecipe';
import '../App.css';


const RecipeCard = ({ recipe }) => {
  const [selectedRecipeId, setSelectedRecipeId] = useState(null);
  const [selectedRecipeTitle, setSelectedRecipeTitle] = useState(null);
  const [selectedRecipeIngredients, setSelectedRecipeIngredients] = useState(null);

  const handleRecipeSelection = (id) => {
    setSelectedRecipeId(id);
    setSelectedRecipeTitle(recipe.title);
    setSelectedRecipeIngredients(recipe.ingredients);
  }
    // Helper function to convert a string to title case
  const toTitleCase = (str) => {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  // Function to transform array elements to title case and join them with commas
  const commaAdd = (array) => {
    return array.map(toTitleCase).join(", ");
  };
  return (
    <>
    <EditRecipe recipe={recipe} /*id={selectedRecipeId} title={selectedRecipeTitle} ingredients={selectedRecipeIngredients}*//>
        <div className="col-lg-3 m-4" key={recipe._id}>
        <div className="card" >
          <img src={recipe.image} className="card-img-top" alt="Recipe Image"/>
          <div className="card-body">
            <h5 className="card-title">{recipe.title}</h5>
            <p className="card-text">{commaAdd(recipe.ingredients)}</p>
            <div className="">
              <a href="#" className="btn btn-warning">Delete Recipe</a>
            <a href="#" className="btn btn-light" data-bs-toggle="modal" data-bs-target="#editRecipeModal" onClick={() => {handleRecipeSelection(recipe._id)}}>Edit Recipe</a>
            </div>
            
          </div>
        </div>
      </div>
      </>
    );
  
}

export default RecipeCard