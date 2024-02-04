import { useState, useEffect, createContext } from "react";
import { toast } from "react-toastify";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("cartItems"));
    if (storedItems) {
      setCartItems(storedItems);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => {
    // console.log(item);
    toast.success("Added to Cart");
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (itemId) => {
    console.log("being Called with id", itemId);
    let new_items = cartItems.filter((item) => {
      return item._id !== itemId;
    });
    toast.dark("Removed");
    setCartItems([...new_items]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
