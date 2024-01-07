import { filterProducts, filtermobileram, filtertablet } from './helper';


const MAinfiltertablat = () => {
	const filtertbaletval = filtertablet();

	const Xiaomi = filterProducts('شیائومی', 'تبلت');
	const Surface = filterProducts('مایکروسافت ', 'تبلت');
	const Apple = filterProducts('اپل', 'تبلت');
	const SamSung = filterProducts('سامسونگ', 'تبلت');
	const lenovo = filterProducts('لنوو', 'تبلت');
	const HP = filterProducts('اچ‌پی', 'تبلت');

	const ram4 = filtermobileram(filtertbaletval, 4);
	const ram6 = filtermobileram(filtertbaletval, 6);
	const ram8 = filtermobileram(filtertbaletval, 8);
    const ram12 = filtermobileram(filtertbaletval, 12);

	return { Xiaomi, Surface, Apple, SamSung, HP, lenovo, ram4, ram6, ram8, ram12 };
};

const valuesectionfiltertablet = [
	{
		title: 'Brand',
		value: ['Xiaomi', 'Surface', 'Apple', 'SamSung', 'HP', 'lenovo'],
		id: 1,
	},
	{ title: 'ram', value: ['ram4', 'ram6', 'ram8', 'ram12'], id: 2 },
];

export { filtermobileram, MAinfiltertablat, valuesectionfiltertablet };
