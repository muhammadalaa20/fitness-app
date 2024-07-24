import Nav from "./Nav";
import MobileNav from "./MobileNav";
export default function Header() {
    return (
        <header className="w-full dark:bg-black dark:text-white px-3 py-2" id="home">
            <div className="w-full hidden md:block">
                <Nav />
            </div>
            <div className="w-full block md:hidden ">
            <MobileNav />
            </div>
        </header>
    );
}