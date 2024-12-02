import Hero from "@/components/Hero";
import PopularCategory from "@/components/PopularCategory";
import SuperDelicious from "@/components/SuperDelicious";

export default function Home() {
  return (
    <main className="container mx-auto px-4 mt-[100px]">
      <Hero />
      <SuperDelicious />
      <PopularCategory />
      <section className="mb-16 bg-orange-100 p-8 rounded-lg overflow-hidden">
        <h2 className="text-3xl font-bold mb-4">Deliciousness to your inbox</h2>
        <p className="text-gray-600 mb-4">
          Enjoy weekly hand picked recipes and recommendations
        </p>
        <form className="flex flex-col md:flex-row gap-4">
          <input
            type="email"
            placeholder="Email Address"
            className="flex-grow px-4 py-2 rounded-full"
          />
          <button
            type="submit"
            className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600"
          >
            Join
          </button>
        </form>
      </section>
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 animate-fade-in-down">
          Hand-Picked Collections
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative group overflow-hidden rounded-lg transition-transform duration-300 ease-in-out transform cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1607247098731-5bf6416d2e8c?q=100&w=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Sushi Combos"
              className="w-full h-[400px] rounded-lg object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg transition-all duration-300 ease-in-out transform translate-y-full group-hover:translate-y-0">
              <h3 className="text-xl font-semibold mb-2">
                Sushi Combos for your Next Party
              </h3>
              <a
                href="./recipes.html"
                className="text-orange-300 hover:underline"
              >
                View Collection
              </a>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg transition-transform duration-300 ease-in-out transform cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1649402206323-9bca1d77d10e?q=100&w=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Everything Bagel"
              className="w-full h-[400px] rounded-lg object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg transition-all duration-300 ease-in-out transform translate-y-full group-hover:translate-y-0">
              <h3 className="text-xl font-semibold mb-2">Everything Bagel</h3>
              <a
                href="./recipes.html"
                className="text-orange-300 hover:underline"
              >
                View Collection
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Latest Recipes</h2>
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <img
              src="https://images.unsplash.com/photo-1559564121-d12c8f29e8cd?q=100&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Strawberry Cream"
              className="w-full h-[300px] object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">Strawberry Cream</h3>
            <p className="text-gray-600">Dessert</p>
          </div>
          <div>
            <img
              src="https://plus.unsplash.com/premium_photo-1664472634106-1430c3973e68?q=100&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Creamy Garlic Pasta"
              className="w-full h-[300px] object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">Creamy Garlic Pasta</h3>
            <p className="text-gray-600">Pasta</p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1694067508035-6cccccb95cb0?q=100&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Blueberry Muffins"
              className="w-full h-[300px] object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">Blueberry Muffins</h3>
            <p className="text-gray-600">Breakfast</p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=100&w=1671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Chicken Tikka Masala"
              className="w-full h-[300px] object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">Chicken Tikka Masala</h3>
            <p className="text-gray-600">Dinner</p>
          </div>
        </div>
      </section>
    </main>
  );
}
