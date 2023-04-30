import { ReactNode, useState } from "react"
import { createContext, useContext } from "react"
import { Cart, CartContextType } from "../@types/cart"

type CtxCartProvider = {
  children: ReactNode
}

const CtxCartContext = createContext({} as CartContextType)

export function useCartContext() {
  return useContext(CtxCartContext)
}

export function CtxCartProvider({ children }: CtxCartProvider) {
  const [cartItem, setCartItem] = useState<Cart[]>([])

  const getItemQuantity = (id: number) => {
    return cartItem.find((item) => item.id == id)?.quantity || 0
  }

  const addToCart = (id:number, qyt: number) => {
    const exist = cartItem.find((item) => item.id == id)
    let newCartItem = []
    if (exist) {
      newCartItem = cartItem.map((item) =>
        item.id == id ? { ...exist, quantity: exist.quantity + qyt } : item
      )
      setCartItem(newCartItem)
    } else {
      newCartItem = [...cartItem, { id, quantity: qyt }]
      setCartItem(newCartItem)
    }
  }

  const increaseItemQuantity = (id: number) => {
    const exist = cartItem.find((item) => item.id == id)
    let newCartItem = []
    if (exist) {
      newCartItem = cartItem.map((item) =>
        item.id == id ? { ...exist, quantity: exist.quantity + 1 } : item
      )
      setCartItem(newCartItem)
    } else {
      newCartItem = [...cartItem, { id, quantity: 1 }]
      setCartItem(newCartItem)
    }
  }

  const removeItem = (id: number) => {
    setCartItem((currItem) => {
      return currItem.filter((item) => item.id !== id)
    })
  }

  const decreaseItemQuantity = (id: number) => {
    setCartItem(currItems => {
      if(currItems.find(item => item.id == id) == null){
        return [...currItems, {id, quantity: 1}]
      } else {
        return currItems.map(item => {
          if (item.id == id) {
            return {...item, quantity: item.quantity +1}
          } else {
            return item
          }
        })
      }
    })
  }

  const cartQuantity = cartItem.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  )

  return (
    <CtxCartContext.Provider
      value = {{
        cartQuantity,
        getItemQuantity,
        increaseItemQuantity,
        removeItem,
        decreaseItemQuantity,
        addToCart,
        cartItem,
      }}
    >
      {children}
    </CtxCartContext.Provider>
  )
}
