import { useRoutes } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MainRoutes from '../routes/MainRoutes';
import { useState } from 'react';

function Layout() {
	const route = useRoutes(MainRoutes);
	const [IsSlice, setIsSlice] = useState(false);

	return (
		<div className='bg-white dark:bg-gray-800 '>
			<div className="font-Iran   relative">
				<Header setIsSlice={setIsSlice} IsSlice={IsSlice} />
				{route}
				<Footer />
			</div>
			{/* blur */}
			{IsSlice && (
				<div
					onClick={() => setIsSlice(false)}
					className="h-[200vh] w-full fixed backdrop-blur-sm  z-30 top-0 "
				></div>
			)}
		</div>
	);
}

export default Layout;
