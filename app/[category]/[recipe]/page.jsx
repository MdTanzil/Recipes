import recipes from "@/data/recipes.json";
import Image from "next/image";
import Link from "next/link";

const RecipePage = ({ params }) => {
  const recipe = decodeURIComponent(params.recipe);
  const findRecipe = recipes.find((rp) => rp.title == recipe);
  const recipeCategoryId = findRecipe.category_id;
  let recipeCategory = recipes.filter(
    (rec) => rec.category_id == recipeCategoryId
  );
  if (findRecipe) {
    recipeCategory = recipeCategory.filter(
      (rec) => rec.title !== findRecipe.title
    );
  }
  if (recipeCategory.length > 4) {
    recipeCategory = recipeCategory.slice(0, 4);
  }

  const youMayLike = recipeCategory.map((rec) => (
    <Link key={rec.title} href={`/${rec.category_id}/${rec?.title}`}>
      <div>
        <Image
          src={`/assets/thumbs/${rec?.thumbnail}`}
          alt={rec?.title}
          height={240}
          width={400}
          class="w-full h-60 object-cover rounded-lg mb-2"
        />
        <h3 class="font-semibold">{rec.title}</h3>
      </div>
    </Link>
  ));

  return (
    <main className="container mx-auto px-4 mt-[100px]">
      <article>
        <h1 class="text-4xl md:text-5xl font-bold mb-6">{findRecipe?.title}</h1>
        <div class="flex items-center space-x-4 mb-6">
          <Image
            src={`/assets/thumbs/${findRecipe?.thumbnail}`}
            alt={findRecipe?.title}
            class="w-8 h-8 rounded-full"
            height={32}
            width={32}
          />
          <span class="text-gray-600">{findRecipe?.author}</span>
          <span class="text-gray-400">|</span>
          <span class="text-gray-600">{findRecipe?.cooking_time}</span>
          <span class="text-gray-400">|</span>
          <span class="text-gray-600">{findRecipe?.published_date}</span>
        </div>
        <div class="flex justify-between items-center mb-8">
          <div class="flex space-x-4">
            <button class="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 inline-block mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
              </svg>
              Share
            </button>
            <button class="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 inline-block mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
              </svg>
              Save
            </button>
          </div>
        </div>
        <Image
          src={`/assets/thumbs/${findRecipe?.thumbnail}`}
          alt={findRecipe?.title}
          class="w-full h-auto mb-8 rounded-lg"
          height={150}
          width={800}
        />
        <p class="text-gray-600 mb-8">{findRecipe?.description}</p>
      </article>

      <section class="my-12">
        <h2 class="text-3xl font-bold mb-8">You might also like</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          {recipeCategory.length > 0 ? (
            recipeCategory?.map((rec) => (
              <Link key={rec.title} href={`/${rec.category_id}/${rec?.title}`}>
                <div>
                  <Image
                    src={`/assets/thumbs/${rec?.thumbnail}`}
                    alt={rec?.title}
                    height={240}
                    width={400}
                    class="w-full h-60 object-cover rounded-lg mb-2"
                  />
                  <h3 class="font-semibold">{rec.title}</h3>
                </div>
              </Link>
            ))
          ) : (
            <p>Do not have any related recipes</p>
          )}
        </div>
      </section>
    </main>
  );
};

export default RecipePage;
