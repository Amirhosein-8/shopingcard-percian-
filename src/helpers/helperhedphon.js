import { filterProducts, filtermobileram } from './helper';


const MAinfilterhedphon = () => {
	const Xiaomi = filterProducts('شیائومی', 'هدفون');
	const unker = filterProducts('انکر', 'هدفون');
	const Apple = filterProducts('اپل', 'هدفون');
	const SamSung = filterProducts('سامسونگ', 'هدفون');
	const hailo = filterProducts('هایلو', 'هدفون');

	return { Xiaomi, Apple, SamSung, unker, hailo };
};

const valuesectionfilterhedphon = [
	{ title: 'Brand', value: ['Xiaomi', 'unker', 'Apple', 'SamSung', 'hailo'], id: 1 },
];

export { filtermobileram, MAinfilterhedphon, valuesectionfilterhedphon };
