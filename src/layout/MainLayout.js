import { Outlet } from 'react-router-dom';
import styles from './MainLayout.module.scss';
import Header from '../components/Header/Header';

export default function MainLayout({ children }) {
	return (
		<div>
			<Header />
			<main className={styles.main}>
				<Outlet />
			</main>
		</div>
	);
}
