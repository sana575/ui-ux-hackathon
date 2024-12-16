import Hero from "./components/Hero";
import BrowseTheRang from "./components/BrowseTheRang";
import Product from "./components/Product";

import Rooms from "./components/Rooms";
import GridGallery from "./components/GridGallery";

export default function Home() {
  return (
    <main>
      <Hero />
      <BrowseTheRang />
      <Product />
      <Rooms />
      <GridGallery />
    </main>
  );
}
