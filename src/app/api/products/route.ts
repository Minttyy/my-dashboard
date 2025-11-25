export async function GET() {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  const stringData = JSON.stringify(data);

  return new Response(stringData);
}
