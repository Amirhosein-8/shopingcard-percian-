import { FaMobileAlt } from 'react-icons/fa';
import { FaTabletScreenButton } from 'react-icons/fa6';
import { FaLaptopCode } from 'react-icons/fa6';
import { IoWatchOutline } from 'react-icons/io5';
import { FaHeadphones } from 'react-icons/fa';
import { IoHome } from 'react-icons/io5';

const CategoryFirst = [
	{ icon: <IoHome />, title: 'خانه', path: 'home', id: 1 },
	{ icon: <FaMobileAlt />, title: 'موبایل', path: 'mobile', id: 2 },
	{ icon: <FaTabletScreenButton />, title: 'تبلت', path: 'tablet', id: 3 },
	{ icon: <FaLaptopCode />, title: 'لپ تاپ', path: 'laptop', id: 4 },
	{ icon: <IoWatchOutline />, title: 'ساعت هوشمند', path: 'watch', id: 5 },
	{ icon: <FaHeadphones />, title: 'هدفون', path: 'hedphon', id: 6 },
];

export default CategoryFirst;
