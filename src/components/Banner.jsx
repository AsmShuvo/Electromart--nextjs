import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";

const Banner = () => {
    return (
        <div className='pt-20 text-center space-y-4'>
            <h1 className="text-7xl font-extrabold font-serif text-[#1DED81]">ElectroMart</h1>
            <hr className='w-24 border-4  text-[#1DED81] border-[#1DED81] rounded-full mx-auto' />
            <h3 className='text-gray-300 text-xl font-semibold'>ElectroMart is a simple fullstack e-commerce website demo built with Next.js</h3>
            <Link href={"#"}><button className='btn mt-6 mb-2 btn-outline text-white border-2'>Check the Source Code <FiExternalLink /> </button></Link>
            <hr className='w-24 border-4  text-[#1DED81] border-[#1DED81] rounded-full mx-auto' />
            <Link href={"/products"}><button className='btn btn-sm mt-6 text-black bg-[#1DED81]'>Browse Store</button></Link>

        </div>
    );
};

export default Banner;