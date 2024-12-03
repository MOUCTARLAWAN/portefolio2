"use client";
import Image from 'next/image';
import { motion } from "framer-motion";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div>
        <div className="relative w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] rounded-full overflow-hidden mix-blend-lighten">
          <Image
            src="/assets/profile.png" // Chemin relatif dans "public/assets/"
            priority
            quality={100}
            alt="Photo de profil"
            layout="fill" // Fait en sorte que l'image remplisse son conteneur
            objectFit="cover" // Maintient le rapport hauteur/largeur
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Photo;
