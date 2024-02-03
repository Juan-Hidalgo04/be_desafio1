// Backend Challenge 

class ProductManager {
    //to strat the ID in 0. 
    static ultId = 0;

    // Create the base object
    constructor() {
        this.products = []
    }
    
    // Methods

    // Creation on how to add Products to the object
    addProduct(title,description,price,img,code,stock){
        
        // We need to validate: All fields are mandatory and 
        if(!title || !description || !price || !img || !code || !stock) {
            console.log("All fields are required");
            return;
        }

        // Check if the code already exists
        if(this.products.some(item=> item.code === code)) {
            console.log("The product's code must be unique");
            return;
        }

        const newProduct = {
            id: ++ProductManager.ultId,
            title,
            description,
            price,
            img,
            code,
            stock
        }


        // we add this to the array
        this.products.push(newProduct);
    }

    // Return all the products created so far

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find(item => item.id === id);
        if(!product) {
            return "Not Found";
        } 
        return product;
    }
}


// Testing 1
const manager = new ProductManager();

// Testing 2 getProduct and return empty

console.log(manager.getProducts());

// testing 3: Add product using the specific values

manager.addProduct("Test Product","This is a test product",200,"No image","abc123",25)

//console.log(manager.getProducts());  // Testing the previous one

// testing 4: add objects with different IDs automatically

manager.addProduct("BagPack","This is a travel bag",100,"No image","aaa100",55);

manager.addProduct("Boots","This is a pair of travel boots",150,"No image","aaa101",57);

//Testing 5: getProduct with the new products

console.log(manager.getProducts());  // Testing the previous one

// Testing 6: add product with the same information. It should have an error.

manager.addProduct("Boots","This is a pair of travel boots",150,"No image","aaa101",57); // unique values

manager.addProduct("Boots","This is a pair of travel boots",150,"No image","aaa101"); // all fields required

console.log(manager.getProducts());

// testing 7: getProductById with an error "Not found"

console.log("Looking a product by ID");
console.log(manager.getProductById(2));

console.log(manager.getProductById(15));

