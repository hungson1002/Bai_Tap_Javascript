// Câu 1
function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}

// Câu 2
const products = [
    new Product(1, "Laptop Dell", 25000000, 5, "Electronics", true),
    new Product(2, "iPhone 15", 32000000, 3, "Electronics", true),
    new Product(3, "Chuột Logitech", 800000, 10, "Accessories", true),
    new Product(4, "Bàn phím cơ", 1500000, 0, "Accessories", false),
    new Product(5, "Tai nghe Sony", 4000000, 7, "Accessories", false),
    new Product(6, "Màn hình LG", 7000000, 2, "Electronics", true),
]

// Câu 3
console.log("Câu 3:")
const getNameandPrice = products.map(
    product => ({
        name: product.name,
        price: product.price
    })
)
console.log(getNameandPrice);
console.log("");

// Câu 4
console.log("Câu 4:")
const getQuantityProduct = products.filter(
    product => product.quantity > 0
)
console.log(getQuantityProduct);
console.log("");

// Câu 5
console.log("Câu 5:")
const checkPrice = products.some(
    product => product.price > 30000000
)
console.log(checkPrice);
console.log("");

// Câu 6
console.log("Câu 6:")
const checkCategory = products
    .filter(
        product => product.category === "Accessories"
    )
    .every(
        product => product.isAvailable === true
    )
console.log(checkCategory);
console.log("");

// Câu 7
console.log("Câu 7:")
const totalPrice = products.reduce(
    (total, product) => total + product.price * product.quantity, 0
)
console.log(totalPrice);
console.log("");

// Câu 8
console.log("Câu 8:")
for (const product of products) {
    console.log(`${product.name} - ${product.category} - ${product.isAvailable}`)
}
console.log("");

// Câu 9
console.log("Câu 9:")
for (const product in products[2]) {
    console.log(`${product}: ${products[2][product]}`)
}
console.log("");

// Câu 10
console.log("Câu 10:")
const getProductAvailable = products
    .filter(
        product => product.isAvailable === true && product.quantity > 0
    )
    .map(
        product => product.name
    )
console.log(getProductAvailable);