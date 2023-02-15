import { useRouter } from "next/router"
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product"

export default function Product() {
  const { query } = useRouter()

  return (
    <ProductContainer>
      <ImageContainer>

      </ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>

        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta sit ad alias quasi ipsum a assumenda perspiciatis neque doloribus reprehenderit nesciunt labore iusto recusandae voluptatem ratione ab, expedita illum ut.</p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}