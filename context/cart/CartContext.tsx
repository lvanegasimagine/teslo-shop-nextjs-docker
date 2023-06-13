import { ICartProduct } from "@/interfaces";
import { createContext } from "react";

interface ICartContextProps {
    cart: ICartProduct[];
    numberOfItems: number;
    subTotal: number;
    tax: number;
    total: number;
    addProductToCart: (product: ICartProduct) => void
    updateCartQuantity: (product: ICartProduct) => void
    removeCartQuantity: (product: ICartProduct) => void
}

export const CartContext = createContext({} as ICartContextProps);