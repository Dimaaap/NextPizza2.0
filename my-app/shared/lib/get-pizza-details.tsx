import { Ingredient, ProductItem } from "@prisma/client"
import { calcTotalPizzaPrice } from "."
import { mapPizzaType, PizzaSize, PizzaType } from "../constants/pizza"

export const getPizzaDetails = (
    type: PizzaType,
    size: PizzaSize,
    items: ProductItem[],
    ingredients: Ingredient[],
    selectedIngredients: Set<number>
) => {
    const totalPrice = calcTotalPizzaPrice(
        items, 
        ingredients, 
        type, 
        size, 
        selectedIngredients
    )
    const textDetails = `${size} см, ${mapPizzaType[type]} тісто`

    return { totalPrice, textDetails }
}