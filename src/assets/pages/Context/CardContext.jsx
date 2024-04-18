import React, { createContext, useContext, useState } from "react";

// Создание контекста для хранения состояния корзины
const CartContext = createContext();

// Провайдер контекста для предоставления доступа к состоянию корзины
export const CartProvider = ({ children }) => {
  const [itemsCount, setItemsCount] = useState(0);

  const addToCart = () => {
    setItemsCount(itemsCount + 1);
    // Дополнительный код для добавления элемента в корзину
  };

  return (
    <CartContext.Provider value={{ itemsCount, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Компонент, который позволяет другим компонентам использовать состояние корзины
export const useCart = () => {
  return useContext(CartContext);
};
