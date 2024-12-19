"use client";

import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";
import Link from "next/link";


const services = [
  {
    num: "01",
    title: "Développeur web & mobile",
    description: "Description rbgbeqtrbe bqtenrttgngfrb qbtnrygnfghbn  btebtrbtgb snyrnnstrgfqergtrnb thtbt sthtrb",
    href: "/service-web-mobile",
  },
  {
    num: "02",
    title: "DevOps",
    description: "Description",
    href: "", // Exemple d'un href vide
  },
  {
    num: "03",
    title: "Analyse et traitement des données",
    description: "Description",
    href: "/service-data-analytics",
  },
  {
    num: "04",
    title: "Création & intégration de model",
    description: "Description",
    href: "", // Exemple d'un href vide
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
     
      <div className="container mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[60px] "
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.2, ease: "easeIn" },
          }}
         
        >
          {services.map((service, index) => (
            <div key={index} className="flex-1 flex-col justify-center gap-6 group">
              
              <div className="w-full flex justify-between items-center ">
                {/* Numéro du service */}
                <div
                  className="text-5xl font-extrabold text-outline text-transparent 
                             group-hover:text-outline-hover transition-all duration-300"
                >
                  {service.num}
                </div>

                {/* Bouton avec Link conditionnel */}
                <Link
                  href={service.href}
                  className="w-[70px] h-[70px] rounded-full bg-white flex justify-center items-center
                            transition-all duration-300 group-hover:bg-accent hover:rotate-[-45deg]"
                >
                  <BsArrowDownRight className="text-primary text-3xl" />
                </Link>
              </div>

              {/* Titre et description */}
              <h2 className="text-[36px] font-bold leading-none text-white group-hover:text-accent transition-all duration-300">{service.title}</h2>
              <p className="text-white/60">{service.description}</p>

              {/* Ligne en bordure */}
              <div className="border-b border-white/20 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
