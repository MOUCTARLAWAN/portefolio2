import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav"
const Header = () => {
    return (
        <header className="py-8 text-white xl:py-12 ">
            <div className="container flex items-center justify-between mx-auto ">
                {/* Logo */}
                <Link href="">
                    <h1 className="text-4xl font-semibold">
                        Mouctar<span className="text-accent"> .</span>
                    </h1>
                </Link>
                
                {/* nav desktop & hire button*/}
                <div className="items-center hidden gap-8 xl:flex">
                    <Nav />
                    <Link href="/contact">
                        <Button>Hire me</Button>
                    </Link>
                </div>
                
                {/* mobile nav */}
                <div className="xl:hidden">Mobile nav</div>
            </div>
        </header>
    )
};
 
export default Header;