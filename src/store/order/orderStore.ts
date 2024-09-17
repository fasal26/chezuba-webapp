import { create } from "zustand";
import { persist } from "zustand/middleware";
import { IMenuStoreState } from "./IOrderStore";
import http from "@utils/axios";

const initState = {
  cart: [],
  showCart: false,
}

export const useOrderStore = create<IMenuStoreState>()(
  persist(
    (set,get) => ({
      ...initState,
      getItemListAction: async () => {
        const response =  await http.get(import.meta.env.VITE_MENU_LIST)
        return response
      },
      createOrderAction: async (payload) => {
        const response =  await http.post(import.meta.env.VITE_MENU_ORDER,payload)
        return response
      },
      toggleCart(bool){
        set({ showCart: bool })
      },
      updateToCart: (menu) => {
        const cart = [...get().cart]
        const index = cart?.findIndex((c) => c.MENU_ID == menu.MENU_ID)
        if(index != -1){
          cart[index].QUANTITY++
        }else{
          cart.push({
            ...menu,
            QUANTITY: 1
          })
        }
        set({ cart })
      },
      updateCartQuanity: (menu,sign) => {
        const cart = [...get().cart]?.map((c) => {
          if(c.MENU_ID == menu.MENU_ID){
            if(sign == '+') c.QUANTITY++
            else {
              if(c.QUANTITY == 1) return null
              else c.QUANTITY--
            }
          }
          return c
        }).filter(c => c !== null);
        set({ cart })
      },
      clearCartAction: () => {
        set({cart: []})
      },
      resetState: () => set(initState),
    }),{
      name: 'booking',
      partialize: (state) => (
        { cart: state.cart }
      ),
    }
  )
)
