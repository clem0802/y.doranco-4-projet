
let cartItems = []; // an empty ARRAY

// ROOMS
// -------------------------------------------
let isTotalHidden = true;

let double = { // an OBJECT
    name: "Double-classic",
    price: 800
}
let triple = { 
    name: "Triple-pool",
    price: 1000
}
let quadruple = {
    name: "Quadruple-family",
    price: 1200
}

// FOOD
// -------------------------------------------
let salmon = { 
    name: "Salmon",
    price: 50
}
let salad = { 
    name: "Salad",
    price: 50
}
let chicken = { 
    name: "Chicken",
    price: 50
}
let beef = { 
    name: "Beef",
    price: 50
}
let shrimp = { 
    name: "Shrimp",
    price: 70
}

// DRINKS & DESSERT
// -------------------------------------------
let mojito = { 
    name: "Mojito",
    price: 30
}
let coke = { 
    name: "Coke",
    price: 30
}
let water = { 
    name: "Water",
    price: 30

}
let coffee = { 
    name: "Coffee",
    price: 30
}
let tea = { 
    name: "Tea",
    price: 30
}
let pie = { 
    name: "Pie",
    price: 50
}
let cake = { 
    name: "Choco Cake",
    price: 50
}
let ice = { 
    name: "Ice Cream",
    price: 50

}

// SPA
// -------------------------------------------
let pleasure = { 
    name: "Pleasure-spa",
    price: 800
}
let relaxing = { 
    name: "Relaxing-spa",
    price: 1500
}
let medical = { 
    name: "Medical-spa",
    price: 3000
}



// ---------------------------------------------
function addToCart(item) {
    cartItems.push(item);
    document.getElementById("itemCounter").innerHTML = cartItems.length; //!
    showTotal();
}

function clickCart() {
    isTotalHidden = !isTotalHidden;
    showTotal();
}

// ---------------------------------------------
function showTotal() {
    let orderTotal = document.getElementById("orderTotal");
    orderTotal.innerHTML = "";

    if (isTotalHidden === false) {
        let total = 0;
        for (let i = 0; i<cartItems.length; i++) {
            total += cartItems[i].price;
        }
        orderTotal.innerHTML += "TOTAL: " + total + "€, this is a fictive purchase.";
    }
}




// TEST
// ---------------------------------------------
// ---------------------------------------------
