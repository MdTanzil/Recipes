import category from "@/data/categories.json";
import recipes from "@/data/recipes.json";
import Image from "next/image";
import Link from "next/link";

const PopularCategory = () => {
  // Step 1: Group recipes by category_id
  const categoryCounts = recipes.reduce((acc, recipe) => {
    const categoryId = recipe.category_id;
    acc[categoryId] = (acc[categoryId] || 0) + 1;
    return acc;
  }, {});

  // Step 2: Sort categories by count in descending order
  const topCategoriesIds = Object.entries(categoryCounts)
    .sort((a, b) => b[1] - a[1]) // Sort by count
    .slice(0, 6) // Get top 8 categories
    .map(([categoryId]) => categoryId); // Extract category_id

  const topCategories = category.filter((cat) =>
    topCategoriesIds.includes(cat.id)
  );

  return (
    <section className="mb-16">
      <div className="flex justify-between items-top">
        <h2 className="text-3xl font-bold mb-8">Popular Categories</h2>
        <Link href="/categories" className="text-orange-500">
          View All
        </Link>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
        {topCategories.map((cat) => (
          <div className="cursor-pointer text-center group" key={cat.id}>
            <div className="overflow-hidden rounded-full mb-2 w-20 h-20 mx-auto">
              <Image
                src={`/assets${cat?.image}`}
                alt="Breakfast"
                height={200}
                width={200}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <p className="transition-transform duration-300 group-hover:scale-105">
              {cat?.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularCategory;
