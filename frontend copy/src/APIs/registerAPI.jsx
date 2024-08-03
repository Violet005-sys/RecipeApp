import { BACKEND_URL } from "../utils/backend_services";

export const register = async({name, email, password}) => {
    const response = await fetch(`${BACKEND_URL}/auth/register`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name, email, password})
    });
    const data = await response.json();
    if(response.ok){
        console.log(data);
        alert(`Welcome ${name}! You have successfully registered!`)
        //window.location.reload();
    } else {
        console.log(data.error);
        alert(`An error occurred during registration.Please try again in a few minutes`)
    }
}