import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative max-w-auto h-screen overflow-hidden">
      <div className="relative w-full h-full">
        {/* Fullscreen Image */}
        <Image
          src="/hero.png"
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          priority
        />

        {/* Hero Text Section */}
        <div className="absolute top-[20%] left-[50%] transform -translate-x-1/2 md:translate-x-0 bg-[#FFF3E3] w-[90%] md:w-[34rem] rounded-md p-6 md:p-16">
          <h6 className="font-bold text-lg md:text-xl">New Arrival</h6>
          <div className="text-[#B88E2F] font-poppins font-extrabold text-4xl">
            <h3>Discover Our</h3>
            <h3>New Collection</h3>
          </div>
          <p className="leading-loose font-poppins font-medium text-sm md:text-base mt-4">
          Discover modern designs crafted for sophistication and comfort.
          </p>
          <button className="mt-6 bg-[#B88E2F] px-6 py-3 md:px-12 md:py-4 text-white rounded hover:bg-[#cda454] transition-all duration-300 ease-in-out">
            <Link href="/shop">
              <span className="text-lg font-medium text-gray-900 block">BUY NOW</span>
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
}
