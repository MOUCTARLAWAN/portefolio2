"use client";

import { SheetTrigger,Sheet,SheetContent } from "./ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {CiMenuFries} from "react-icons/ci"


const links = [
    {
        name:"home",
        path:"/"
    },
    {
        name:"services",
        path:"/services"
    },
    {
        name:"resume",
        path:"/resume"
    },
    {
        name:"work",
        path:"/work"
    },
    {
        name:"contact",
        path:"/contact"
    }
]
const MobileNav = () => {
  return (
    <Sheet>
        <SheetTrigger className="flex items-center justify-center">
            <CiMenuFries className="text-[32px] text-accent" />
        </SheetTrigger>
        <SheetContent className="flex flex-col">
            <div>Logo</div>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav