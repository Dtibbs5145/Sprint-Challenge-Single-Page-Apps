import React, { useState } from "react";

export default function SearchForm() {
  const [search, setSearch] = useState({});
  return (
    <div className="search-form">
      const handleChanges = e => {
        console.log(search);
        setSearch({ ...search, [e.target.name]: e.target.value });
      }
    
      const submitForm = e => {
        e.preventDefault();
        props.newSearch(search);
        setSearch({ search: '' });
      }
    
      return (
        <form onSubmit={submitForm}>
          <label htmlFor='search'>Search</label>
          <input type='text' name='search' onChange={handleChanges} />
          <button type='submit'>Search</button>
        </form>
      )
     
    </div>
  )
}
