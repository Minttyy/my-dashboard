import { Suspense } from "react";
import Products from "./Products";

export default function ProductList() {
  //const products = getProducts();
  return (
    <>
      <h1>Product List</h1>
      <Suspense fallback={<div>Loading...</div>}>
        {/* <Products products={products} /> */}
      </Suspense>
    </>
  );
}
