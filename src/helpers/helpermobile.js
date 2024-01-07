import { filterProducts, filtermobileram } from './helper';
import { filtermobile } from './helper';

const MAinfiltermobile = () => {
	const filtermobilval = filtermobile();

	const Xiaomi = filterProducts('شیائومی', 'گوشی');
	const Gplus = filterProducts('جی پلاس', 'گوشی');
	const Apple = filterProducts('اپل', 'گوشی');
	const SamSung = filterProducts('سامسونگ', 'گوشی');
	const nokia = filterProducts('نوکیا', 'گوشی');

	const ram4 = filtermobileram(filtermobilval, 4);
	const ram6 = filtermobileram(filtermobilval, 6);
	const ram8 = filtermobileram(filtermobilval, 8);
	const ram12 = filtermobileram(filtermobilval, 12);

	return { Xiaomi, Gplus, Apple, SamSung, nokia, ram4, ram6, ram8, ram12 };
};

const valuesectionfilterbobile = [
	{ title: 'Brand', value: ['Xiaomi', 'Gplus', 'Apple', 'SamSung', 'nokia'], id: 1 },
	{ title: 'ram', value: ['ram4', 'ram6', 'ram8', 'ram12'], id: 2 },
];

export { filtermobileram, MAinfiltermobile, valuesectionfilterbobile };
