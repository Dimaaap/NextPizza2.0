import { cn } from "@/lib/utils";
import React from "react";
import { Title } from "./title";
import { Button } from "../ui";
import { ProductImage } from "./product-image";

interface Props {
    imageUrl: string;
    name: string;
    className?: string;
    ingredients: any[];
    items?: any[];
    onClickAdd?: VoidFunction;
}

export const ChoosePizzaForm: React.FC<Props> = ({ 
    imageUrl, name, className, ingredients, items, 
    onClickAdd
 }) => {

    const textDetails = "30 см, традиційне тісто 30"
    const totalPrice = 350;
    const size = 30;

    return (
        <div className={cn(className, "flex flex-1")}>

            <ProductImage imageUrl={ imageUrl } size={ size } />

            <div className="w-[490px] bg-[#f7f6f5] p-7">
                <Title text={name} size="md" 
                className="font-extrabold mb-1" />
                <p className="text-gray-400">
                    { textDetails }
                </p>
                <Button 
                className="h-[55px] px-10 text-base 
                rounded-[18px] w-full mt-10">
                    Додати в кошик за { totalPrice } грн
                </Button>
            </div>
        </div>
    )
}