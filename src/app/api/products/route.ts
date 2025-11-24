export async function GET() {
  const res = await fetch("https://dummyjson.com/test");
  const data = await res.json();

  return Response.json({ data });
}
