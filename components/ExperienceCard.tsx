import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  company?: string;
  title?: string;
  summary?: string[];
};

export default function ExperienceCard({ company, title, summary }: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-3 flex-shrink-0
        w-[500px] md:w-[600px] xl:w-[800px] snap-center bg-[#292929] p-10
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
        <h4 className="text-3xl font-light">{company}</h4>
        <p className="font-bold text-2xl mt-1">{title}</p>
        <div className="flex space-x-2 my-2">
          <Image
            className="rounded-full"
            width={10}
            height={10}
            src="/favicon.ico"
            alt="Next"
          />
          <Image
            className="rounded-full"
            width={10}
            height={10}
            src="/docker.png"
            alt="Docker"
          />
          <Image
            className="rounded-full"
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
          {summary?.map((value) => {
            return <li> {value} </li>;
          })}
        </ul>
      </div>
    </article>
  );
}
