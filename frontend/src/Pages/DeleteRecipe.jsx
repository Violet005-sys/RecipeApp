import { useEffect } from 'react'
import { deleteRecipe } from '../APIs/deleteRecipeAPI'
import { useParams } from 'react-router-dom'


// eslint-disable-next-line react/prop-types
const DeleteRecipe = ({ title }) => {
    const { id } = useParams();



    const assure = ( ) => {
        const response = prompt(`Are you sure you want to delete ${title}?(Yes/No)`);
        if (response == 'no'){
            window.location.href = "/";
        } 
    }

    useEffect(() => {
        deleteRecipe(id);
        alert('Recipe deleted')
    }, [id]);
    

  return (
    <div>
        {assure()}
    </div>
  )
}

export default DeleteRecipe