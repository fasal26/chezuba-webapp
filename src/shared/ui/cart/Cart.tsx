import { IMenuItem } from "@store/order/IOrderStore"
import styles from "./cart.module.css"

type CartType = {
  cartItem: IMenuItem
  children: React.ReactNode
}

export const Cart = ({ cartItem,children }: CartType) => {
  return (
    <div className={styles['cz-cart-items-container']}>
      <div className={styles['cz-cart-img-container']}>
        <figure>
          <img src={cartItem?.IMAGE}></img>
        </figure>
      </div>
      <div className={styles['cz-cart-details']}>
        <p>{cartItem.MENU_NAME} ( {cartItem?.SIZE} )</p>
        <div className={styles['cz-cart-price']}>
          {children}
          <strong>₹{cartItem.PRICE}</strong>
        </div>
      </div>
    </div>
  )
}
