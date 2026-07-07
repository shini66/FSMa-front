import { useState } from "react";

function useCart() {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        if (!product.disposability) return;
        setCart((prev) => [...prev, product]);
    };

    const cartTotal = cart.reduce((total, cart) => total + cart.precio, 0);

    const cartCount = cart.length;

    return { cart, cartTotal, cartCount, addToCart };
}

export default useCart;
