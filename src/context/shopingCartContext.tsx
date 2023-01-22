import { useContext, createContext, ReactNode, useState } from 'react'

type shoppingCartProviderProps = {
    children: ReactNode
}

type cartItem = {
    id: number,
    quantity: number
}

type shoppingCartContext = {
    getItemQuantity: (id: number) => number
    increasCartQuantity: (id: number) => void
    decreasCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
}
const shoppingCartContext = createContext({} as shoppingCartContext);

export function useShoppingCart() {
    return useContext(shoppingCartContext)
}


export function ShoppingCartProvider({ children }: shoppingCartProviderProps) {
    const [cartItems, setCartItem] = useState<cartItem[]>([])

    //Get Item Quantity
    function getItemQuantity(id: number) {
        return cartItems.find(item => item.id === id)?.quantity || 0;
    }

    //Increase Item Quantity
    function increasCartQuantity(id: number) {
        setCartItem(currItems => {
            if (currItems.find(item => item.id === id) == null) {
                return [...currItems, { id, quantity: 1 }]
            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    //Decrease Item Quantity
    function decreasCartQuantity(id: number) {
        setCartItem(currItems => {
            if (currItems.find(item => item.id === id) == null) {
                return [...currItems, { id, quantity: 1 }]
            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    return <shoppingCartContext.Provider value={{ getItemQuantity, increasCartQuantity,decreasCartQuantity }}>
        {children}
    </shoppingCartContext.Provider>

}