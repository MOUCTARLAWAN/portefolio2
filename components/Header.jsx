import Link from "next/link";
import { Button } from "./ui/button";

const Header = () => {
    return (
        <header className="py-8 text-white xl:py-12 bg-pink-50/50">
            <div className="container mx-auto">
                {/* Logo */}
                <Link href="">
                    <h1 className="text-4xl font-semibold">
                        LAWAN<span className="text-accent"> .</span>
                    </h1>
                </Link>
                {/* nav desktop */}
                <Nav />
            </div>
        </header>
    )
};
 
export default Header;