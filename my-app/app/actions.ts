"use server";

import { prisma } from "@/prisma/prisma-client";
import { TCheckoutFormValues } from "@/shared/components/shared/checkout/checkout-form-schema";
import { PayOrderTemplate } from "@/shared/components/shared/email-templates/pay-order";
import { sendEmail } from "@/shared/lib";
import { OrderStatus } from "@prisma/client";
import { cookies } from "next/headers";


export async function createOrder(data: TCheckoutFormValues){
    try {
        const cookieStore = cookies();
        const cartToken = cookieStore.get("cartToken")?.value;

        if(!cartToken){
            throw new Error("Cart token not found");
        }

        const userCart = await prisma.cart.findFirst({
            include: {
                user: true,
                items: {
                    include: {
                        ingredients: true,
                        productItem: {
                            include: {
                                product: true
                            }
                        }
                    }
                }, 
            },
            where: {
                token: cartToken
            }
        })

        if (!userCart){
            throw new Error("Cart not found");
        }

        if(userCart?.totalAmount === 0){
            throw new Error("Cart is empty");
        }

        const order = await prisma.order.create({
            data: {
                token: cartToken,
                fullName: data.firstName + " " + data.lastName,
                email: data.email,
                phone: data.phone,
                address: data.address,
                comment: data.comment,
                totalAmount: userCart.totalAmount,
                status: OrderStatus.PENDING,
                items: JSON.stringify(userCart.items)
            }
        });

        await prisma.cart.update({
            where: {
                id: userCart.id,
            },
            data: {
                totalAmount: 0,
            }
    });

    await prisma.cartItem.deleteMany({
        where: {
            cartId: userCart.id
        }
    })

    //TODO: Зробити створення посилання оплати

    await sendEmail(
        data.email, 
        "Next Pizza / Оплатіть замовлення №" + order.id, 
        PayOrderTemplate({
            orderId: order.id,
            totalAmount: order.totalAmount,
            paymentUrl: "https://resend.com/docs/send-with-nextjs#next-js"
        }));

    } catch (err){
        console.log("[CreateOrder] Server error", err);

    }
}