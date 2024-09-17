import { ProductCard } from "@shared/ui/productCard/ProductCard"
import styles from "./productList.module.css"
import { useEffect, useState } from "react"
import { useOrderStore } from "@store/order/orderStore"
import { IMenuItem } from "@store/order/IOrderStore"

export const ProductList = () => {
  const getItemListAction = useOrderStore(state => state.getItemListAction)
  const updateToCart = useOrderStore(state => state.updateToCart)
  const toggleCart = useOrderStore(state => state.toggleCart)

  const [menuItems,setMenuItems] = useState<IMenuItem[]>([])

  useEffect(() => {
    getItems()
  }, [])
  
  const getItems = async () => {
    try {
      const response = await getItemListAction()
      if(response?.status == 200) {
        if(response.data?.length) setMenuItems(response.data)
      }
    } catch (error) {
      
    }
  }

  const addToCart = (menu: IMenuItem) => {
    updateToCart(menu)
    toggleCart(true)
  }

  return (
    <div className={styles['cz-prdlist-container']}>
      <div className={styles['cz-prdlist']}>
        <ul>
          { menuItems?.map((menu) => (
            <ProductCard key={menu?.MENU_ID} menu={menu} onAddCart={addToCart}/>
          )) }
        </ul>
      </div>
    </div>
  )
}
