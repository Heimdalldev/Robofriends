import React from 'react';


const SearchBox = ({ searchfield, searchChange }) => {
	return (
		<div className="">
			<input 
				className="mb4 pa3 ba b--green bg-lightest-blue"
				type="search" 
				placeholder="search robots" 
				onChange={searchChange}
			/>
		</div>
	);
}


export default SearchBox;