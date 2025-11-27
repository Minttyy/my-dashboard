"use client";

import { useSearchParams } from "next/navigation";

export default function CategoryFilter({
  uniqueCategories,
}: {
  uniqueCategories: string[];
}) {
  const searchParams = useSearchParams();
  function handleChange() {}
  return (
    <>
      <label htmlFor="category-select">Category Filter:</label>
      <select name="category" id="category-select" onChange={handleChange}>
        {uniqueCategories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </>
  );
}
