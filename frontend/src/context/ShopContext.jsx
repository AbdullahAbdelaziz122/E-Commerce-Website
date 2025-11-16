import { createContext, useState, useEffect, useContext } from "react";

// Create context
const ShopContext = createContext();

// Provider component
const ShopContextProvider = ({ children }) => {
    const currency = '$';
    const deliveryFee = 10;
    
    const [products, setProducts] = useState([]); 
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                setError(null);
                
                const response = await fetch('https://fakestoreapi.com/products');
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                
                const data = await response.json();
                
                // Transform/filter data
                const formattedProducts = data.map(product => ({
                    ...product,
                    
                    originalPrice: product.price * 1.3, 
                    discount: 30,
                }));
                
                setProducts(formattedProducts);
                console.log(`Fetched ${data.length} products successfully`);
                // console.log(data)
            } catch (error) {
                console.error("Error fetching products:", error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []); 

    const value = {
        products,
        currency,
        deliveryFee,
        loading,
        error
    }

    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )
}

// Custom hook
export const useShop = () => {
    const context = useContext(ShopContext);
    if (!context) {
        throw new Error('useShop must be used within ShopContextProvider');
    }
    return context;
};

// Exports
export { ShopContext, ShopContextProvider };