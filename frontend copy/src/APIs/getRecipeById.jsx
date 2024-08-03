import { BACKEND_URL } from "../utils/backend_services";

export const getRecipe = async(id) => {
    const response = await fetch(`${BACKEND_URL}/recipes/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    console.log(id);
    if(response.ok){
        const data = await response.json();
        return data;
    }else{
        throw new Error('Error getting recipe');
    }
}