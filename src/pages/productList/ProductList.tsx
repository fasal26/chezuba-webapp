import { ProductCard } from "@shared/ui/productCard/ProductCard"
import styles from "./productList.module.css"
import { useEffect, useState } from "react"
import { useOrderStore } from "@store/order/orderStore"

export const ProductList = () => {
  const getItemListAction = useOrderStore(state => state.getItemListAction)
  const updateToCart = useOrderStore(state => state.updateToCart)
  const toggleCart = useOrderStore(state => state.toggleCart)

  const [menuItems,setMenuItems] = useState([])

  console.log(menuItems,'menuItems')

  useEffect(() => {
    getItems()
  }, [])
  
  const getItems = async () => {
    try {
      const response = await getItemListAction()
      if(response?.status == 200) {
        setMenuItems(response?.data)
      }
    } catch (error) {
      
    }
  }

  const addToCart = (menu: any) => {
    updateToCart(menu)
    toggleCart(true)
  }

  return (
    <div className={styles['cz-prdlist-container']}>
      <div className={styles['cz-prdlist']}>
        <ul>
          { menuItems?.map((menu: any) => (
            <ProductCard key={menu?.MENU_ID} menu={menu} onAddCart={addToCart}/>
          )) }
        </ul>
      </div>
    </div>
  )
}
