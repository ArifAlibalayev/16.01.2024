import React, { createContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const wishlistContext = createContext();

function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useLocalStorage("wishlist", []);

  function addToWishlist(item) {
    const index = wishlist.findIndex((x) => x._id === item._id);

    if (index === -1) {
      setWishlist([...wishlist, item]); 
    } else {
      setWishlist(wishlist.filter((x) => x._id !== item._id));
    }
    console.log(wishlist);
  }

  const wishlistValue = { wishlist, addToWishlist };

  return (
    <wishlistContext.Provider value={wishlistValue}>
      {children}
    </wishlistContext.Provider>
  );
}

export default WishlistProvider;
