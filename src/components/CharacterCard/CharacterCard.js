import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './CharacterCard.module.scss';
const CharacterCard = ({ character, setActiveSpecies, setActiveStatus }) => {
	const { id, name, image, status, species, gender } = character;

	const imageSrc = useMemo(() => {
		const img = new Image();
		img.src = image;
		return image;
	}, [image]);

	return (
		<div className={styles.card}>
			<Link
				to={`/characters/${id}`}
				className={styles.characterCard}
			>
				<img
					className={styles.image}
					src={imageSrc}
					alt={name}
					loading='lazy'
				/>
			</Link>
			<div className={styles.details}>
				<Link
					to={`/characters/${id}`}
					className={styles.characterCard}
				>
					<h3 className={styles.name}>{name}</h3>
				</Link>
				<div className={styles.params}>
					<p
						className={styles.param}
						onClick={() => setActiveSpecies(species)}
					>
						{species}
					</p>
					<p
						className={styles.param}
						onClick={() => setActiveStatus(status)}
					>
						{status}
					</p>
					<p>{gender}</p>
				</div>
			</div>
		</div>
	);
};

CharacterCard.propTypes = {
	character: PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		image: PropTypes.string.isRequired,
		status: PropTypes.string.isRequired,
	}).isRequired,
};

export default CharacterCard;
