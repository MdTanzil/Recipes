import recipes from "@/data/recipes.json";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  const totalRecipes = recipes.length;
  const randomNumber = Math.floor(Math.random() * (recipes.length - 1));
  const randomRecipe = recipes[randomNumber];
  return (
    <section className="mb-16 bg-orange-50">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <Image
            src={`/assets/thumbs/${randomRecipe?.thumbnail}`}
            className="w-full h-[450px] object-cover rounded-lg"
            alt={randomRecipe?.title}
            width="600"
            height="450"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-4">{randomRecipe?.title}</h1>
          <p className="text-gray-600 mb-4">{randomRecipe?.description}</p>
          <Link
            href={`/${randomRecipe.category_id}/${randomRecipe?.title}`}
            className="bg-orange-500 text-white px-6 py-2 rounded-full inline-block hover:bg-orange-600"
          >
            View Recipe
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
