import React from 'react'

const Search = ({ searchTerm, setSearchTerm }) => {
  
  return (
    <div className='search'>
      <div>
        <img src="search.svg" alt="Search Icon" />
        <input
          type="text"
          placeHolder="Search for movies"
          valıe={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  )
}

export default Search
