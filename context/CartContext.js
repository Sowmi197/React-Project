import { createContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        let isIn = false;
        if (cartItems.length > 0) {
            cartItems.map((e) => {
                if (e.id === item.id) isIn = true;
            });
            if (isIn) {
                increaseCount(item.id);
            } else {
                const cartItem = {
                    ...item,
                    count: 1,
                };
                setCartItems([...cartItems, cartItem]);
            }
        } else {
            const cartItem = {
                ...item,
                count: 1,
            };
            setCartItems([...cartItems, cartItem]);
        }
    };

    const removeFromCart = (itemId) => {
        setCartItems(cartItems.filter((item) => item.id !== itemId));
    };

    const reduceCount = (itemId) => {
        const updatedItem = cartItems.find((item) => item.id === itemId);
        if (updatedItem.count === 1) {
            removeFromCart(itemId);
        } else {
            updatedItem.count -= 1;
            setCartItems(
                cartItems.map((item) =>
                    item.id === itemId ? { ...item, updatedItem } : item
                )
            );
        }
    };

    const increaseCount = (itemId) => {
        const updatedItem = cartItems.find((item) => item.id === itemId);
        if (updatedItem.count > updatedItem.inStock) {
            alert("we dont have that much flower, sry");
        } else {
            updatedItem.count += 1;
            setCartItems(
                cartItems.map((item) =>
                    item.id === itemId ? { ...item, updatedItem } : item
                )
            );
        }
    };

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                reduceCount,
                increaseCount,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;
