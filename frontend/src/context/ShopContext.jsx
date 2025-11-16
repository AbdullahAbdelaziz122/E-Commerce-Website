import { createContext, useState, useEffect } from "react";


const ShopContext = createContext();

const ShopContextProvider = (props) => {
    
    const currency = '$';
    const deliveryFee = 10;
    

    const [products, setProducts] = useState([]); 

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                
                const response = await fetch('https://fakestoreapi.com/products');
                const data = await response.json();
                
                
                setProducts(data);
                console.log(() => {data === null? console.log("Products fetched successfully") : console.log("No products found") }); 
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, []); 

    
    const value = {
        products,
        currency,
        deliveryFee
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;