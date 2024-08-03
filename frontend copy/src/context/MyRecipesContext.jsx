// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, createContext } from 'react'

import { BACKEND_URL } from '../utils/backend_services';

export const MyRecipesContext = createContext();

export const MyRecipesProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const getRecipes = async() => {
    const response = await fetch(`${BACKEND_URL}/recipes`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
        setRecipes(data);
    }
    getRecipes();
  }, [])
  return <MyRecipesContext.Provider value={{ recipes, setRecipes }}>
    {children}
  </MyRecipesContext.Provider>
}

export default MyRecipesContext