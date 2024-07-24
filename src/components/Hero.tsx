import Image from "next/image";
export default function Hero() {
    return (
        /* Hero section */
        <div className="w-full flex justify-between hero pt-6 pb-10 px-10">
            {/* Hero left section */}
            <div className="2xl:w-3/5 xl:w-3/5 lg:w-3/4 md:w-3/5 w-full flex flex-col gap-8 items-start justify-start xl:pl-20 lg:pl-20 md:pl-10">
                <div className="flex p-2 gap-4 items-center dark:bg-slate-900  rounded-3xl">
                    <h3 className="bg-green-500 text-white rounded-2xl py-1 px-3 text-xs xl:text-sm lg:text-sm md:text-sm">NEW</h3>
                    <h3 className="text-xs xl:text-sm lg:text-sm md:text-sm text-black dark:text-white">High Intensity workout <span className="xl:inline-block lg:inline-block md:inline-block hidden ">to burn calories</span></h3>
                </div>
                <div>
                    <h1 className="xl:text-9xl lg:text-9xl md:text-9xl sm:text-7xl text-5xl font-bold">skater
                        Exercise</h1>
                </div>
                <div>
                    <p className="text-sm text-gray-400 w-3/4">Exercise to lose belly fat and stay fit either at home or at the gym. just do it with me.</p>
                </div>
                <div className="flex xl:flex-row lg:flex-row md:flex-row flex-col gap-6 w-full">
                    <button className="bg-green-500 text-white py-4 px-6 rounded-lg hover:scale-110 transition-all ease-in-out duration-300">Get Started</button>
                    <button className="bg-slate-900 text-white py-4 px-6 rounded-lg hover:scale-110 transition-all ease-in-out duration-300">Preview</button>
                </div>
            </div>
            <Image src="/skater-running-fast.png" alt="hero image" width={1000} height={500} className="hero--image absolute w-[550px] xl:block lg:hidden md:hidden hidden top-40 right-40" />
            <Image src="/skater-making-stop-sign.png" alt="hero image" width={1000} height={500} className="hero--image absolute w-[400px] xl:hidden lg:block md:hidden hidden top-10 right-24" />
            <Image src="/man-riding-his-skateboard.png" alt="hero image" width={1000} height={500} className="hero--image absolute w-[350px] xl:hidden lg:hidden md:block hidden top-56 right-0" />

            {/* Hero right section */}
            <div className="xl:block lg:block  hidden">
                <div className="flex flex-col gap-4">
                    <div className="bg-slate-900 py-4 px-8 rounded-xl flex flex-col gap-2"><h6 className="text-yellow-300 text-3xl text-start font-bold">38:14</h6> <h6 className="text-gray-400 text-xs text-start">TIME</h6></div>
                    <div className="bg-slate-900 py-4 px-8 rounded-xl flex flex-col gap-2"><h6 className="text-red-500 text-3xl text-start font-bold">165</h6> <h6 className="text-gray-400 text-xs text-start">EST CALORIES</h6></div>
                </div>
            </div>
        </div>
    );
}