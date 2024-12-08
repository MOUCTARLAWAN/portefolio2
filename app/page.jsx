
import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button"
import { FiDownload } from 'react-icons/fi';


const page = () => {
  return (
    <section className="h-full ">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Ingénieur logiciel Big data & IA </span>
            <h1 className="h2 mb-6">
              Hello, je suis <br /><span className="text-accent">LAWAN Mouctar Ali </span> 
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
            Ingénieur Logiciel Big Data et Intelligence Artificielle, 
            je suis passionné par le développement de solutions innovantes et adaptées aux besoins technologiques actuels. 
            Fort d'une expérience en conception et développement d'applications mobiles et web,
            l'analyse des données.
            </p>

            {/* Boutton des reseaux sociaux */}
           <div className="flex flex-col xl:flex-row items-center gap-8">
           <Button
              variant="online"
              size="md"
              className="uppercase flex items-center gap-2"
            >
              <span>Télécharger mon cv</span>
              <FiDownload className="text-xl" />
            </Button>
            <div className="mb-8 xl:mb-0">
              <Social 
                containerStyle="flex gap-6" 
                iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
            </div>
           </div>
          </div>

            {/* Photo de profil */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo  />
          </div>
        </div>
      </div>
      <Stats />
   
    </section>
  )
}

export default page