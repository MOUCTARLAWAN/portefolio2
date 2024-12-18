"use client";

import { AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation";
import Stairs from "./Stairs";
import { motion } from "framer-motion";




const StairTransition = () => {
    const pathname = usePathname();
  return (
    <>
        <AnimatePresence mode="wait">
            <div key={pathname}>
                <div className="fixed top-0 right-0 z-40 flex w-screen h-screen pointer-events-none">
                    <Stairs />
                </div>
                <motion.div
                    className="fixed top-0 w-screen pointer-events-none h-scree bg-primary"
                    initial={{ opacity: 1 }}
                    animate={{
                        opacity: 0,
                        transition: {delay: 1, duration: 0.4, ease: "easeInOut"},
                    }}
                />
            </div>
        </AnimatePresence>
    </>
  )
}

export default StairTransition