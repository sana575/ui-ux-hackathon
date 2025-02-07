
"use client";

interface FilterSearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  categories: string[];
}

const FilterSearchBar: React.FC<FilterSearchBarProps> = ({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  categories,
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-8 p-4 bg-gray-50 rounded-lg">
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <label htmlFor="category-select" className="sr-only">Select Category</label>
      <select
        id="category-select"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="all">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterSearchBar;







// "use client";

// interface FilterSearchBarProps {
//   searchQuery: string;
//   setSearchQuery: (query: string) => void;
//   selectedProduct: string;
//   setSelectedProduct: (product: string) => void;
//   priceRange: string;
//   setPriceRange: (range: string) => void;
//   products: string[];
// }

// const FilterSearchBar: React.FC<FilterSearchBarProps> = ({
//   searchQuery,
//   setSearchQuery,
//   selectedProduct,
//   setSelectedProduct,
//   priceRange,
//   setPriceRange,
//   products,
// }) => {
//   // price range options
//   const priceOptions = [
//     { value: "all", label: "All Prices" },
//     { value: "0-100", label: "Under Rs,100" },
//     { value: "100-500", label: "Rs,100 - Rs,300" },
//     { value: "500-1000", label: "Rs,400 - Rs,500" },
//     { value: "1000-", label: "Over Rs,1000" },
//   ];

//   return (
//     <div className="flex flex-col md:flex-row gap-4 mb-8 p-4 bg-gray-50 rounded-lg shadow-sm">
//       {/* search product*/}
//       <div className="flex-1">
//         <label htmlFor="product-search" className="sr-only">
//           Search products
//         </label>
//         <input
//           id="product-search"
//           type="text"
//           placeholder="Search products..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
//         />
//       </div>

//       {/* select product */}
//       <div className="min-w-[200px]">
//         <label htmlFor="product-select" className="sr-only">
//           Select product
//         </label>
//         <select
//           id="product-select"
//           value={selectedProduct}
//           onChange={(e) => setSelectedProduct(e.target.value)}
//           className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 bg-white"
//           disabled={products.length === 0}
//         >
//           <option value="all">All Products</option>
//           {products.map((product) => (
//             <option key={product} value={product}>
//               {product}
//             </option>
//           ))}
//         </select>
//         {products.length === 0 && (
//           <p className="text-red-500 text-sm mt-1">No products available</p>
//         )}
//       </div>

//       {/* प्select price rang*/}
//       <div className="min-w-[200px]">
//         <label htmlFor="price-range" className="sr-only">
//           Select price range
//         </label>
//         <select
//           id="price-range"
//           value={priceRange}
//           onChange={(e) => setPriceRange(e.target.value)}
//           className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 bg-white"
//         >
//           {priceOptions.map((option) => (
//             <option key={option.value} value={option.value}>
//               {option.label}
//             </option>
//           ))}
//         </select>
//       </div>
//     </div>
//   );
// };

// // export default FilterSearchBar;











