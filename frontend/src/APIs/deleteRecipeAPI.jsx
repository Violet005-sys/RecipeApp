
import { BACKEND_URL,token } from "../utils/backend_services"


export const deleteRecipe = async(id) => {
   

    const response = await fetch(`${BACKEND_URL}/personal_recipe/${id}`,{
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }} )

        const data = await response.json()
        console.log(data);
}