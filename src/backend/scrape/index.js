var fs = require('fs');
const cheerio = require('cheerio');

const $ = cheerio.load(fs.readFileSync('src/backend/scrape/ssense_men.html','utf8'));


const productGrid = $('#wrap > div > div > div.s-column.plp-products-column__wrapper > div.plp-products__row > div.plp-products__column')

products = []
productGrid.each((index, element) => {
	const brand = $(element).find('div.plp-products__product-tile > div > a > div.product-tile__description > div:nth-child(1) > span').text();
	
	const productName = $(element).find('div.plp-products__product-tile > div > a > div.product-tile__description > div:nth-child(2) > span').text();
	
	const firstPriceSaleOrRegular = $(element).find('div.plp-products__product-tile > div > a > div.product-tile__description > div:nth-child(3) > span:nth-child(1)').text();
	const secondPriceRegular = $(element).find('div.plp-products__product-tile > div > a > div.product-tile__description > div:nth-child(3) > span:nth-child(2)').text()

	const price = secondPriceRegular === '' ? firstPriceSaleOrRegular : secondPriceRegular;
	
	const fullImageUrl = $(element).find('div.plp-products__product-tile > div > a > picture').find('img').data('srcset')
	let imageUrl = fullImageUrl.split("/")
	imageUrl = '/' + imageUrl[imageUrl.length - 2] + '/' + imageUrl[imageUrl.length - 1]
	
	products.push({'brand': brand.trim(), 'productName': productName.trim(), 'price': price.trim(), 'imageUrl': imageUrl});
})

console.log(products)
