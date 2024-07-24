import Image from "next/image"
import data from "@/data"
import { FaStar } from "react-icons/fa"

export default function Page({ params }: { params: any }) {
    const id = params.id - 1;
    return (
        <div className="flex justify-center items-center dark:bg-black dark:text-white min-h-[80vh]">
            <div className="flex flex-col xl:flex-row md:flex-row lg:flex-row justify-between items-center w-full xl:px-28 lg:px-16 md:px-12 px-4">
                <div className="w-full h-auto flex flex-col gap-5 ml-5 rounded-xl p-3">
                    <div className="flex relative -bottom-[60px] rounded-tl-3xl bg-black text-white dark:bg-white dark:text-black py-2 w-1/5 items-center justify-center gap-1">
                        <h1 className="">{data[id]?.rate}</h1>
                        <FaStar className="text-yellow-300" />
                    </div>
                    <Image src={data[id].image} alt="trainer image" width={300} height={300} className="rounded-3xl max-h-[400px] shadow-lg shadow-green-400" />
                    <h1 className="relative -top-[60px] bg-black text-white dark:bg-white rounded-bl-3xl dark:text-black px-3 py-2 w-2/5 text-center font-medium">{data[id].name}</h1>
                </div>
                <div className="flex flex-col gap-5 p-8">
                    <div className="flex flex-col xl:flex-row md:flex-row lg:flex-row gap-3 items-center">
                        <h1 className="text-3xl font-bold">{data[id].name} -</h1>
                        <h1 className="text-2xl font-semibold">{data[id].age} years old</h1>
                    </div>
                    <h1 className="text-2xl font-semibold">Experience: {data[id].experience}</h1>
                    <p className="text-lg">{data[id].bio}</p>
                </div>
            </div>
        </div>
    )
}