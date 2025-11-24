import { use } from "react";

export default function Products({
  products,
}: {
  products: Promise<{ id: string; title: string }[]>;
}) {
  const allProducts = use(products);

  return (
    <ul>
      {allProducts.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  );
}
