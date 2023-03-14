import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import apiClient from '../../api/apiClientBase';

const CharacterDetail = () => {
	const [character, setCharacter] = useState(null);
	const navigate = useNavigate();
	const { id } = useParams();

	useEffect(() => {
		apiClient
			.get(`https://rickandmortyapi.com/api/character/${id}`)
			.then(response => {
				setCharacter(response.data);
			})
			.catch(error => {
				navigate('/404');
			});
	}, [id, navigate]);

	if (!character) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<h1>{character.name}</h1>
			<img
				src={character.image}
				alt={character.name}
			/>
			<p>Status: {character.status}</p>
			<p>Gender: {character.gender}</p>
			<p>Location: {character.location.name}</p>
			<p>Origin: {character.origin.name}</p>
			<p>Species: {character.species}</p>
			<button onClick={() => navigate(-1)}>Back</button>
		</div>
	);
};

export default CharacterDetail;
