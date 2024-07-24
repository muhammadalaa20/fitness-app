import Image from "next/image"
const exercisesData = async ({ params }: { params: any }) => {
    const response = await fetch(
        `https://exercisedb.p.rapidapi.com/exercises/exercise/${params.id}`,
        {
            method: "GET",
            headers: {
                "x-rapidapi-key": "710f067bc1msh085af248391776fp1b4e3ejsn24c3838d3853",
                'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
            },
        }
    )
    
    return await response.json()
}
export default async function Details({ params }: { params: any } ) {
    const data = await exercisesData({ params })
    return (
        <div className="flex justify-center items-center dark:bg-black dark:text-white min-h-[80vh]">
            <div className="flex flex-col xl:flex-row md:flex-row lg:flex-row justify-between items-center w-full xl:px-28 lg:px-16 md:px-12 px-4">
                <div>
                <div className="flex justify-start ml-3 relative -bottom-12">
                    <h3 className="text-xs p-3 bg-black text-white rounded-lg">{data.bodyPart}</h3>
                </div>
                <Image src={data.gifUrl} alt="image" width={300} height={300} className="rounded-3xl" unoptimized></Image>
                <div className="flex justify-start ml-3 relative -top-12">
                    <h3 className="text-xs p-3 bg-black text-white rounded-lg">{data.name}</h3>
                </div>
                </div>
                <div>
                <div className="flex flex-col p-3 gap-4">
                        <h1>Equipment: {data.equipment}</h1>
                        <h1>Target: {data.target}</h1>
                </div>
                <p className="max-w-[500px] p-3">Instructions: {data.instructions}</p>
                </div>
            </div>
        </div>
    )
}