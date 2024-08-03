import { BACKEND_URL,token } from "../utils/backend_services";

export const updateRecipe = async( recipeData, id) => {
    const response = await fetch(`${BACKEND_URL}/personal_recipes/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      },
      body: JSON.stringify(recipeData)
    })
    console.log(recipeData);
    try {
    const data = await response.json();
    console.log(data);
    } catch (error) {
      console.log(error);
    }
    
  }