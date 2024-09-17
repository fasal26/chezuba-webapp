import { IResponse } from "@shared/types"

export interface IMenuStoreState {
  cart: ICart[],
  showCart: boolean,
  getItemListAction: () => Promise<IResponse<IMenuItem[]>>,
  createOrderAction: (payload: IOrderPayload) => Promise<IResponse<{}>>,
  updateToCart: (menu: IMenuItem) => void,
  toggleCart: (bool: boolean) => void,
  updateCartQuanity: (menu: IMenuItem,sign: '+' | '-') => void,
  clearCartAction: () => void,
  resetState: () => void,
}

export interface IMenuItem {
  MENU_NAME: string;
  DESCRIPTION: string;
  PRICE: number;
  PREP_TIME: number;
  SIZE: string;
  STATUS: boolean;
  TYPE: string;
  MENU_ID: string;
  IMAGE: string;
}

export interface ICart extends IMenuItem {
  QUANTITY: number
}

export interface IOrderItem {
  MENU_ID: string;
  QUANTITY: number;
}

export interface IOrderPayload {
  ITEMS: IOrderItem[];
}