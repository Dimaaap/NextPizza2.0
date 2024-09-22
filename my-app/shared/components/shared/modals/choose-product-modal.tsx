"use client";

import { Dialog } from "@/shared/components/ui";
import { DialogContent } from "@/shared/components/ui/dialog";
import React from "react";
import { Title } from "../title";
import { cn } from "@/shared/lib/utils";
import { useRouter } from "next/navigation";
import { ChooseProductForm } from "../choose-product-form";
import { ProductWithRelations } from "@/@types/prisma";
import { ChoosePizzaForm } from "../choose-pizza-form";

interface Props {
    product: ProductWithRelations;
    className?: string;
}

export const ChooseProductModal: React.FC<Props> = ({
    className, product}) => {
        
        const router = useRouter();

        const isPizzaForm = Boolean(product.items[0].pizzaType);

        return(
        <Dialog open={Boolean(product)} 
        onOpenChange={() => router.back()}>
            <DialogContent className={
                cn(
                    "p-0 max-w-[1000px] min-h-[500px] bg-white overflow-auto"
                    , className)
                }>
                {
                    isPizzaForm ? (
                        <ChoosePizzaForm
                        imageUrl={product.imageUrl}
                        name={product.name}
                        ingredients={product.ingredients}
                        />
                    ): 
                    <ChooseProductForm 
                    imageUrl={product.imageUrl} 
                    name={product.name} />
                }
                
            </DialogContent>
        </Dialog>
    )
}