import React from 'react';

const SearchBox = ({searchChange}) => {
    return (
        <div className='pa2'>
            <input className='pa3 ba b--yellow bg-washed-yellow' type='search' 
            placeholder='search kats' 
            onChange={searchChange}
            />
        </div>
        
    )
}

export default SearchBox