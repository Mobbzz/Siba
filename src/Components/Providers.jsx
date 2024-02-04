import CartContextProvider, { CartContext } from "../Context/cartContext"

const Providers = ({children}) => {
    return(
        <>
        {/* <Provider store={store}> */}
          <CartContextProvider>
            { children }
          </CartContextProvider>
        {/* </Provider> */}
        </>
    )
}
export default Providers