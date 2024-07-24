'use client'
import { useEffect, useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link";
import Image from "next/image";
export default function Exercises( { data }: { data: any } ) {
    const [limit, setLimit] = useState(16)
    const [exerciseType, setExerciseType] = useState("all")
    const [ filteredExercise, setFilteredExercise ] = useState([])

    useEffect(() => {
        const filtered = data?.filter((item: any) => {
            return (
                item.bodyPart === exerciseType || exerciseType === "all"
            )
        })
        setFilteredExercise(filtered)
    }, [data, exerciseType])


    return (
        <section className="py-16 min-h-[80vh] flex flex-col items-center dark:bg-black dark:text-white">
            <Tabs defaultValue="all" className="w-11/12">
                <TabsList className="w-full h-full lg:h-[46px] flex flex-col lg:flex-row">
                    <TabsTrigger value="all" className="w-full h-full" onClick={() => setExerciseType("all")}>All</TabsTrigger>
                    <TabsTrigger value="back" className="w-full h-full" onClick={() => setExerciseType("back")}>Back</TabsTrigger>
                    <TabsTrigger value="cardio" className="w-full h-full" onClick={() => setExerciseType("cardio")}>Cardio</TabsTrigger>
                    <TabsTrigger value="chest" className="w-full h-full" onClick={() => setExerciseType("chest")}>Chest</TabsTrigger>
                    <TabsTrigger value="lower arms" className="w-full h-full" onClick={() => setExerciseType("lower arms")}>Lower Arms</TabsTrigger>
                    <TabsTrigger value="lower legs" className="w-full h-full" onClick={() => setExerciseType("lower legs")}>lower Legs</TabsTrigger>
                    <TabsTrigger value="neck" className="w-full h-full" onClick={() => setExerciseType("neck")}>Neck</TabsTrigger>
                    <TabsTrigger value="shoulders" className="w-full h-full" onClick={() => setExerciseType("shoulders")}>Shoulders</TabsTrigger>
                    <TabsTrigger value="upper arms" className="w-full h-full" onClick={() => setExerciseType("upper arms")}>Upper Arms</TabsTrigger>
                    <TabsTrigger value="upper legs" className="w-full h-full" onClick={() => setExerciseType("upper legs")}>Upper Legs</TabsTrigger>
                    <TabsTrigger value="waist" className="w-full h-full" onClick={() => setExerciseType("waist")}>Waist</TabsTrigger>
                </TabsList>
            </Tabs>

            <div className="flex flex-wrap gap-6 justify-center items-center">
            {filteredExercise.slice(0, limit).map((item: any) => {
                return (
                    <Link href={`/details/${item.id}`} key={item.id}>
                    <div>
                        <div className="flex flex-col">
                            <div className="flex justify-start ml-3 relative -bottom-12">
                                <h3 className="text-xs p-3 bg-black text-white rounded-lg">{item.bodyPart}</h3>
                            </div>
                            <Image src={item.gifUrl} alt="image" width={300} height={300} className="rounded-3xl" unoptimized></Image>
                            <div className="flex justify-start ml-3 relative -top-12">
                                <h3 className="text-xs p-3 bg-black text-white rounded-lg">{item.name}</h3>
                            </div>
                        </div>
                    </div>
                    </Link>

                )
            }
            )}
        </div>
        </section>
    )
}   