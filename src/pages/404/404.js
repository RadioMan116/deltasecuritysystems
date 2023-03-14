import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<div>
			<h1>404 - Страница не найдена</h1>
			<p>Извините, мы не можем найти страницу, которую вы ищете.</p>
			<Link to='/'>На главную</Link>
		</div>
	);
};

export default NotFound;
