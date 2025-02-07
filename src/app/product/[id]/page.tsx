
// // app/product/[id]/page.tsx (Server Component)
// import { client } from "@/sanity/lib/client";
// import ProductDetailsClient from "./../../components/ProductDetailsClient";

// interface ProductDetailProps {
//   params: {
//     id: string;
//   };
// }
// //props ko hi de structure kar ke params ko nikala he .perams me id he jo ki string he.

// const ProductDetailPage = async ({ params }: ProductDetailProps) => {
//   const product = await client.fetch(
//     `
//     *[_type == "product" && _id == $id][0] {
//       _id,
//       title,
//       description,
//       "imageUrl": productImage.asset->url,
//       price,
//       discountPercentage,
//       tages,
//       isNew
//     }
//     `,
//     { id: params.id }
//   );

//   if (!product) {
//     return (
//       <div className="text-center py-20">
//         <h2 className="text-xl font-bold text-gray-800">Product Not Found</h2>
//         <p className="text-gray-600 mt-4">
//           The product you are looking for does not exist.
//         </p>
//       </div>
//     );
//   }

//   return <ProductDetailsClient product={product} params={params} />;
// };

// export default ProductDetailPage;

//====================================================//
// app/product/[id]/page.tsx (Server Component)
import { client } from "@/sanity/lib/client";
import ProductDetailsClient from "./../../components/ProductDetailsClient";

interface ProductDetailProps {
  params: Promise<{
    id: string;
     }>; 
    
  
}

const ProductDetailPage = async  ({ params }: ProductDetailProps) => {
  try {
    const product = await client.fetch(
      `
      *[_type == "product" && _id == $id][0] {
        _id,
        title,
        description,
        "imageUrl": productImage.asset->url,
        price,
        discountPercentage,
        tages,
        isNew
      }
      `,
      { id: (await params).id }
    );

    if (!product) {
      return (
        <div className="text-center py-20">
          <h2 className="text-xl font-bold text-gray-800">Product Not Found</h2>
          <p className="text-gray-600 mt-4">
            The product you are looking for does not exist.
          </p>
        </div>
      );
    }

    return <ProductDetailsClient product={product} params={params} />;

  //   searchParams: Promise<{
  //     query: string;
  // }>;
  } catch (error) {
    console.error("Error fetching product:", error);
    return (
      <div className="text-center py-20">
        <h2 className="text-xl font-bold text-red-600">Error Loading Product</h2>
        <p className="text-gray-600 mt-4">
          Please try again later or contact support.
        </p>
      </div>
    );
  }
};

export default ProductDetailPage;