import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article 
    className="flex flex-col rounded-lg items-center space-y-9 flex-shrink-0
        w-[400px] md:w-[500px] xl:w-[800px] snap-center bg-[#292929] p-10
        hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden"
    
    >
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="w-24 h-24 rounded-full xl:w-[200px] xl:h-[200px] object-cover 
            object-center"
        src="https://cdn.sanity.io/images/ltuexkre/production/050ee674d199aa8d254af2b5ea480d3dc320cbb1-1240x1440.png"
      />

      <div className="px-0 md:px-10">
        {/* <h4 className="text-4xl font-light">Software Developer 1</h4> */}
        <h4 className="text-4xl font-light">{props.title}</h4>
        {/* <p className="font-bold text-2xl mt-1">Appointy IT PVT LTD</p> */}
        <p className="font-bold text-2xl mt-1">{props.company}</p>
        <div className="flex space-x-2 my-2">
          <Image width={10} height={10} src="/favicon.ico" alt="Next" />
          <Image width={10} height={10} src="/docker.png" alt="Docker" />
          <Image
            width={10}
            height={10}
            src="/postgresql.png"
            alt="Postgresql"
          />
          <Image
            className="rounded-full"
            width={10}
            height={10}
            src="/github.png"
            alt="Github"
          />
        </div>
        <p className="uppercase py-5 text-gray-300">
          Started working... -- Ended ....
        </p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
        </ul>
      </div>
    </article>
  );
}
