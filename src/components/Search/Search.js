import React from 'react';
import styles from './Search.module.scss';

const Search = () => {
	return (
		<div className={styles.search}>
			<input
				type='text'
				className={styles.input}
			/>
		</div>
	);
};

export default Search;
