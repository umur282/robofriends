import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
	if (true) {
		throw new Error('NOOOOOOOO');
	}
	return (
		<div>
			{
				robots.map((user, i) => {
			// With loops you have give a unique key. key={ }
					return (
						<Card
							key={i}
							id={robots[i].id}
							name={robots[i].name}
							email={robots[i].email}
						/>
					);
				})			}
  	</div>
	);
}

export default CardList;