import React, { useState } from "react";
import { AddressSuggestions } from "react-dadata";
import "react-dadata/dist/react-dadata.css";

interface Props {
    onChange?: (value?: string) => void;
}

export const AddressInput: React.FC<Props> = ({ onChange }) => {
    return (
        <AddressSuggestions
            token=""
            onChange={(data: { value: string | undefined; }) => onChange?.(data?.value)}
        />
    )
}
