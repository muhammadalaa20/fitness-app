import Link from "next/link"
export default function Pricing() {
    return (
        <div className="w-full flex flex-col py-10" id="pricing">
            <div className="flex justify-between items-center py-10 xl:px-32 lg:px-28 md:px-8 px-3">
                <h1 className="text-3xl">Pricing</h1>
                <Link className="text-gray-400 text-md cursor-pointer" href="/Pricing">SEE MORE <span className="hidden xl:inline-block lg:inline-block md:inline-block">Details</span></Link>
            </div>
            <div className="flex flex-col xl:flex-row lg:flex-row md:flex-row px-auto justify-evenly items-center gap-10 p-3">
                <div className="w-60 h-60 rounded-3xl bg-slate-900 shadow-lg shadow-orange-600 flex flex-col justify-center items-center gap-5 hover:scale-110 transition-all duration-500 ease-in-out">
                    <div className="flex flex-col justify-center items-center">
                    <h1 className="text-2xl text-orange-600">Bronze Tier</h1>
                    <h3 className="text-sm text-slate-500">Best for personal use</h3>
                    </div>
                        <p><span>$</span>29<span className="text-slate-500 text-xs"> /month</span></p>
                </div>
                <div className="w-60 h-60 rounded-3xl bg-slate-900 shadow-lg shadow-gray-300 flex flex-col justify-center items-center gap-5 hover:scale-110 transition-all duration-500 ease-in-out">
                    <div className="flex flex-col justify-center items-center">
                    <h1 className="text-2xl text-gray-300">Silver Tier</h1>
                    <h3 className="text-sm text-slate-500">Best for business use</h3>
                    </div>
                        <p><span>$</span>49<span className="text-slate-500 text-xs"> /month</span></p>                
                </div>
                <div className="w-60 h-60 rounded-3xl bg-slate-900 shadow-lg shadow-yellow-200 flex flex-col justify-center items-center gap-5 hover:scale-110 transition-all duration-500 ease-in-out">
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-2xl text-yellow-200">Golden Tier</h1>
                        <h3 className="text-sm text-slate-500">Best for Athletic use</h3>
                    </div>
                        <p><span>$</span>99<span className="text-slate-500 text-xs"> /month</span></p>
                </div>
            </div>
        </div>
    )
}