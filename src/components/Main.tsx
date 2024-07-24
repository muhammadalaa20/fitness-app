import Hero from "@/components/Hero";
import Video from "@/components/Video";
import Trainers from "@/components/Trainers";
import Pricing from "@/components/Pricing";
export default function Main() {
    return (
        <div className="w-full flex flex-col">
            <Hero />
            <Video />
            <Trainers />
            <Pricing/>
        </div>
    );
}