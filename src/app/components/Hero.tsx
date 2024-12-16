import Image from "next/image";

export default function Hero() {
  return (
    <section>
      <div className="relative overflow-x-hidden">
        {/* Container for the image */}
        <div className="relative w-full">
          {/* Responsive image */}
          <Image
            src="/hero.png"
            alt="Hero Image"
            width={1440}
            height={100}
            priority
            className="w-full h-auto"
          />

          {/* Hero Text Section */}
          <div className="bg-[#FFF3E3] w-[90%] md:w-[34rem] absolute top-[20%] left-[50%] transform -translate-x-1/2 md:translate-x-0 rounded-md p-6 md:p-16">
            <h6 className="font-bold text-lg md:text-xl">New Arrival</h6>
            <div className="text-[#B88E2F] font-poppins font-extrabold text-4xl">
              <h3>Discover Our</h3>
              <h3>New Collection</h3>
            </div>
            <p className="leading-loose font-poppins font-medium text-sm:hidding md:text-base mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque dolore
            </p>
            <button className="mt-6 bg-[#B88E2F] px-6 py-3 md:px-12 md:py-4 text-white rounded hover:bg-[#cda454] transition-all duration-300 ease-in-out">
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
