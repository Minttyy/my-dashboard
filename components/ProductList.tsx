import { Suspense } from "react";
import { getProducts } from "../lib/useProducts";

export default async function ProductList() {
  const products = await getProducts();
  return (
    <>
      <h1>Product List</h1>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <ul>
            {products.map((product) => (
              <li key={product.id}>{product.title}</li>
            ))}
          </ul>
        </Suspense>
      </div>
    </>
  );
}
