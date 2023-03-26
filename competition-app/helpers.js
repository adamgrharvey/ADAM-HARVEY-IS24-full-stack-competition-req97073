const productGenerator = function (numProducts) {

  let products = {};

  for (let i = 1; i < numProducts + 1; i++) {
    products[i] = {
      productId: 'VALUE',
      productName: 'VALUE',
      productOwnerName: 'VALUE',
      Developers: [
        "NAME_1",
        "NAME_2",
        "NAME_3",
        "NAME_4",
        "NAME_5"
      ],
      scrumMasterName: 'VALUE',
      startDate: "YYYY/MM/DD",
      methodology: 'VALUE'
    };
  }
  return products;
}

module.exports = {productGenerator};