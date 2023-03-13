import React, { useEffect, useState } from 'react';
import Search from '../../components/Search/Search';
import styles from './Home.module.scss';
import Category from '../../components/Category/Category';
import apiClient from '../../api/apiClientBase';
import CharacterCard from '../../components/CharacterCard/CharacterCard';

const Home = () => {
	const [
		{
			characters,
			searchTerm,
			speciesCategories,
			activeSpeciesCategory,
			statusCategories,
			activeStatusCategory,
		},
		setState,
	] = useState({
		characters: [],
		searchTerm: '',
		speciesCategories: [],
		activeSpeciesCategory: '',
		statusCategories: [],
		activeStatusCategory: '',
	});

	useEffect(() => {
		apiClient
			.get('https://rickandmortyapi.com/api/character')
			.then(response => {
				setState(prevState => ({
					...prevState,
					characters: response.data.results,
					speciesCategories: [
						'All',
						...new Set(
							response.data.results.map(character => character.species),
						),
					],
					activeSpeciesCategory: 'All',
					statusCategories: [
						'All',
						...new Set(
							response.data.results.map(character => character.status),
						),
					],
					activeStatusCategory: 'All',
				}));
			})
			.catch(error => console.log(error));
	}, []);

	const filteredCharacters = characters.filter(
		({ name, species, status }) =>
			name.toLowerCase().includes(searchTerm.toLowerCase()) &&
			(activeSpeciesCategory === 'All' || activeSpeciesCategory === species) &&
			(activeStatusCategory === 'All' || activeStatusCategory === status),
	);

	const handleParamClick = param => {
		setState(prevState => ({
			...prevState,
			characters: characters.filter(
				character => character[param] === prevState[param],
			),
		}));
	};

	const handleSetActiveSpeciesCategory = categoryName => {
		setState(prevState => ({
			...prevState,
			activeSpeciesCategory: categoryName,
		}));
	};

	const handleSetActiveStatusCategory = categoryName => {
		setState(prevState => ({
			...prevState,
			activeStatusCategory: categoryName,
		}));
	};

	return (
		<div className={styles.home}>
			<Search
				setSearchTerm={term =>
					setState(prevState => ({ ...prevState, searchTerm: term }))
				}
			/>
			<div className={styles.content}>
				<div className={styles.items}>
					<Category
						name={'Вид'}
						categories={speciesCategories}
						activeCategory={activeSpeciesCategory}
						setActiveCategory={handleSetActiveSpeciesCategory}
					/>
					<Category
						name={'Статус'}
						categories={statusCategories}
						activeCategory={activeStatusCategory}
						setActiveCategory={handleSetActiveStatusCategory}
					/>
				</div>
				{filteredCharacters.length > 0 ? (
					<div className={styles.characters}>
						{filteredCharacters.map(character => (
							<CharacterCard
								key={character.id}
								character={character}
								onParamClick={handleParamClick}
							/>
						))}
					</div>
				) : (
					<p className={styles.noResults}>No results found.</p>
				)}
			</div>
		</div>
	);
};

export default Home;
