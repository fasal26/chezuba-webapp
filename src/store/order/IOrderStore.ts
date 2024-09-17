import { IResponse } from "@shared/types"

export interface IMenuStoreState {
  cart: any,
  showCart: boolean,
  getItemListAction: () => Promise<IResponse<any>>,
  createOrderAction: (payload: any) => Promise<IResponse<any>>,
  updateToCart: (menu: any) => void,
  toggleCart: (bool: boolean) => void,
  updateCartQuanity: (menu: any,sign: '+' | '-') => void,
  clearCartAction: () => void,
  resetState: () => void,
}