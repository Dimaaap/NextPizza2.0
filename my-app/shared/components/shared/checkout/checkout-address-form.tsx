import React from "react";
import { WhiteBlock } from "../white-block";
import { FormTextarea } from "../form-components";
import { ErrorText } from "../error-text";
import AddressInput from "../address-input";
import { Controller, useFormContext } from "react-hook-form";

interface Props {
    className?: string;
}

export const CheckoutAddressForm: React.FC<Props> = ({ className }) => {
    const { control } = useFormContext();
    
    return (
        <WhiteBlock title="3. Адреса доставки" className={className}>
            <div className="flex flex-col gap-5">

                <Controller
                control={control}
                name="address"
                render={({ field, fieldState }) => <>
                    <AddressInput onChange={ field.onChange } />
                    { fieldState.error && <ErrorText text={fieldState.error.message} /> }
                </>
                
                } />

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