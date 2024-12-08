'use client';

import CountUp from "react-countup";

const stats = [
  {
    num: 3,
    text: "Année(s) d'expérience(s)",
  },
  {
    num: 8,
    text: "Projets accomplis",
  },
  {
    num: 5,
    text: "Technologies",
  },
  {
    num: 120,
    text: "Commits Code",
  },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto ">
        <div className=" flex flex-wrap gap-6 ,ax-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-1 gap-4 items-center justify-center xl:justify-start"
            >
              <CountUp
                end={item.num}
                duration={5}
                delay={2}
                className="text-4xl xl:text-6xl font-extrabold "
              />
              <p className={`${
                    item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-white/80`}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
