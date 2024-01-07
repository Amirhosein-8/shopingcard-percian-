import { filterProducts, filterlaptop, filtermobileram } from './helper';


const MAinfilterlaptop = () => {
	const filterlaptoplap = filterlaptop();

	const lenovo = filterProducts('لنوو', 'لپ تاپ');
	const Asus = filterProducts(' ایسوس', 'لپ تاپ');
	const Apple = filterProducts('اپل', 'لپ تاپ');
	const Surface = filterProducts('مایکروسافت', 'لپ تاپ');
	const HP = filterProducts('اچ پی', 'لپ تاپ');

	const ram4 = filtermobileram(filterlaptoplap, 4);
	const ram6 = filtermobileram(filterlaptoplap, 6);
	const ram8 = filtermobileram(filterlaptoplap, 8);
	const ram12 = filtermobileram(filterlaptoplap, 12);
	const ram16 = filtermobileram(filterlaptoplap, 16);

	const _256 = filtermobileram(filterlaptoplap, 256);
	const _512 = filtermobileram(filterlaptoplap, 512);



	return {
		lenovo,
		Asus,
		Apple,
		Surface,
		HP,
		ram4,
		ram6,
		ram8,
		ram12,
		ram16,
		_256,
		_512,
	};
};

const valuesectionfilterlaptop = [
	{ title: 'Brand', value: ['lenovo', 'Asus', 'Apple', 'Surface', 'HP'], id: 1 },
	{ title: 'ram', value: ['ram4', 'ram6', 'ram8', 'ram12', 'ram16'], id: 2 },
	{ title: 'storage', value: ['_256', '_512'], id: 3 },
];

export { filtermobileram, MAinfilterlaptop, valuesectionfilterlaptop };
