/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let listObjects = []
  let categoryList = []
  if (transactions == []) {
    return []
  }
  for (let i = 0; i < transactions.length; i++) {
    let cat = transactions[i].category;

    if (categoryList.includes(cat)) {
      let index = listObjects.indexOf(listObjects.find(e => e.category === cat));
      listObjects[index]["totalSpent"] += transactions[i].price;
    }
    else {
      const newObj = { category: cat, totalSpent: transactions[i].price };
      listObjects.push(newObj);
      categoryList.push(cat);
    }
  }
  return listObjects;
}

module.exports = calculateTotalSpentByCategory;
