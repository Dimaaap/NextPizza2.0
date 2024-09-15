import { useRouter, useSearchParams } from "next/navigation";
import { useSet } from "react-use";
import React from "react";

interface PriceProps {
    priceFrom?: number;
    priceTo?: number
}


interface QueryFilters extends PriceProps {
    pizzaTypes: string;
    sizes: string;
    ingredients: string;
}

export const useFilters = () => {
    const searchParams = useSearchParams() as unknown as Map<keyof QueryFilters, string>;

    const [selectedIngredients, { toggle: toggleIngredients }] = useSet(
        new Set<string>(searchParams.get("ingredients")?.split(","))
    );


    const [sizes, { toggle: toggleSizes }] = useSet(new Set<string>(
        searchParams.has("sizes") ? 
        searchParams.get("sizes")?.split(","): [])
    )

    const [prices, setPrices] = React.useState<PriceProps>({
        priceFrom: Number(searchParams.get("priceFrom")) || undefined,
        priceTo: Number(searchParams.get("priceTo")) || undefined
    })

    const [pizzaTypes, { toggle: togglePizzaType }] = useSet(new Set<string>(
        searchParams.has("pizzaTypes") ? 
        searchParams.get("pizzaTypes")?.split(","): [])
    )

    const updatePrice = (name: keyof PriceProps, value: number) => {
        setPrices({
            ...prices,
            [name]: value
        })
    }

    return {
        sizes, pizzaTypes, selectedIngredients, 
        prices, setPrices: updatePrice, 
        setPizzaTypes: togglePizzaType, 
        setSizes: toggleSizes,
        setIngredients: toggleIngredients
    }
}