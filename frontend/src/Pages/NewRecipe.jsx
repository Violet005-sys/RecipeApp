import Form from "../Components/Form"
import { createRecipe } from "../APIs/postRecipeAPI";

const NewRecipe = () => {
  let value1;
  let value2;
  let value3;

  const id1 = `title`;
  const id2 = `ingredient`;
  const id3 = `image`

  const buttontext = `Create Recipe`;

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const newRecipe = {
        title: value1,
        ingredients: value2,
        image: value3
      }
      await createRecipe(newRecipe);
      alert('Recipe created successfully!')
      
    } catch (error) {
      console.error(error);
      
    }
  }

  return (
    <div>
      {<Form id1={id1} id2={id2} id3={id3} value1={value1} value2={value2} value3={value3} buttontext={buttontext} handleSubmit={handleSubmit}/>}
    </div>
  )
}

export default NewRecipe