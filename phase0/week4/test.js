function countProfit(shoppers) {
  let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
  ['Baju Zoro', 500000, 2],
  ['Sweater Uniklooh', 175000, 1]
];

// you can only write your code here!
  let result = [];


  for (let i = 0; i < listBarang.length; i++) {
    let product = {};
    let productName = listBarang[i][0];
    let price = listBarang[i][1];
    let leftOver = listBarang[i][2];
    let totalProfit = 0;
    let shoppersName = [];
    
    for (let j = 0; j < shoppers.length; j++) {
      if (shoppers[j].product === productName) {
        if (shoppers[j].amount <= leftOver) {
          shoppersName.push(shoppers[j].name);
          leftOver -= shoppers[j].amount;
          totalProfit += price * shoppers[j].amount;
        }
      }
    }
    
    product.product = productName;
    product.shoppers = shoppersName;
    product.leftOver = leftOver;
    product.totalProfit = totalProfit;
    
    result.push(product);
    
  }
  return result;
}

// TEST CASES
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]