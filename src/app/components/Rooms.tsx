import Image from 'next/image';
import Link from 'next/link';

export default function Rooms() {
  return (
    <div className='h-auto bg-[#FCF8F3] mt-10 flex flex-col lg:flex-row items-center justify-around'>
      <div className='text-center lg:text-left px-6 lg:px-0'>
        <h1 className='text-[32px] sm:text-[36px] md:text-[40px] font-bold w-[90%] md:w-[422px]'>
          50+ Beautiful rooms inspiration
        </h1>
        <p className='text-[14px] sm:text-[16px] mt-4 md:mt-6 w-[90%] md:w-[368px]'>
          Our designer already made a lot of beautiful prototypes of rooms that inspire you.
        </p>
        <button className='w-[70%] md:w-[176px] h-[48px] bg-[#B88E2F] text-[#FFFFFF] mt-8'>
          <Link href="/shop">
            <span className="text-lg font-medium text-gray-900 block">Explore More</span>
          </Link>
        </button>
      </div>
      <div className='mt-8 lg:mt-0'>
        <Image
          src="/images/img6.png"
          alt="room img"
          width={404}
          height={582}
          className="w-full lg:w-[404px] lg:h-[582px]"
        />
      </div>

      <div className='mt-8 lg:mt-0 mr-6'>
        <Image
          src="/images/img5.png"
          alt="room img"
          width={372}
          height={486}
          className="w-full lg:w-[372px] lg:h-[486px]"
        />
      </div>
    </div>
  );
}
