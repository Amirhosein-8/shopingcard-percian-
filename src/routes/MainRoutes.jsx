import { Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Mobile from '../pages/Mobile';
import LapTop from '../pages/LapTop';
import Hedphon from '../pages/Hedphon';
import Watch from '../pages/Watch';
import Tablet from '../pages/Tablet';
import Basketshop from '../pages/basketshop';

const MainRoutes = [
	{ path: '/', element: <Navigate to="/home" /> },
	{ path: '/home', element: <Home /> },
	{ path: '/mobile', element: <Mobile /> },
	{ path: '/laptop', element: <LapTop /> },
	{ path: '/hedphon', element: <Hedphon /> },
	{ path: '/watch', element: <Watch /> },
	{ path: '/tablet', element: <Tablet /> },
	{ path: '/basketshop', element: <Basketshop /> },
];

export default MainRoutes;
