export interface Product {
    id: number
    name: string
    description: string
    price: number
    image: string
    rating: number
    viewCount: number
}

export interface Cart {
    id: number,
    quantity: number
}

export type CartContextType = {
    cartItem: Cart[]
    cartQuantity: number
    getItemQuantity: (id: number) => void
    addToCart: (id: number, qyt: number) => void
    increaseItemQuantity: (id: number) => void
    decreaseItemQuantity: (id: number) => void
    removeItem: (id: number) => void
}