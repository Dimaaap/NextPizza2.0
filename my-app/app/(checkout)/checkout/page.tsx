"use client";

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckoutAddressForm, CheckoutCart, CheckoutPersonalForm, CheckoutSidebar, Container, Title } from "@/shared/components/shared";
import { useCart } from "@/shared/hooks";
import { checkoutFormSchema, TCheckoutFormValues } from "@/shared/components/shared/checkout/checkout-form-schema";


export default function CheckoutPage() {
    
    const { totalAmount, updateItemQuantity, 
        items, removeCartItem
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

     const onSubmit = (data: TCheckoutFormValues) => {
        console.log(data);
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
                            />

                            <CheckoutPersonalForm />
                            
                            <CheckoutAddressForm />
                        </div>

                        {/* Right part */}
                        <CheckoutSidebar totalAmount={totalAmount} />
                    </div>
                </form>
            </FormProvider>
        </Container>
    )
}