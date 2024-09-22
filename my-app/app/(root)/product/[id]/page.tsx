import { Container, GroupVariants, ProductImage, Title } from "@/shared/components/shared"
import { prisma } from "@/prisma/prisma-client"
import { notFound } from "next/navigation"

export default async function ProductPage({ params: { id }}: 
    { params: { id: string } }){

        const product = await prisma.product.findFirst({
            where: { id: Number(id) }
        })

        const variants = [
            {
                name: "Маленька",
                value: "1"
            }, 
            {
                name: "Середня",
                value: "2"
            },
            {
                name: "Велика", 
                value: "3"
            }
        ]

        if(!product){
            return notFound()
        }

        return (
            <Container className="flex flex-col 
            my-10">
                <div className="flex flex-1">
                    <ProductImage imageUrl={product.imageUrl}
                        size={40}
                        className=""
                    />
                    <div className="w-[490px] 
                    bg-[#F7f6f5] p-7">
                        <Title text={product.name} 
                            size="md" className="font-extrabold 
                            mb-1"
                        />
                        <p className="text-gray-400">
                            Lorem ipsum, dolor sit amet 
                            consectetur
                        </p>

                        <GroupVariants 
                        selectedValue="2"
                        items={ variants } />
                    </div>
                </div>
            </Container>
    )
}