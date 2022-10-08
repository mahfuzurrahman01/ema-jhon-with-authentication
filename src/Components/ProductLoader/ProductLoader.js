import { getStoredCart } from "../../utilities/fakedb";

export const ProductLoader = async () =>{
    //get the products 
    const productsData = await fetch('products.json');
    const products = await productsData.json();
    //load from local storage
    const savedCart = getStoredCart()
    // console.log(savedCart)
    const initialCart = [];
    for (const id in savedCart){
        const addedProduct = products.find(product => id === product.id)
        if(addedProduct){
            const quantity = savedCart[id]
            addedProduct.quantity = quantity;
            initialCart.push(addedProduct);
        }
    }
    return { products:products , initialCart:initialCart }
}