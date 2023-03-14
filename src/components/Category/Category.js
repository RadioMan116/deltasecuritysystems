import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Category.module.scss';

const Category = ({ name, categories, activeCategory, setActiveCategory }) => {
	const [isCollapsed, setIsCollapsed] = useState(false);
	const handleCollapseToggle = () => {
		setIsCollapsed(prevIsCollapsed => !prevIsCollapsed);
	};
	return (
		<div className={`${styles.category} ${isCollapsed ? styles.active : ''}`}>
			<p
				className={styles.title}
				onClick={handleCollapseToggle}
			>
				{name} :
			</p>
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
