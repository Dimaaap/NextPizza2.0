import React from "react";
import { FormTextarea, WhiteBlock } from "..";
import { Input, Textarea } from "../../ui";

interface Props {
    className?: string;
}

export const CheckoutAddressForm: React.FC<Props> = ({ className }) => {
    return (
        <WhiteBlock title="3. Адреса доставки">
            <div className="flex flex-col gap-5">
                <Input name="address" className="text-base" 
                placeholder="Введіть адресу..." />
                <FormTextarea
                    name="comment" 
                    rows={5}
                    className='text-base' 
                    placeholder="Коментар до замовлення"
                />
            </div>
        </WhiteBlock>
    )
}