// app/page.tsx
import Hero from "./components/Hero";
import BrowseTheRang from "./components/BrowseTheRang";
import Rooms from "./components/Rooms";
import GridGallery from "./components/GridGallery";
import { getProducts } from "@/sanity/queries/product"; // Ensure this is fetching multiple products
import ProductListing from "./components/productlisting";
import { IProduct } from "@/types";
import Footer2 from "./components/Footer2";

export default async function Home() {
  // Fetch products from Sanity
  const products = await getProducts();
  return (
    <main>
      <Hero />
      <BrowseTheRang />
      
      {/* Products Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product: IProduct) => (
            <ProductListing key={product._id} product={product} />
          ))}
        </div>
      </section>
      <Rooms />
      <GridGallery />
      <Footer2 />
    </main>
  );
}
