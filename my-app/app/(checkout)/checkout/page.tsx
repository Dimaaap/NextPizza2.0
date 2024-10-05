"use client";

import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCart } from "@/shared/hooks";
import { checkoutFormSchema, TCheckoutFormValues } from "@/shared/components/shared/checkout/checkout-form-schema";
import { CheckoutAddressForm, CheckoutCart, CheckoutPersonalForm } from "@/shared/components/shared/checkout";
import { CheckoutSidebar } from "@/shared/components/shared/checkout-sidebar";
import { Container, Title } from "@/shared/components/shared";
import { createOrder } from "@/app/actions";
import toast from "react-hot-toast";


export default function CheckoutPage() {
    const [submitting, setSubmitting] = React.useState(false);

    const { totalAmount, updateItemQuantity, 
        items, removeCartItem, loading
     } = useCart();

     const form = useForm<TCheckoutFormValues>({
        resolver: zodResolver(checkoutFormSchema),
        defaultValues: {
            email: "",
            firstName: "",
            lastName: "",
            phone: "",
            address: "",
            comment: ""
        }
     });

     const onSubmit = async (data: TCheckoutFormValues) => {
        try {
            setSubmitting(true)
            const url = await createOrder(data);

            toast.success("Замовлення успішно оформлене! 📝 Перехід на оплату...", {
                icon: "✅"
            })

            if(url !== null) {
                location.href = String(url);
            }

        } catch (err){
            console.log(err);
            setSubmitting(false);
            toast.error("Не вдалось створити замовлення", {
                icon: "❌"
            })
        }
     }

     const onClickCountButton = (id: number, quantity: number, type: "plus" | "minus") => {
        const newQuantity = type === "plus" ? quantity + 1 : quantity - 1;
        updateItemQuantity(id, newQuantity);
    }


    return(
        <Container className="mt-10">
            <Title text="Оформлення замовлення" 
            className="font-extrabold mb-8 text-[36px]" />

            <FormProvider {...form} >
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="flex gap-10">
                        {/* Left part */}
                        <div className="flex flex-col gap-10 
                        flex-1 mb-20">
                            <CheckoutCart 
                            onClickCountButton={onClickCountButton}
                            removeCartItem={removeCartItem}
                            items={items}
                            loading={loading}
                            />

                            <CheckoutPersonalForm className={ loading ? 
                                "opacity-40 pointer-events-none" : ""}  />
                            
                            <CheckoutAddressForm className={ loading ? 
                                "opacity-40 pointer-events-none": ""
                             } />
                        </div>

                        {/* Right part */}
                        <CheckoutSidebar 
                        totalAmount={totalAmount} loading={loading || submitting} />
                    </div>
                </form>
            </FormProvider>
        </Container>
    )
}