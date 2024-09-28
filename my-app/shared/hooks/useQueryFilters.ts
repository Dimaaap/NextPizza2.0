import React from "react";
import { Filters } from "./useFilters";
import qs from "qs";
import { useRouter } from "next/navigation";
import { useDeepCompareEffect } from "react-use";

export const useQueryFilters = (filters: Filters) => {

    const router = useRouter()


    useDeepCompareEffect(() => {
        const params = {
            ...filters.prices,
            pizzaTypes: Array.from(filters.pizzaTypes),
            sizes: Array.from(filters.sizes),
            ingredients: Array.from(filters.selectedIngredients),
        }

        const query = qs.stringify(params, {
            arrayFormat: "comma"
        });

        router.push(`?${query}`, {
            scroll: false
        });

    }, [filters])
}