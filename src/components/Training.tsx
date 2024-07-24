'use client'
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
export default function Training({ data }: { data: any }) {
    const [trainingData, setTrainingData] = useState(data);
    useEffect(() => {
        const refreshExerciseImage = () => {
            const currentTime = new Date();
            const centralTimeZone = currentTime.toLocaleString('en-US', { timeZone: 'America/Chicago', hour: 'numeric', hour12: false });
            const currentHour = parseInt(centralTimeZone);

            if (currentHour >= 12) {
                const updatedTrainingData = trainingData.map((exercise: any) => {
                    // You can adjust the logic to update gifUrl as needed
                    return { ...exercise, gifUrl: `${exercise.gifUrl}` };
                });
                setTrainingData(updatedTrainingData);
            }
        };

        const interval = setInterval(refreshExerciseImage, 1000 * 60 * 60); // Check every hour

        return () => clearInterval(interval);
    }, [trainingData]);
    return (
        <div className="w-full flex flex-col py-10">
            <div className="flex justify-between items-center py-10 xl:px-32 lg:px-28 md:px-8 px-3">
                <h1 className="text-3xl">Popular Exercises</h1>
                <Link className="text-gray-400 text-md cursor-pointer" href="/Exercises">SEE MORE <span className="hidden xl:inline-block lg:inline-block md:inline-block">EXERCISES</span></Link>
            </div>
            <div className="container mx-auto">
                <div className="flex flex-wrap gap-6 justify-center items-center">
                    {trainingData.slice(0, 8).map((item: any) => {
                        
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
            </div>
        </div>

    )
}