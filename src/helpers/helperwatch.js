import { filterProducts } from './helper';

const MAinfilterwatch = () => {
	const Xiaomi = filterProducts('شیائومی', 'ساعت');
	const ultra = filterProducts('اولترا', 'ساعت');
	const Apple = filterProducts('اپل', 'ساعت');
	const hainoteko = filterProducts('هاینوتکو', 'ساعت');
	const Huawei = filterProducts('هوآوی', 'ساعت');

	return { Xiaomi, ultra, Apple, hainoteko, Huawei };
};

const valuesectionfilterwatch = [
	{ title: 'Brand', value: ['Xiaomi', 'ultra', 'Apple', 'hainoteko', 'Huawei'], id: 1 },
];

export { MAinfilterwatch, valuesectionfilterwatch };
