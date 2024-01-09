import { motion } from "framer-motion";
import React from "react";
import ExperienceCard from "./ExperienceCard";

type Props = {};

function WorkExperience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col h-screen overflow-hidden text-left
        md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>

      <div
        className="w-full mt-10 md:mt-24 xl:my-60 flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory
        "
      >
        <ExperienceCard 
        company="Appointy IT PVT LTD"
        title="Software Developer"
        />
        <ExperienceCard 
        company="VMware"
        title="Member of Technical Staff"
        />
        <ExperienceCard 
        company="Testing"
        title="Test"
        />
        <ExperienceCard 
        company="VMware"
        title="Member of Technical Staff"
        />
      </div>
    </motion.div>
  );
}

export default WorkExperience;
