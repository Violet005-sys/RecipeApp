import { useEffect } from "react";
import { deleteRecipe } from "../APIs/deleteRecipeAPI";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const DeleteRecipe = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const prompt = window.confirm(`Are you sure you want to delete?`);

    if (!prompt) {
      return; // If the user cancels the deletion, don't do anything
    }
    deleteRecipe(id);
    alert("Recipe deleted");
    navigate("/"); // Redirect to home page after deleting the recipe
  }, [id, prompt]);

  return <div></div>;
};

export default DeleteRecipe;
