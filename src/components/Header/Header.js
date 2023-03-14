import React from 'react';
import logo from './../../images/logo.svg';
import background from './../../images/logo_background.svg';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<Link to='/'>
					<img
						className={styles.logo}
						src={logo}
						alt='Rick and Morty'
					/>
				</Link>
				<h1 className={styles.title}>Rick and Morty</h1>
			</div>
			<img
				className={styles.background}
				src={background}
				alt='Rick and Morty background'
			/>
		</header>
	);
};

export default Header;
