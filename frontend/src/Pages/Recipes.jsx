// eslint-disable-next-line no-unused-vars
import React, { useContext,useState } from "react";
import DeleteRecipe from "./DeleteRecipe";
import EditRecipe from "./EditRecipe";
import MyRecipesContext from "../context/MyRecipesContext";
import SearchBar from "../Components/SearchBar";


const Recipes = () => {
  const { recipes } = useContext(MyRecipesContext);
  console.log(recipes);
  const [selectedRecipeId, setSelectedRecipeId] = useState(null);
  const [selectedRecipeTitle, setSelectedRecipeTitle] = useState(null);
  const [selectedRecipeIngredients, setSelectedRecipeIngredients] = useState(null);

  const handleRecipeSelection = (id, title, ingredients) => {
    setSelectedRecipeId(id);
    setSelectedRecipeTitle(title);
    setSelectedRecipeIngredients(ingredients);
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

  const handleDelete = (title) => {
    <DeleteRecipe title={title}/>
  }

  return (
    <div className="container mt-4">
      <SearchBar />
      {/**/}
      <EditRecipe id={selectedRecipeId} title={selectedRecipeTitle} ingredients={selectedRecipeIngredients}/>
      
      <div className="row">
        {recipes.map((recipe) => {
          return (
            <>
            
            <div className="col-lg-3 m-4" key={recipe._id}>
              <div className="card">
                <img
                  src={recipe.image}
                  className="card-img-top"
                  alt="Recipe Image"
                />
                <div className="card-body">
                  <h5 className="card-title">{recipe.title}</h5>
                  <p className="card-text">{commaAdd(recipe.ingredients)}</p>
                  <div className="">
                    <a onClick={() => handleDelete(recipe.title)}  className="btn btn-warning" >
                      Delete Recipe
                    </a>
                    <a
                      href="#"
                      className="btn btn-light"
                      data-bs-toggle="modal"
                      data-bs-target="#editRecipeModal"
                      onClick={() => {
                        handleRecipeSelection(recipe._id, recipe.title, recipe.ingredients);
                        
                      }}
                    >
                      Edit Recipe
                    </a>
                  </div>
                </div>
              </div>
            </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Recipes;
