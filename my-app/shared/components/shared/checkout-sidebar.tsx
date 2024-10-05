import { ArrowRight, Package, Percent, Truck } from 'lucide-react';
import React from 'react';
import { Button, Skeleton } from '../ui';
import { cn } from '@/shared/lib/utils';
import { WhiteBlock } from './white-block';
import { CheckoutItemDetails } from './checkout-item-details';

const VAT = 15;
const DELIVERY_PRICE = 250;

interface Props {
    totalAmount: number;
    loading?: boolean;
    className?: string;
}


export const CheckoutSidebar: React.FC<Props> = ({className, totalAmount, loading}) => {

    const vatPrice = (totalAmount * VAT) / 100;
    const totalPrice = totalAmount + DELIVERY_PRICE + vatPrice;

    return(
        <div className="w-[450px]">
            <WhiteBlock className={cn("p-6 sticky top-4", className)}>
                <div className="flex flex-col gap-1">
                    <span className="text-xl">
                        Всього:
                    </span>
                    {
                        loading 
                        ? 
                        <Skeleton className="h-11 w-48" />
                        : 
                        <span className="h-11 text-[34px] 
                        font-extrabold">
                            { totalPrice } грн
                        </span>
                    }
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
                    value={loading 
                    ? <Skeleton className="h-6 w-16 rounded-[6px]" />
                    :`${totalAmount} грн`} />
                    <CheckoutItemDetails 
                    title={
                        <div className="flex items-center">
                            <Percent size={20} 
                            className="mr-2 text-gray-400" />
                            Податки: 
                        </div>
                    }
                    value={loading 
                        ? <Skeleton className="h-6 w-16 rounded-[6px]" />
                        :`${vatPrice} грн`}
                    />
                    <CheckoutItemDetails 
                    title={
                        <div className="flex items-center">
                            <Truck size={20} 
                            className="mr-2 text-gray-400" />
                                Доставка:
                        </div>
                    }
                    value={loading 
                        ? <Skeleton className="h-6 w-16 rounded-[6px]" />
                        :`${DELIVERY_PRICE} грн`}
                    />

                    <Button
                    loading={loading}
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
