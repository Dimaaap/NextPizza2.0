import { ArrowRight, Package, Percent, Truck } from 'lucide-react';
import React from 'react';
import { Button } from '../ui';
import { CheckoutItemDetails, WhiteBlock } from '.';
import { cn } from '@/shared/lib/utils';

const VAT = 15;
const DELIVERY_PRICE = 250;

interface Props {
    totalAmount: number;
    className?: string;
}


export const CheckoutSidebar: React.FC<Props> = ({className, totalAmount}) => {

    const vatPrice = (totalAmount * VAT) / 100;
    const totalPrice = totalAmount + DELIVERY_PRICE + vatPrice;

    return(
        <div className="w-[450px]">
            <WhiteBlock className={cn("p-6 sticky top-4", className)}>
                <div className="flex flex-col gap-1">
                    <span className="text-xl">
                        Всього:
                    </span>
                    <span className="text-[34px] 
                    font-extrabold">
                        { totalPrice } грн
                    </span>
                </div>

                <CheckoutItemDetails 
                    title={
                    <div className="flex items-center">
                        <Package size={20}
                        className="mr-2 
                        text-gray-300" />
                        Вартість кошика:
                    </div>
                    } 
                    value={`${totalAmount} грн`} />
                    <CheckoutItemDetails 
                    title={
                        <div className="flex items-center">
                            <Percent size={20} 
                            className="mr-2 text-gray-400" />
                            Податки: 
                        </div>
                    }
                    value={`${vatPrice} грн`}
                    />
                    <CheckoutItemDetails 
                    title={
                        <div className="flex items-center">
                            <Truck size={20} 
                            className="mr-2 text-gray-400" />
                                Доставка:
                        </div>
                    }
                    value={`${DELIVERY_PRICE} грн`}
                    />

                    <Button
                    type="submit"
                    className="w-full h-14 rounded-2xl 
                    mt-6 text-base font-bold">
                        Перейти до оплати
                        <ArrowRight className="w-5 ml-2" />
                    </Button>
                </WhiteBlock>
            </div>
    )
}
