export async function getProducts(): Promise<
  { id: string; title: string; category: string }[]
> {
  const jsonData = await fetch("http://localhost:3000/api/products").then((r) =>
    r.json()
  );
  const products = jsonData.products;

  return products.map(
    (product: { id: string; title: string; category: string }) => {
      return {
        id: product.id,
        title: product.title,
        category: product.category,
      };
    }
  );
}
