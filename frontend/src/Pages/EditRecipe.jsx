import  { useState,useEffect } from "react";
import { BACKEND_URL } from "../utils/backend_services";
import Cookies from 'js-cookie'

const EditRecipe = ({id, title, ingredients}) => {
  const [newTitle, setNewTitle] = useState(null);
  const [newIngredient, setNewIngredient] = useState(null);

  const token = Cookies.get('token')

  useEffect(() => {
    const getRecipe = async() => {
      const response = await fetch(`${BACKEND_URL}/recipes/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      console.log(data);
      setNewTitle(data.title);
      setNewIngredient(data.ingredients);
    }

    if(id) {
      getRecipe();
    }
  }, [id]);

const handleSubmit = async(e) => {
    e.preventDefault();

    const recipeData = {
      title: newTitle,
      ingredients: newIngredient
    }
    console.log(recipeData);
  }
  useEffect((recipeData) => {
    const updateRecipe = async(req, res) => {
      const response = await fetch(`${BACKEND_URL}/personal_recipes/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token
        },
        body: JSON.stringify(recipeData)
      })
      try {
      const data = await response.json();
      console.log(data);
      } catch (error) {
        console.log(error);
        return res.status(500).send({ error: error.message });
      }
      
    }
    updateRecipe();
  }, [id, token])

  
  return (
    <div>
      <div
        className="modal fade"
        id="editRecipeModal"
        tabIndex="-1"
        aria-labelledby="editRecipeModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="editRecipeModalLabel">
                Edit Recipe
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
                <form onSubmit={handleSubmit}>
                    <div className="mb-2">
                        <label htmlFor="title" className="form-label">Recipe title</label>
                        <input type="text" className="form-control" id="title" value={newTitle} onChange={(e) => {
                          setNewTitle(e.target.value);
                        }}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="ingredients" className="form-label">Ingredients</label>
                        <input type="text" className="form-control" id="ingredients" value={newIngredient} onChange={(e) => {
                          setNewIngredient(e.target.value);
                        }}/>
                    </div>
                </form>
            </div>
            <div className="modal-footer">
            <button type="submit" className="btn btn-primary">
                Save changes
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditRecipe;
