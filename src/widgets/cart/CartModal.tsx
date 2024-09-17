import { Counter } from "@shared/ui/counter"
import styles from "./cart.module.css"
import { useOrderStore } from "@store/order/orderStore"
import { Cart } from "@shared/ui/cart"
import { IMenuItem } from "@store/order/IOrderStore"

export const CartModal = () => {
  const toggleCart = useOrderStore(state => state.toggleCart)
  const cartItems = useOrderStore(state => state.cart)
  const updateCartQuanity = useOrderStore(state => state.updateCartQuanity)
  const createOrderAction = useOrderStore(state => state.createOrderAction)
  const clearCartAction = useOrderStore(state => state.clearCartAction)

  const totalPrice = cartItems?.reduce((acc: number,obj) => {
    return acc + obj.PRICE
  }, 0)

  const handleAddCount = (cart: IMenuItem) => {
    updateCartQuanity(cart,'+')
  }

  const handleReduceCount = (cart: IMenuItem) => {
    updateCartQuanity(cart,'-')
  }

  const createOrder = async () => {
    try {
      const payload = {
        ITEMS: cartItems?.map((c) => {
          const { MENU_ID,QUANTITY } = c
          return {
            MENU_ID,
            QUANTITY
          }
        })
      }
      const response = await createOrderAction(payload)
      if(response?.status == 201){
        clearCartAction()
        toggleCart(false)
        alert(response.message)
      }
    } catch (error) {
      
    }
  }

  return (
    <div className={styles['cz-cart-modal']}>
      <div className={styles['cz-cart-modal-body']}>
        <div className={styles['cz-cart-header']}>
          <h4>Your Bag</h4>
          <p className="pointer" onClick={() => toggleCart(false)}>Close</p>
        </div>
        { cartItems?.map((cart) => (
          <Cart key={cart.MENU_ID} cartItem={cart}>
            <Counter onAddCount={() => handleAddCount(cart)} onReduceCount={() => handleReduceCount(cart)}>{cart?.QUANTITY}</Counter>
          </Cart>
        )) }
        <div className={styles['cz-cart-footer']}>
          <div className={styles['cz-cart-footer-price']}>
            <p>Amount payable</p>
            <strong>₹{totalPrice}</strong>
          </div>
          <button onClick={createOrder}>Checkout</button>
        </div>
      </div>
    </div>
  )
}
