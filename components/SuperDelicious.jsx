import recipes from "@/data/recipes.json";
import Image from "next/image";

import Link from "next/link";
const SuperDelicious = () => {
  const topRatingRecipes = recipes
    .sort((a, b) => b.rating.rating_count - a.rating.rating_count)
    .slice(0, 3);
  return (
    <section className="mb-16" id="super_delicious">
      <h2 className="text-3xl font-bold mb-8">Super Delicious</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {topRatingRecipes.map((recipe) => (
          <>
            <Link href={`/${recipe.category_id}/${recipe?.title}`}>
              <div key={recipe?.title}>
                <Image
                  src={`/assets/thumbs/${recipe?.thumbnail}`}
                  alt={recipe?.title}
                  className="w-full h-[300px] object-cover rounded-lg mb-4"
                  width="600"
                  height="300"
                />
                <h3 className="text-xl font-semibold mb-2">{recipe?.title}</h3>
                <div className="flex items-center text-yellow-500 mb-2">
                  {/* avarage rating calculation */}
                  {[...Array(Math.round(recipe.rating.average_rating))].map(
                    (_, i) => {
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        key={i}
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>;
                    }
                  )}
                </div>
                <p className="text-gray-600"> {recipe?.cooking_time}</p>
              </div>
            </Link>
          </>
        ))}
      </div>
    </section>
  );
};

export default SuperDelicious;
