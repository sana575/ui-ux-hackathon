import React from 'react';
import Image from 'next/image';
import { IoSearchSharp } from "react-icons/io5";
import Footer2 from '../components/Footer2';
import BreadCrumb from '../components/BreadCrumb';

const BlogPage = () => {
  return (
    <>
      {/* Banner Section */}
      <div>
      <BreadCrumb title="Blog" url="blog" />
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row lg:justify-between items-start lg:h-[2210px] px-4 lg:px-0">
        {/* Left Section */}
        <div className="lg:w-1/2 lg:ml-12">
          {/* Blog Post 1 */}
          <div className="group">
            <Image
              src={"/images/laptop.png"}
              alt="laptop-img"
              width={817}
              height={500}
              className="mt-8 lg:mt-28 w-full group-hover:scale-105 transition-transform duration-300"
            />
            <div className="flex items-center gap-2 lg:gap-4 mt-2">
              <Image src={"/images/user.png"} alt="user-img" width={20} height={20} />
              <h3 className="text-[#9F9F9F] text-sm lg:text-base">Admin</h3>
              <Image src={"/images/celander.png"} alt="calendar-img" width={20} height={20} />
              <h3 className="text-[#9F9F9F] text-sm lg:text-base">14 Oct 2022</h3>
              <Image src={"/images/wood.png"} alt="wood-img" width={20} height={20} />
              <h3 className="text-[#9F9F9F] text-sm lg:text-base">Wood</h3>
            </div>
            <h1 className="text-[20px] lg:text-[30px] font-semibold my-4 group-hover:text-[#B88E2F] transition-colors duration-300">
              Going all-in with millennial design
            </h1>
            <p className="text-[#9F9F9F] mb-8 text-sm lg:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus nostrum tenetur reiciendis velit voluptates quibusdam corrupti accusamus unde ex saepe cum architecto et porro deserunt cupiditate, minima magnam obcaecati ducimus.
            </p>
            <span className="border-b border-black text-sm hover:text-[#B88E2F] transition-colors duration-200 cursor-pointer">
              Read More
            </span>
          </div>

          {/* Blog Post 2 */}
          <div className="group mt-14">
            <Image
              src={"/images/drawing.png"}
              alt="drawing-img"
              width={817}
              height={500}
              className="w-full group-hover:scale-105 transition-transform duration-300"
            />
            <div className="flex items-center gap-2 lg:gap-4 mt-2">
              <Image src={"/images/user.png"} alt="user-img" width={20} height={20} />
              <h3 className="text-[#9F9F9F] text-sm lg:text-base">Admin</h3>
              <Image src={"/images/celander.png"} alt="calendar-img" width={20} height={20} />
              <h3 className="text-[#9F9F9F] text-sm lg:text-base">14 Oct 2022</h3>
              <Image src={"/images/wood.png"} alt="wood-img" width={20} height={20} />
              <h3 className="text-[#9F9F9F] text-sm lg:text-base">Wood</h3>
            </div>
            <h1 className="text-[20px] lg:text-[30px] font-semibold my-4 group-hover:text-[#B88E2F] transition-colors duration-300">
              Exploring new ways of decorating
            </h1>
            <p className="text-[#9F9F9F] mb-8 text-sm lg:text-base">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nostrum repellendus, blanditiis voluptates neque est laudantium, mollitia nisi aspernatur veritatis, beatae assumenda delectus. Ipsam esse sunt tempore, dolores aspernatur assumenda.
            </p>
            <span className="border-b border-black text-sm hover:text-[#B88E2F] transition-colors duration-200 cursor-pointer">
              Read More
            </span>
          </div>

          {/* Blog Post 3 */}
          <div className="group mt-14">
            <Image
              src={"/images/book.png"}
              alt="books-img"
              width={817}
              height={500}
              className="w-full group-hover:scale-105 transition-transform duration-300"
            />
            <div className="flex items-center gap-2 lg:gap-4 mt-2">
              <Image src={"/images/user.png"} alt="user-img" width={20} height={20} />
              <h3 className="text-[#9F9F9F] text-sm lg:text-base">Admin</h3>
              <Image src={"/images/celander.png"} alt="calendar-img" width={20} height={20} />
              <h3 className="text-[#9F9F9F] text-sm lg:text-base">14 Oct 2022</h3>
              <Image src={"/images/wood.png"} alt="wood-img" width={20} height={20} />
              <h3 className="text-[#9F9F9F] text-sm lg:text-base">Wood</h3>
            </div>
            <h1 className="text-[20px] lg:text-[30px] font-semibold my-4 group-hover:text-[#B88E2F] transition-colors duration-300">
              Handmade pieces that took time to make
            </h1>
            <p className="text-[#9F9F9F] mb-8 text-sm lg:text-base">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus inventore neque doloribus nisi perspiciatis ipsam ullam culpa, voluptatum tenetur molestiae saepe necessitatibus iusto, numquam nihil adipisci commodi vel dicta sed.
            </p>
            <span className="border-b border-black text-sm hover:text-[#B88E2F] transition-colors duration-200 cursor-pointer">
              Read More
            </span>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 lg:mr-20 lg:ml-20 mt-10 lg:mt-28">
          {/* Search Bar */}
          <div className="flex items-center justify-end w-full lg:w-[311px] h-[58px] border px-4 border-[#9F9F9F] rounded-md">
            <IoSearchSharp className="w-[25px] h-[25px]" />
          </div>

          {/* Categories */}
          <h1 className="text-[20px] lg:text-[24px] font-semibold mt-8">Categories</h1>
          <div className="space-y-4 lg:space-y-5 mt-3">
            {[
              { name: "Crafts", count: 2 },
              { name: "Design", count: 8 },
              { name: "Handmade", count: 7 },
              { name: "Interior", count: 1 },
              { name: "Wood", count: 6 },
            ].map((category) => (
              <div
                key={category.name}
                className="flex justify-between text-sm lg:text-base hover:text-[#B88E2F] transition-colors duration-200 cursor-pointer"
              >
                <h3>{category.name}</h3>
                <span>{category.count}</span>
              </div>
            ))}
          </div>

          {/* Recent Posts */}
          <h1 className="text-[24px] font-semibold mb-8 mt-10">Recent Posts</h1>
          <div className="space-y-6">
            {[
              { src: "/images/pick1.png", title: "Going all-in with millennial design" },
              { src: "/images/pick2.png", title: "Exploring new ways of decorating" },
              { src: "/images/pick3.png", title: "Handmade pieces that took time to make" },
              { src: "/images/pick4.png", title: "Modern home in Milan" },
              { src: "/images/pick5.png", title: "Colorful office redesign" },
            ].map((post, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-3 rounded-lg hover:bg-[#F9F1E7] transition-all duration-300 group cursor-pointer"
              >
                <Image
                  src={post.src}
                  alt={`post${index + 1}`}
                  width={80}
                  height={80}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
                <div className="flex flex-col">
                  <h1 className="font-semibold text-[14px] lg:text-[16px] group-hover:underline">
                    {post.title}
                  </h1>
                  <span className="text-[#9F9F9F] text-[12px] lg:text-[14px]">03 Aug 2022</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
     

      {/* Pagination */}
      <div className="flex items-center justify-center gap-2 mb-10 lg:gap-8">
        {["1", "2", "3", "Next"].map((item) => (
          <div
            key={item}
            className={`w-[40px] lg:w-[60px] h-[40px] lg:h-[60px] flex items-center justify-center ${
              item === "1"
                ? "bg-[#B88E2F] text-white"
                : "bg-[#F9F1E7]"
            } hover:scale-105 transition-transform duration-200 cursor-pointer`}
          >
            {item}
          </div>
          
        ))}
      </div>
      <Footer2 />
    </>
  );
};

export default BlogPage;
