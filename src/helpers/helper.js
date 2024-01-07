import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchdata } from '../redux/fetures/Fetch/FetchSlice';

const MainProductsget = () => {
	const dispath = useDispatch();
	const Products = useSelector((state) => state.Products.data.result);

	useEffect(() => {
		dispath(fetchdata());
	}, []);

	return Products;
};

const slicetitle = (title) => {
	const splittitle = title?.split(' ');
	const slicesplit = splittitle?.slice(0, 4).join(' ');
	return slicesplit;
};

export default slicetitle;

const filtermobile = () => {
	const result = MainProductsget();
	const filtermob = result?.filter((product) => product.name1.includes('گوشی'));
	return filtermob;
};

const filterlaptop = () => {
	const filtermob = MainProductsget()?.filter((product) =>
		product.name1.includes('لپ تاپ'),
	);
	return filtermob;
};

const filtertablet = () => {
	const filtermob = MainProductsget()?.filter((product) =>
		product.name1.includes('تبلت'),
	);
	return filtermob;
};

const filterwatch = () => {
	const filtermob = MainProductsget()?.filter((product) =>
		product.name1.includes('ساعت'),
	);
	return filtermob;
};

const filterhedphon = () => {
	const filtermob = MainProductsget()?.filter((product) =>
		product.name1.includes('هدفون'),
	);
	return filtermob;
};

const FindQuntity = (ShopProducts, mobile) => {
	const findIndexquantity = ShopProducts?.findIndex(
		(product) => product.random_key === mobile.random_key,
	);

	const quantity = ShopProducts[findIndexquantity]?.quantity
		? ShopProducts[findIndexquantity].quantity
		: 0;

	return quantity;
};

const updaitetotal = (products) => {
	const total = products.reduce((prev, next) => prev + next.quantity * next.price, 0);
	return total;
};

const updaitecourenitems = (products) => {
	const courenitems = products.reduce((prev, next) => prev + next.quantity, 0);
	return courenitems;
};

const flexitems = () => {
	const innerWidthval = innerWidth;
	const slidesPerViewhandal =
		innerWidthval < 1900 && innerWidthval > 1200
			? 5
			: innerWidthval < 1200 && innerWidthval > 992
			? 4
			: innerWidthval < 992 && innerWidthval > 740
			? 3
			: innerWidthval < 750 && innerWidthval > 0
			? 2
			: '';
	return slidesPerViewhandal;
};


const filterProducts = (one, two) => {
	const ProductsFilter = MainProductsget()?.filter(
		(product) => product.name1.includes(one) && product.name1.includes(two),
	);
	return ProductsFilter;
};

const filtermobileram = (products, value) => {
	const filter = products?.filter((product) => product.name2.includes(value));
	return filter;
};

export {
	filterhedphon,
	filtermobile,
	filterlaptop,
	filtertablet,
	FindQuntity,
	updaitetotal,
	updaitecourenitems,
	flexitems,
	filterProducts,
	MainProductsget,
	filtermobileram,
	filterwatch,
};
