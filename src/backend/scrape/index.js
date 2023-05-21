const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

const getProducts = ($) => {
  const productGrid = $(
    "#wrap > div > div > div.s-column.plp-products-column__wrapper > div.plp-products__row > div.plp-products__column"
  );

  products = [];
  productGrid.each((index, element) => {
    const brand = $(element)
      .find(
        "div.plp-products__product-tile > div > a > div.product-tile__description > div:nth-child(1) > span"
      )
      .text();

    const productName = $(element)
      .find(
        "div.plp-products__product-tile > div > a > div.product-tile__description > div:nth-child(2) > span"
      )
      .text();

    const firstPriceSaleOrRegular = $(element)
      .find(
        "div.plp-products__product-tile > div > a > div.product-tile__description > div:nth-child(3) > span:nth-child(1)"
      )
      .text();
    const secondPriceRegular = $(element)
      .find(
        "div.plp-products__product-tile > div > a > div.product-tile__description > div:nth-child(3) > span:nth-child(2)"
      )
      .text();

    const price =
      secondPriceRegular === "" ? firstPriceSaleOrRegular : secondPriceRegular;

    const fullImageUrl = $(element)
      .find("div.plp-products__product-tile > div > a > picture")
      .find("img")
      .data("srcset");
    let imageUrl = fullImageUrl.split("/");
    imageUrl =
      "/" + imageUrl[imageUrl.length - 2] + "/" + imageUrl[imageUrl.length - 1];

    const productUrl = $(element)
      .find("div.plp-products__product-tile > div > a")
      .attr("href");

    products.push({
      brand: brand.trim(),
      productName: productName.trim(),
      price: price.trim(),
      imageUrl: imageUrl,
      productUrl: productUrl,
    });
  });

  writeToFile(products);
};

function writeToFile(newProducts) {
  fs.readFile("womens.json", "utf8", (error, data) => {
    if (error) {
      console.log(error);
      return;
    }

    let prevData = JSON.parse(data);
    prevData.push(newProducts);

    fs.writeFile("womens.json", JSON.stringify(prevData), function (error) {
      if (error) {
        console.log(error);
        return;
      }
    });
  });
}

const base_url = "https://www.ssense.com/en-ca/men?page=";

let config = {
  method: "get",
  maxBodyLength: Infinity,
  url: "",
  headers: {
    authority: "www.ssense.com",
    accept:
      "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
    "sec-ch-ua":
      '"Google Chrome";v="113", "Chromium";v="113", "Not-A.Brand";v="24"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": '"Windows"',
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "same-origin",
    "sec-fetch-user": "?1",
    "user-agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36",
  },
};

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const delay = () => {
  return new Promise((resolve) =>
    setTimeout(resolve, randomIntFromInterval(3400, 29726))
  );
};

const scrape = async () => {
  for (let i = 252; i < 257; i++) {
    const ssense_url = base_url + i;
    config.url = ssense_url;

    axios
      .request(config)
      .then((response) => {
        const body = response.data;
        const $ = cheerio.load(body); // Load HTML data and initialize cheerio
        getProducts($);
      })
      .catch((error) => {
        console.log(error);
      });

    await delay();
    console.log(`Finished iteration ${i}`);
  }
};

scrape();
