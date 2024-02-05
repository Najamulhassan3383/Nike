import { useState, useEffect, createContext, useRef } from "react"; // Import useRef
import { toast } from "react-toastify";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const firstUpdate = useRef(true); // Create a ref

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("cartItems"));
    if (storedItems) {
      setCartItems(storedItems);
    }
  }, []);

  useEffect(() => {
    if (firstUpdate.current) {
      // If it's the first render, skip setting items to local storage
      firstUpdate.current = false;
    } else {
      // If it's not the first render, set items to local storage
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  const updateCartItemQuantity = (id) => {
    console.log("updating ");
    const newItems = cartItems.map((item) => {
      if (item._id === id) {
        item.qty = item.qty + 1;
      }
      return item;
    });
    setCartItems(newItems);
  };

  const addToCart = (item) => {
    // Check if the item is already in the cart
    const existingItem = cartItems.find((ele) => ele._id === item._id);

    if (existingItem) {
      // If the item exists, increase its quantity
      // Create a new copy of the cart items
      const newCartItems = cartItems.map((cartItem) => {
        if (cartItem._id === item._id) {
          return { ...cartItem, qty: cartItem.qty + 1 };
        } else {
          return cartItem;
        }
      });
      toast.success("Added to Cart");
      setCartItems(newCartItems); // Update the state with the modified cart items
    } else {
      // If the item is not in the cart, add it with a quantity of 1
      item.qty = 1;
      toast.success("Added to Cart");
      setCartItems([...cartItems, item]); // Add the new item to the cart
    }
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
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateCartItemQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
