import React from 'react';
import PropTypes from 'prop-types';
import styles from './Category.module.scss';

const Category = ({ name, categories, activeCategory, setActiveCategory }) => {
	return (
		<div className={styles.category}>
			<p className={styles.title}>{name}:</p>
			<ul className={styles.list}>
				{categories.map(category => (
					<li
						key={category}
						className={activeCategory === category ? styles.active : ''}
						onClick={() => setActiveCategory(category)}
					>
						{category}
					</li>
				))}
			</ul>
		</div>
	);
};

Category.propTypes = {
	categories: PropTypes.arrayOf(PropTypes.string).isRequired,
	activeCategory: PropTypes.string.isRequired,
	setActiveCategory: PropTypes.func.isRequired,
};

export default Category;
