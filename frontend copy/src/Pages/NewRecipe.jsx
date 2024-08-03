import React from "react";
import { createRecipe } from '../APIs/postRecipeAPI';

const NewRecipe = () => {
  const [title, setTitle] = React.useState(``);
    const [ingredients, setIngredients] = React.useState(``);
    const [image, setImage] = React.useState(``);


  const heading = 'New Recipe';

  const buttontext = `Create Recipe`;


  const newRecipe = {
    title: title,
    ingredients: ingredients,
    image: image
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      
      await createRecipe( newRecipe );
      console.log(newRecipe);
      alert('Recipe created successfully!')
      
    } catch (error) {
      console.log(error);
      
    }
  }

  return (
    <div className="row">
      <div className="col-3"></div>
      <div className="col-6">

      <div>
      <h1 className="display-1 my-5">{heading}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control my-2"
          placeholder='Recipe title'
          id={title}
          name={title}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          className="form-control my-2"
          placeholder='Recipe ingredients'
          id={ingredients}
          name={ingredients}
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
        <input
          type="text"
          className="form-control my-2"
          placeholder='Recipe image'
          id={image}
          name={image}
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <div className="text-center">
          <button type="submit" className="btn btn-primary my-4">
            {buttontext}
          </button>
        </div>
      </form>
    </div>
      </div>
      <div className="col-3"></div>
      
      
    </div>
  )
}

export default NewRecipe