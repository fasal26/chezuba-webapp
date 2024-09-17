import styles from "./cart.module.css"

export const Cart = ({ cartItem,children }: any) => {
  return (
    <div className={styles['cz-cart-items-container']}>
      <div className={styles['cz-cart-img-container']}>
        <figure>
          <img src="https://img.curlified.com/gallery/4881306e82631d1d51e8677e8de35b13.png?w=300"></img>
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
