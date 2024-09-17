import styles from './productCard.module.css'

type MenuType = {
  menu: any,
  onAddCart: (menu: any) => void
}

export const ProductCard = ({ menu,onAddCart }: MenuType) => {
  return (
    <li>
      <div className={styles['prdimg-container']}>
        <figure>
          <img src={menu?.IMAGE}></img>
        </figure>
      </div>
      <div className={styles['prd-price']}>
        <h4>{menu.MENU_NAME} ( {menu?.SIZE} )</h4>
        <p>{menu.DESCRIPTION}</p>
        <strong>₹{menu.PRICE}</strong>
        <button onClick={() => onAddCart(menu)}>Add to cart</button>
      </div>
    </li>
  )
}
