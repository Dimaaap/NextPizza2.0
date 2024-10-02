import { z } from "zod";

export const checkoutFormSchema = z.object({
    firstName: z.string().min(2, 
        { message: "Ім'я повинне містити не менше 2-ох символів"}),
    lastName: z.string().min(2, 
        { message: "Прізвище повинне містити не менше 2-ох символів"}),
    email: z.string().email({ message: "Введіть коректну пошту" }),
    phone: z.string().min(10, 
        { message: "Введіть коректний номер телефону" }),
    address: z.string().min(5, 
        {message: "Введіть коректну адресу"}),
    comment: z.string().optional()
})

export type TCheckoutFormValues = z.infer<typeof checkoutFormSchema>;