import { useEffect, useReducer } from "react";
import { CartContext, cartReducer } from "./";
import { ICartProduct, IProduct } from "@/interfaces";
import Cookie from 'js-cookie';

export interface CartState {
    cart: ICartProduct[];
}

const CART_INITIAL_STATE: CartState = {
    cart: []
}

export const CartProvider = ({ children }: { children: JSX.Element }) => {
    const [state, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE);

    // Efecto
    useEffect(() => {
        console.log('primero')
        try {
            const cookieProducts = Cookie.get('cart') ? JSON.parse(Cookie.get('cart')!) : undefined
            console.log("🚀 ~ file: CartProvider.tsx:22 ~ useEffect ~ cookieProducts:", cookieProducts)
            dispatch({ type: '[Cart] - LoadCart from cookies | storage', payload: cookieProducts });
        } catch (error) {
            dispatch({ type: '[Cart] - LoadCart from cookies | storage', payload: [] });
        }
    }, []);


    useEffect(() => {
        console.log('segundo')
        Cookie.set('cart', JSON.stringify(state.cart));
    }, [state.cart]);

    useEffect(() => {
        console.log('segundo')
        Cookie.set('cart', JSON.stringify(state.cart));
    }, [state.cart]);

    useEffect(() => {
        
        const numberOfItems = state.cart.reduce( ( prev, current ) => current.quantity + prev , 0 );
        const subTotal = state.cart.reduce( ( prev, current ) => (current.price * current.quantity) + prev, 0 );
        const taxRate =  Number(process.env.NEXT_PUBLIC_TAX_RATE || 0);
    
        const orderSummary = {
            numberOfItems,
            subTotal,
            tax: subTotal * taxRate,
            total: subTotal * ( taxRate + 1 )
        }

        // dispatch({ type: '[Cart] - Update order summary', payload: orderSummary });
    }, [state.cart]);


    const addProductToCart = (product: ICartProduct) => {
        const productInCart = state.cart.some(p => p._id === product._id); // * El metodo some devuelve un valor boolean

        if (!productInCart) return dispatch({ type: '[Cart] - Update products in cart', payload: [...state.cart, product] });

        const productInCartButDifferentSize = state.cart.some(p => p._id === product._id && p.size === product.size)

        if (!productInCartButDifferentSize) return dispatch({ type: '[Cart] - Update products in cart', payload: [...state.cart, product] });

        // * Acumular

        const updatedProducts = state.cart.map(p => {
            if (p._id !== product._id) return p;

            if (p.size !== product.size) return p;

            // * Actualizar la cantidad

            p.quantity += product.quantity;

            return p;
        })

        dispatch({ type: '[Cart] - Update products in cart', payload: updatedProducts });

        Cookie.set('cart', JSON.stringify(state.cart));
    }

    const updateCartQuantity = (product: ICartProduct) => {
        dispatch({ type: '[Cart] - Change cart quantity', payload: product })
    }

    const removeCartQuantity = (product: ICartProduct) => {
        dispatch({ type: '[Cart] - Remove product in cart', payload: product })
    }

    return (
        <CartContext.Provider value={{ ...state, addProductToCart, updateCartQuantity, removeCartQuantity }}>
            {children}
        </CartContext.Provider>
    )
}