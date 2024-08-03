// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getRecipe } from "../APIs/getRecipeById";


const RecipeCard = () => {
  
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState({});

  useEffect(()=> {
    try {

      const getRecipeData = async (id) => {
        const response = await getRecipe(id);
        setRecipe(response);
      }
      getRecipeData(id);
    } catch (error) {
      console.log(error);
    }

  }, [id])
  
   
 
  return (
    <>
        <div className="col-lg-3 m-4" key={recipe._id}>
        <div className="card" >
          <img src={recipe.image} className="card-img-top" alt="Recipe Image"/>
          <div className="card-body">
            <h5 className="card-title">{recipe.title}</h5>
            <p className="card-text">{recipe.ingredients}</p>
            <div className="">
              <a href="#" className="btn btn-warning" onClick={() => navigate(`/delete-recipe/${recipe._id}`)}>Delete Recipe</a>
            <a href="#" className="btn btn-light">Edit Recipe</a>
            </div>
            
          </div>
        </div>
      </div>
      </>
    );
  
}

export default RecipeCard