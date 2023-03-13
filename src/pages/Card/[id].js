import React from 'react';
import { useParams } from 'react-router-dom';

const CharacterDetail = () => {
	const { id } = useParams();

	return (
		<div>
			<h1>Character Detail Page for ID: {id}</h1>
			{/* Разметка для более подробной информации о персонаже */}
		</div>
	);
};

export default CharacterDetail;
