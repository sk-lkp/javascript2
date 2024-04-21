const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "js course",
        price: 5999
    },
    {
        itemName: "python course",
        price: 4999
    },
    {
        itemName: "c++ course",
        price: 1999
    },
]
const priceTopay=shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceTopay);