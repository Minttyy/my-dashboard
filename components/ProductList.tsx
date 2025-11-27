import { Suspense } from "react";
import { getProducts } from "../lib/getProducts";
import CategoryFilter from "./CategoryFilter";

export default async function ProductList() {
  const products = await getProducts();
  const categories = products.map((product) => product.category);
  const uniqueCategories = [...new Set(categories)];

  return (
    <>
      <div className="flex flex-col p-10">
        <h1 className="text-5xl">Product List</h1>
        <CategoryFilter uniqueCategories={uniqueCategories} />
        <div className="p-10">
          <Suspense fallback={<div>Loading...</div>}>
            <ul>
              {products.map((product) => (
                <li key={product.id}>{product.title}</li>
              ))}
            </ul>
          </Suspense>
        </div>
      </div>
    </>
  );
}
