
import Image from "next/image";

export default function GridGallery() {
  return (
    <section className="max-w-screen-xl mx-auto p-6">
      <h1 className="text-3xl text-center font-extrabold mb-2">
        #FuniroFurniture
      </h1>
      <h2 className="text-gray-500 text-center mb-6 text-lg">
        Share your setup with
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-8 gap-2">
        {/* First Image - Taller */}
        <div className="relative col-span-1 row-span-2">
          <Image
            src="/furnitur1.png"
            alt="Desk setup"
            layout="responsive"
            width={400}
            height={600}
            className="object-cover rounded-lg"
          />
        </div>
        {/* Second Image */}
        <div className="relative col-span-3">
          <Image
            src="/furnitur2.png"
            alt="Living room"
            layout="responsive"
            width={400}
            height={300}
            className="object-cover rounded-lg"
          />
        </div>
        {/* Third Image */}
        <div className="relative col-span-4">
          <Image
            src="/furnitur3.png"
            alt="Living room decor"
            layout="responsive"
            width={400}
            height={250}
            className="object-cover rounded-lg"
          />
        </div>
        {/* Fourth Image - Larger */}
        <div className="relative col-span-2">
          <Image
            src="/furnitur5.png"
            alt="Main image"
            layout="responsive"
            width={600}
            height={400}
            className="object-cover rounded-lg"
          />
        </div>
        {/* Fifth Image */}
        <div className="relative col-span-2">
          <Image
            src="/furnitur6.png"
            alt="Desk"
            layout="responsive"
            width={400}
            height={350}
            className="object-cover rounded-lg"
          />
        </div>
        {/* Sixth Image */}
          <div className="relative row-span-3">
          <Image
            src="/furnitur4.png"
            alt="Wall decor"
            layout="responsive"
            width={400}
            height={200}
            className="object-cover rounded-lg"
          />
        </div>
        <div className="relative col-span-2">
          <Image
            src="/furnitur7.png"
            alt="Wall decor"
            layout="responsive"
            width={400}
            height={200}
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
