import { BACKEND_URL, token } from "../utils/backend_services";

export const createRecipe = async( newRecipe ) => {
  const response = await fetch(`${BACKEND_URL}/personal_recipes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify( newRecipe )
  });
  const data = await response.json();
  if (response.ok) {
    console.log(data);
    return data;
  } else {
    throw new Error("Error creating recipe");
  }
}; // End of createRecipe function
