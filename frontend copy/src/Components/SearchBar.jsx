// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import {MyRecipesContext} from "../context/MyRecipesContext";
import { BACKEND_URL } from "../utils/backend_services";

const SearchBar = () => {
  const [title, setTitle] = useState(null);
  const { setRecipes } = React.useContext(MyRecipesContext);

  const handleSearch = async (e) => {
    e.preventDefault();
    console.log(title);

    if(title){
        const response = await fetch(`${BACKEND_URL}/recipes?title=${title}`)
        const data = await response.json();
        console.log(data);
        setRecipes(data);
    }
  };
  return (
    <div className="row m-4">
      <div className="col-lg-6 offset-lg-3">
        <form className="form-inline" onSubmit={handleSearch}>
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search recipes..."
            aria-label="Search"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input type="submit" hidden />
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
