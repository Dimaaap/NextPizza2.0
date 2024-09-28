"use client";

import { Dialog } from "@/shared/components/ui";
import { DialogContent } from "@/shared/components/ui/dialog";
import React from "react";
import { cn } from "@/shared/lib/utils";
import { useRouter } from "next/navigation";
import { ProductWithRelations } from "@/@types/prisma";
import { ProductForm } from "../product-form";

interface Props {
    product: ProductWithRelations;
    className?: string;
}

export const ChooseProductModal: React.FC<Props> = ({
    className, product}) => {
        
        const router = useRouter();    

        return(
        <Dialog open={Boolean(product)} 
        onOpenChange={() => router.back()}>
            <DialogContent className={
                cn(
                    "p-0 max-w-[1000px] min-h-[600px] bg-white overflow-auto"
                    , className)
                }>
                
                <ProductForm product={product} onSubmit={() => router.back()} />
                
            </DialogContent>
        </Dialog>
    )
}