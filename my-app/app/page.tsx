import { Container, Filters, ProductCard, ProductsGroupList, Title, TopBar } from "@/components/shared";

const productsItems = [
  {
    id: 1,
    name: "Бефстроганов",
    imageUrl: "https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif",
    price: 250,
    items: [{ price: 250 }]
  },
  {
    id: 1,
    name: "Бефстроганов",
    imageUrl: "https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif",
    price: 250,
    items: [{ price: 250 }]
  },
  {
    id: 1,
    name: "Бефстроганов",
    imageUrl: "https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif",
    price: 250,
    items: [{ price: 250 }]
  },
  {
    id: 1,
    name: "Бефстроганов",
    imageUrl: "https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif",
    price: 250,
    items: [{ price: 250 }]
  },
  {
    id: 1,
    name: "Бефстроганов",
    imageUrl: "https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif",
    price: 250,
    items: [{ price: 250 }]
  },

]

export default function Home() {
  return(
    <>
      <Container className="mt-10">
        <Title text="Всі піци" size="lg" 
        className="font-extrabold" />
      </Container>
      <TopBar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          <div className="w-[250px]">
            <Filters />
          </div>

          <div className="flex-1">
            <div className="flex flex-col gap-16">
                <ProductsGroupList 
                  title="Піци" 
                  items={ productsItems }
                  categoryId={1}
                />
                <ProductsGroupList 
                  title="Комбо"
                  items={ productsItems }
                  categoryId={2}
                />
            </div>
          </div>

        </div>
      </Container>
    </>
  )
}
