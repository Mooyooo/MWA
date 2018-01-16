const item={
    "name":"Biscuits",
    "type":"regular",
    "category":"food",
    "price":2.0
}

const applyCoupon=category=>discount=>item=>{
    item.category=category;
    item.price = item.price-item.price*discount;
    return item;
}

console.log(applyCoupon('foood')(0.1)(item).price===1.8);
console.log(applyCoupon('foood')(0.1)(item));