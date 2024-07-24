import { FaCheck, FaTimes } from 'react-icons/fa'
export default function page() {
    return (
        <div className="w-full min-h-[80vh] grid grid-cols-4 justify-center items-center content-center dark:bg-black dark:text-white pt-20 px-3 text-center text-xs md:text-lg lg:text-xl xl:text-2xl">
            <div className="">
                <div className='h-20'></div>
                <div className='h-20 border-b flex justify-center items-center font-semibold'>Duration</div>
                <div className='h-20 border-b flex justify-center items-center font-semibold'>Price</div>
                <div className='h-20 border-b flex justify-center items-center font-semibold'>Access</div>
                <div className='h-20 border-b flex justify-center items-center font-semibold'>personal training</div>
                <div className='h-20 border-b flex justify-center items-center font-semibold'>Equipment</div>
                <div className='h-20 border-b flex justify-center items-center font-semibold'>locker rentals</div>
                <div className='h-20  flex justify-center items-center font-semibold'>group fitness classes</div>
            </div>
            <div className=" bronze">
                <div className='h-20  bg-orange-600 flex justify-center items-center text-black rounded-tl-2xl font-bold'>Bronze Tier</div>
                <div className='h-20 border flex justify-center items-center'>1 month</div>
                <div className='h-20 border flex justify-center items-center'>$29</div>
                <div className='h-20 border flex justify-center items-center'>24-hour</div>
                <div className='h-20 border flex justify-center items-center'><FaTimes className='text-red-300'/></div>
                <div className='h-20 border flex justify-center items-center'><FaCheck  className='text-green-300'/></div>
                <div className='h-20 border flex justify-center items-center'><FaTimes className='text-red-300'/></div>
                <div className='h-20 border flex justify-center items-center'><FaTimes className='text-red-300'/></div>
            </div>
            <div className=" silver">
                <div className='h-20  bg-gray-300 flex justify-center items-center text-black font-bold'>Silver Tier</div>
                <div className='h-20 border flex justify-center items-center'>1 month</div>
                <div className='h-20 border flex justify-center items-center'>$49</div>
                <div className='h-20 border flex justify-center items-center'>24-hour</div>
                <div className='h-20 border flex justify-center items-center'><FaTimes className='text-red-300'/></div>
                <div className='h-20 border flex justify-center items-center'><FaCheck  className='text-green-300'/></div>
                <div className='h-20 border flex justify-center items-center'><FaCheck  className='text-green-300'/></div>
                <div className='h-20 border flex justify-center items-center'><FaCheck  className='text-green-300'/></div>
            </div>
            <div className=" golden">
                <div className='h-20  bg-yellow-200 flex justify-center items-center text-black rounded-tr-2xl font-bold'>Golden Tier</div>
                <div className='h-20 border flex justify-center items-center'>1 month</div>
                <div className='h-20 border flex justify-center items-center'>$99</div>
                <div className='h-20 border flex justify-center items-center'>24-hour</div>
                <div className='h-20 border flex justify-center items-center'><FaCheck  className='text-green-300'/></div>
                <div className='h-20 border flex justify-center items-center'><FaCheck  className='text-green-300'/></div>
                <div className='h-20 border flex justify-center items-center'><FaCheck  className='text-green-300'/></div>
                <div className='h-20 border flex justify-center items-center'><FaCheck  className='text-green-300'/></div>
            </div>
        </div>
    )
}