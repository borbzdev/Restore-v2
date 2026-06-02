
import type { Product } from "../../app/models/product";
import ProductList from "./ProductList";

type Props = {
    products: Product[];
}

export default function Catalog({ products }: Props) {
  //const { products, addProduct } = props;

  return (
    <>
        <ProductList products={products}/>
    </>
    
  )
}