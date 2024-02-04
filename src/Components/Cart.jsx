import { CartContext } from '../Context/cartContext'; 

export const CartProvider = ({ children }) => {
  const [cart, setCart] = React.useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};