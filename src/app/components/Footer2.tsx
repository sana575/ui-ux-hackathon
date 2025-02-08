import Image from "next/image";

export default function Footer2() {
  return (
    <section className="bg-[#FAF3EA] p-11">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-10 lg:gap-20 text-center lg:text-left">
          {/* Feature Item */}
          {[
            {
              imgSrc: "/Tofi.png",
              alt: "High Quality",
              title: "High Quality",
              description: "Crafted from top materials",
            },
            {
              imgSrc: "/guarantee.png",
              alt: "Warranty Protection",
              title: "Warranty Protection",
              description: "Over 2 years",
            },
            {
              imgSrc: "/shipping.png",
              alt: "Free Shipping",
              title: "Free Shipping",
              description: "Orders over $150",
            },
            {
              imgSrc: "/customer-support.png",
              alt: "24/7 Support",
              title: "24/7 Support",
              description: "Dedicated support",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="flex flex-nowrap items-center gap-x-4 lg:gap-x-6 max-w-[300px]"
            >
              <Image
                src={feature.imgSrc}
                alt={feature.alt}
                width={53}
                height={60}
                className="w-[52.77px] h-[60px] shrink-0"
              />
              <div className="flex-shrink truncate">
                <h2 className="text-[16px] sm:text-[18px] lg:text-[20px] font-semibold leading-tight">
                  {feature.title}
                </h2>
                <span className="text-[12px] sm:text-[14px] lg:text-[16px] text-[#898989] leading-tight">
                  {feature.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
