import React, { useEffect, useMemo } from 'react';
import styles from './Pagination.module.scss';

const Pagination = ({ totalItems, currentPage, paginate }) => {
	const pageNumbers = useMemo(() => {
		const delta = 2;
		const totalPages = Math.ceil(totalItems);
		const left = currentPage - delta;
		const right = currentPage + delta + 1;
		const range = [];
		const pages = [];

		for (let i = 1; i <= totalPages; i++) {
			if (i === 1 || i === totalPages || (i >= left && i < right)) {
				range.push(i);
			}
		}

		range.forEach((number, index) => {
			if (index !== 0 && number !== range[index - 1] + 1) {
				pages.push('...');
			}
			pages.push(number);
		});

		return pages;
	}, [totalItems, currentPage]);

	const handlePaginate = pageNumber => {
		paginate(pageNumber);
	};

	if (totalItems <= 1) {
		return null;
	}

	return (
		<div className={styles.pagination}>
			<div
				className={`${styles.pageNumber} ${styles.prev}`}
				onClick={() => handlePaginate(currentPage - 1)}
				disabled={currentPage === 1}
			>
				Назад
			</div>
			{pageNumbers.map((number, index) => (
				<div
					key={index}
					className={`${styles.pageNumber} ${
						number === currentPage ? styles.active : ''
					}`}
					onClick={() => {
						if (number !== '...') {
							handlePaginate(number);
						}
					}}
				>
					{number}
				</div>
			))}
			<div
				className={`${styles.pageNumber} ${styles.next}`}
				onClick={() => handlePaginate(currentPage + 1)}
				disabled={currentPage === totalItems}
			>
				Вперёд
			</div>
		</div>
	);
};

export default Pagination;
