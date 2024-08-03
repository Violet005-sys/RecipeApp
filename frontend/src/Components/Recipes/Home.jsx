// eslint-disable-next-line no-unused-vars
import React, { useContext,useState } from "react";
import MyRecipesContext from "../../context/MyRecipesContext";
import SearchBar from "../SearchBar";
import { Link } from "react-router-dom";


const Home = () => {
  const { recipes } = useContext(MyRecipesContext);
  console.log(recipes);
  
    // Helper function to convert a string to title case
  const toTitleCase = (str) => {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  // Function to transform array elements to title case and join them with commas
  const commaAdd = (array) => {
    return array.map(toTitleCase).join(", ");
  };

 
  return (
    <div className="container-fluid mt-4">
      <img src="public\images\recipes.png" alt="herosection" className='img-fluid'/>
      <SearchBar />
      {/**/}
      
      
      <div className="row">
        {recipes.map((recipe) => {
          return (
            <>
            
            <div className="col-lg-3 " key={recipe._id}>
            <Link to={`recipe/${recipe._id}`} style={{textDecoration: 'none', color: 'black'}} >
              <div className="card" >
                <img
                  src={recipe.image}
                  className="card-img-top img-fluid"
                  alt="Recipe Image"
                  style={{maxHeight: '50vh'}}
                />
                <div className="card-body">
                  <h5 className="card-title">{recipe.title}</h5>
                  <p className="card-text">{commaAdd(recipe.ingredients)}</p>
                  
                </div>
              </div>
              </Link>
            </div>
            </>
          );
        })}
        
      </div>
    </div>
  );
};

export default Home;
