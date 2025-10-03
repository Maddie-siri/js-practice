//add-remove - increase-filter-total-objects keys and values -dotand bracket-demo
let cart = [];
// add items - push
function additem(name,price,qty=1){
    cart.push({name,price,qty});
    console.log(`added${qty} x ${name} to cart`);
}
// remove last item - pop
function removelastitem(){
    let removed = cart.pop();
    console.log(`removed:`, removed);
}
// list cart
function listcart(){
    console.log("\n your cart");
    cart.forEach(item => {
        console.log(`-${item.name}| $${item.price} x ${item.qty}`);
    });
}
//increase by 1
function increaseallquantities(){
    cart = cart.map(item => {
        return{ ...item,qty: item.qty + 1};

    });
    console.log("increased all quantities by 1 ");
}
//  filter - $20
function filtercheaperitems(){
    let cheap = cart.filter(item => item.price < 20);
    console.log("\n cheap ietms (<  $20): ", cheap);

}
// calculate total - reduce
function gettotal(){
    let total = cart.reduce((sum,item) => sum+item.price*item.qty, 0);
    console.log(`\n total : $${total}`);
}
// object keys - values  
function showobjmethods(){
    if (cart.length===0)return;
    let firstitem =cart[0];
    console.log("\n object.keys:",Object.keys(firstitem));
    console.log("\n object.values:",Object.values(firstitem));
    console.log("dot:",firstitem.name);
    console.log("bracket:",firstitem["price"]);
}
additem("apple", 5,3);
additem("milk",20,3);
additem("orange",500,1);
listcart();
increaseallquantities();
listcart();
filtercheaperitems();
gettotal();
showobjmethods();
removelastitem();
listcart();