import { useEffect } from "react";
import { useState } from "react";
import { createContext, useContext } from "react";

const CtxCartContext = createContext({})

export function useCartContext() {
    return useContext(CtxCartContext)
}

export function CtxCartProvider({children}) {

    const [cartItem, setCartItem] = useState([])

    useEffect(() => {
      console.log(cartItem)
    },[cartItem])

    const getItemQuantity = (id) => {
        return cartItem.find(item => item.id == id)?.quantity || 0
    }

    const addToCart = (id, qyt) => {
      const exist = cartItem.find(item => item.id == id)
      let newCartItem = []
      if(exist){
        newCartItem = cartItem.map(item => item.id == id ? {...exist, quantity: exist.quantity + qyt} : item)
        setCartItem(newCartItem)
      }else {
        newCartItem = [...cartItem, {id, quantity: qyt}]
        setCartItem(newCartItem)
      } 
    }

    const increaseItemQuantity = (id) => {
        const exist = cartItem.find(item => item.id == id)
        let newCartItem = []
        if(exist) {
            newCartItem = cartItem.map(item => item.id == id ? {...exist, quantity: exist.quantity + 1} : item)
            setCartItem(newCartItem)
        }else{
            newCartItem = [...cartItem, {id, quantity: 1}]
            setCartItem(newCartItem)
        }

    }

    const removeItem = (id) => {
        setCartItem(currItem => {
            return currItem.filter(item => item.id !== id)
        })
    }

    const decreseItemQuantity = (id) => {
        const exist = cartItem.find(item => item.id == id)
        let newCartItem = []
        if(exist.quantity == 1) {
            newCartItem = cartItem.filter(item => item.id !== id)
            setCartItem(newCartItem)
        }else{
            newCartItem = cartItem.map(item => item.id == id ? {...exist, quantity: exist.quantity -1 } : item )
            setCartItem(newCartItem)
        }
    }

    const cartQuantity = cartItem.reduce((quantity, item) => item.quantity + quantity,0)

    return (
        <CtxCartContext.Provider value={{getItemQuantity, increaseItemQuantity, removeItem, decreseItemQuantity, addToCart, cartItem}}>
            {children}
        </CtxCartContext.Provider>
    )
}