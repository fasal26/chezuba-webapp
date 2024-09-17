import { ProductList } from "@pages/productList"
import { useOrderStore } from "@store/order/orderStore"
import { CartModal } from "@widgets/cart"
import { Header } from "@widgets/header"

function App() {
  const showCart = useOrderStore(state => state.showCart)
  return (
    <>
      <Header/>
      <ProductList/>
      {showCart && <CartModal/>}
    </>
  )
}

export default App
