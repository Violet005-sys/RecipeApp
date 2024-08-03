import {useEffect, useState} from 'react'
import { updateRecipe } from '../APIs/editRecipe';
import { getRecipe } from '../APIs/getRecipeById';
import { useParams } from 'react-router-dom';

const EditRecipe = () => {

  const { id } = useParams(); 
  
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [image, setImage] = useState('');


  const heading = 'Edit Recipe'; 
  const buttontext = 'Edit Recipe';

  useEffect(() => {
    const getRecipeData = async (id) => {
      try {
        const response = await getRecipe(id);
        setTitle(response.title);
        setIngredients(response.ingredients);
        setImage(response.image);
      } catch (error) {
        console.log(error);
      }
    }
    getRecipeData(id);
  },[])

  const newRecipe = {
    title,
    ingredients,
    image
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      await updateRecipe(newRecipe, id);
      console.log(newRecipe);
      alert('Recipe updated successfully!')
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="row">
      <div className="col-4"></div>
      <div className="col-4">

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
      <div className="col-4"></div>
      
      
    </div>
  )
}

export default EditRecipe