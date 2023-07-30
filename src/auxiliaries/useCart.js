import { useState } from "react"

export const useCart = () => {

    const [addedProducts, setAddedProducts] = useState([])

    const addItem = (product, quantity) => {
        const { stock, ...rest } = product

        //logic to check if an item was already added to the cartContext
        const alreadyAdded = addedProducts.some(
            product => product.id === rest.id
        )

        if (!alreadyAdded)
            setAddedProducts(prev => [
                ...prev,
                { ...rest, quantity},
        ])
        else {
            const updateProducts = addedProducts.map(
                product => {
                    if (product.id === rest.id)
                        return {
                            ...product,
                            quantity: product.quantity + quantity,
                        }
                    else return product
                }
            )
            setAddedProducts(updateProducts)
        }
    }

    const deleteItem = id => {
        const restProducts = addedProducts.filter(
            product => product.id !== id
        )
        setAddedProducts(restProducts)
    }

    const clearCart = () => setAddedProducts([])

    return {
        addedProducts,
        addItem,
        clearCart,
        deleteItem
    }
}