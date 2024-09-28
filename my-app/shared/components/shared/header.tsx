import { cn } from "@/shared/lib/utils";
import React from "react";
import { Container } from "./container";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui";
import { ArrowRight, ShoppingCart, User } from "lucide-react";
import { SearchInput } from "./search-input";
import { CartButton } from "./cart-button";


interface Props {
    className?: string
}

export const Header: React.FC<Props> = ({ className }) => {
    return(
        <header className={
        cn("border border-b", 
        className)}>
            <Container className="flex items-center 
            justify-between py-8">

                {/* Left Part */}
                <Link href="/">
                    <div className="flex items-center gap-4">
                        <Image src="/logo.png" alt="logo"
                        width={35} height={35} />
                        <div>
                            <h1 className="text-2xl uppercase 
                            font-black">
                                Next Pizza
                            </h1>
                            <p className="text-sm text-gray-400 
                            leading-3">
                                Смачніше вже нікуди
                            </p>
                        </div>
                    </div>
                </Link>

                <div className="mx-10 flex-1">
                    <SearchInput />
                </div>
                
                {/* Right Part */}
                <div className="flex items-center gap-3">
                    <Button variant="outline"
                    className="flex items-center gap-1">
                        <User size={16} />
                        Увійти
                    </Button>

                    <div>
                        <CartButton />
                    </div>
                </div>
            </Container>
        </header>
    )
}