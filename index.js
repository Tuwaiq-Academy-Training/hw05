let array = [
  {
    itemName: "Iphone",
    price: 4300,
    quantity: 1,
    description: "an apple mobile phone",
    tax_percent: 0.15,
    type: "Mobile",
  },
  {
    itemName: "Galaxy",
    price: 3200,
    quantity: 1,
    description: "an Android Mobile Phone",
    tax_percent: 0.15,
    type: "Mobile",
  },
  {
    itemName: "USB Type-C Charger",
    price: 50,
    quantity: 2,
    description: "a type-c charger",
    tax_percent: 0.5,
    type: "Utils",
  },
  {
    itemName: "Cappuccino",
    price: 12,
    quantity: 4,
    description: "a caffine drink",
    tax_percent: 0,
    type: "Drinks",
  },
  {
    itemName: "Chair",
    price: 100,
    quantity: 2,
    description: "A desk Chair",
    tax_percent: 0.2,
    type: "Furniture",
  },
  {
    itemName: "Burger Meal",
    price: 40,
    quantity: 3,
    description: "a Macdonald Meal",
    tax_percent: 0.4,
    type: "Food",
  },
]

  let newarrProducts = array.map(
    item =>
      (newObj = {
        product_name: item.itemName,
        total_price: item.price * item.quantity * (1 - item.tax_percent),
        type: item.type,
        compound_name: item.itemName + "-" + item.price * item.quantity * (1 - item.tax_percent),
      })
  )
  
  console.log(newarrProducts)