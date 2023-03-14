import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Search from '../../components/Search/Search';
import styles from './Home.module.scss';
import Category from '../../components/Category/Category';
import apiClient from '../../api/apiClientBase';
import CharacterCard from '../../components/CharacterCard/CharacterCard';
import Pagination from '../../components/Pagination/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage, setTotalCount } from '../../store';

const Home = () => {
	const [state, setState] = useState({
		characters: [],
		searchTerm: '',
		speciesCategories: [],
		activeSpeciesCategory: '',
		statusCategories: [],
		activeStatusCategory: '',
	});
	const dispatch = useDispatch();
	const currentPage = useSelector(state => state.pagination.currentPage);
	const totalCount = useSelector(state => state.pagination.totalCount);

	useEffect(() => {
		const fetchCharacters = async () => {
			try {
				const url = `https://rickandmortyapi.com/api/character/?page=${currentPage}`;
				const response = await apiClient.get(url);
				const characters = response.data.results;
				const count = response.data.info.pages;
				const speciesCategories = [
					'All',
					...new Set(characters.map(character => character.species)),
				];
				const statusCategories = [
					'All',
					...new Set(characters.map(character => character.status)),
				];
				setState(prevState => ({
					...prevState,
					characters,
					speciesCategories,
					activeSpeciesCategory: 'All',
					statusCategories,
					activeStatusCategory: 'All',
				}));
				dispatch(setTotalCount(count));
			} catch (error) {
				console.log(error);
			}
		};
		fetchCharacters();
	}, [currentPage, dispatch]);

	const handleSearch = useCallback(term => {
		setState(prevState => ({ ...prevState, searchTerm: term }));
	}, []);

	const handleSetActiveCategory = useCallback((categoryName, categoryType) => {
		setState(prevState => ({
			...prevState,
			[categoryType]: categoryName,
		}));
	}, []);

	const {
		characters,
		searchTerm,
		speciesCategories,
		activeSpeciesCategory,
		statusCategories,
		activeStatusCategory,
	} = state;

	const filteredCharacters = useMemo(
		() =>
			characters.filter(
				({ name, species, status }) =>
					name.toLowerCase().includes(searchTerm.toLowerCase()) &&
					(activeSpeciesCategory === 'All' ||
						activeSpeciesCategory === species) &&
					(activeStatusCategory === 'All' || activeStatusCategory === status),
			),
		[characters, searchTerm, activeSpeciesCategory, activeStatusCategory],
	);

	const handlePaginate = useCallback(
		pageNumber => {
			dispatch(setCurrentPage(pageNumber));
		},
		[dispatch],
	);

	return (
		<div className={styles.home}>
			<Search onSearch={handleSearch} />
			<div className={styles.content}>
				<div className={styles.items}>
					<Category
						name={'Вид'}
						categories={speciesCategories}
						activeCategory={activeSpeciesCategory}
						setActiveCategory={name =>
							handleSetActiveCategory(name, 'activeSpeciesCategory')
						}
					/>
					<Category
						name={'Статус'}
						categories={statusCategories}
						activeCategory={activeStatusCategory}
						setActiveCategory={name =>
							handleSetActiveCategory(name, 'activeStatusCategory')
						}
					/>
				</div>
				{filteredCharacters.length > 0 ? (
					<div className={styles.characters}>
						{filteredCharacters.map(character => (
							<CharacterCard
								key={character.id}
								character={character}
								setActiveSpecies={name =>
									handleSetActiveCategory(name, 'activeSpeciesCategory')
								}
								setActiveStatus={name =>
									handleSetActiveCategory(name, 'activeStatusCategory')
								}
							/>
						))}
					</div>
				) : (
					<p className={styles.noResults}>Ничего не найдено.</p>
				)}
			</div>
			<Pagination
				totalItems={totalCount}
				paginate={handlePaginate}
				currentPage={currentPage}
			/>
		</div>
	);
};

export default Home;
