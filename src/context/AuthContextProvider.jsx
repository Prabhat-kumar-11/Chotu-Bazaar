import React, { createContext, useState } from "react";
import { useToast } from "@chakra-ui/react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(() => {
    let token = localStorage.getItem("token");
    if (token) {
      token = JSON.parse(token);
      return {
        isAuth: true,
        ...token,
      };
    }
    return { isAuth: false, token: null };
  });
  const [cartItems, setCartItems] = useState(() => {
    let cartItems = localStorage.getItem("cart");
    if (cartItems) {
      cartItems = JSON.parse(cartItems);
      return cartItems;
    } else {
      localStorage.setItem("cart", JSON.stringify([]));
      return [];
    }
  });
  const toast = useToast();

  function addCartItem(item) {
    let isItemExist = false;
    for (let i = 0; i < cartItems.length; i++) {
      if (item.id === cartItems[i].id) {
        isItemExist = true;
      }
    }
    if (isItemExist) {
      toast({
        title: "Item is already in cart",
        status: "info",
        duration: 5000,
        isClosable: true,
        variant: "left-accent",
        containerStyle: {
          fontSize: "22",
          lineHeight: "10",
          py: "6",
        },
      });
      return;
    }

    setCartItems([...cartItems, item]);
    localStorage.setItem("cart", JSON.stringify([...cartItems, item]));
    toast({
      title: "Item is successfully added to cart",
      status: "success",
      duration: 5000,
      isClosable: true,
      variant: "left-accent",
      containerStyle: {
        fontSize: "22",
        lineHeight: "10",
        py: "6",
      },
    });
  }

  function removeCartItem(id) {
    setCartItems(cartItems.filter((item) => item.id !== id));
    localStorage.setItem(
      "cart",
      JSON.stringify(cartItems.filter((item) => item.id !== id))
    );
  }

  function updateCartItem(id, payload) {
    // console.log(id, payload);

    let updated = cartItems.map((item) => {
      if (item.id === id) {
        if (payload == -1 && item.quantity == 0) {
          return item;
        }
        return { ...item, quantity: item.quantity + payload };
      }
      return item;
    });

    setCartItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  }

  function loginUser(payload) {
    localStorage.setItem("token", JSON.stringify(payload.token));
    setAuthToken({
      isAuth: true,
      token: payload.token,
    });
  }

  function logoutUser() {
    localStorage.removeItem("token");
    setAuthToken({ isAuth: false, token: null });
  }

  function clearCart() {
    setCartItems([]);
    localStorage.setItem("cart", JSON.stringify([]));
  }

  return (
    <AuthContext.Provider
      value={{
        authToken,
        loginUser,
        logoutUser,
        cartItems,
        addCartItem,
        removeCartItem,
        updateCartItem,
        clearCart,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
