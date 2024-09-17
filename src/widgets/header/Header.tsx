import { useOrderStore } from '@store/order/orderStore'
import styles from './header.module.css'

export const Header = () => {
  const toggleCart = useOrderStore(state => state.toggleCart)

  return (
    <header className={styles['cz-header']}>
      <div className={styles['cz-header-container']}>
        <div>Chezuba Pizaa's</div>
        <div onClick={() => toggleCart(true)}>Cart</div>
      </div>
    </header>
  )
}
