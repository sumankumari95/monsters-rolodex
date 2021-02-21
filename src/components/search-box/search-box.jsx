import React from 'react';
import './search-box.css'

export const SearchBox = ({placeholder, handleChangeEvent}) => {
  return(
    <input className="search"
          type="search"
          placeholder={placeholder}
          onChange={handleChangeEvent}
        />
  )
  
}
