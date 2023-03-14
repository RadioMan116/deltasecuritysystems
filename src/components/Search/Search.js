import React from 'react';
import styles from './Search.module.scss';

const Search = ({ onSearch }) => {
	const handleChange = event => {
		onSearch(event.target.value);
	};

	return (
		<div className={styles.search}>
			<input
				type='text'
				placeholder='Search characters by name'
				onChange={handleChange}
				className={styles.input}
			/>
		</div>
	);
};

export default Search;
