import React from 'react';

const Card = ({ name, email, id }) => {
		return (
		<div className="bg-dark-purple dib br3 pa3 ma2 grow bw2 shadow6">
		<img alt="robots" src={`https://robohash.org/${id}?200x200`} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
		);
}


export default Card; 

