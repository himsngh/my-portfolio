import { motion } from "framer-motion";
import React from "react";
import Skill from "./Skill";

type Props = {};

function Skills({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px]
        xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>

      <h3 className="top-36 absolute uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for current profieciency
      </h3>

      <div className="grid grid-cols-4 gap-5">
        <Skill directionLeft={true} source="github.png"/>
        <Skill directionLeft={true} source="postgresql.png"/>
        <Skill directionLeft={true} source="docker.png"/>
        <Skill directionLeft={true} source="kubernetes-144.png"/>
        <Skill directionLeft={false} source="git.png"/>
        <Skill directionLeft={false} source="golang-144.png"/>
        <Skill directionLeft={false} source="java.png"/>
        <Skill directionLeft={false} source="problem-solving.png"/>
        <Skill directionLeft={true} source="favicon.ico"/>
        <Skill directionLeft={true} source="jenkins-144.png"/>
        <Skill directionLeft={true} source="linux.png"/>
        <Skill directionLeft={true} source="gitlab-144.png"/>
        <Skill directionLeft={false} source="graphql-144.png"/>
        <Skill directionLeft={false} source="databases-94.png"/>
      </div>
    </motion.div>
  );
}

export default Skills;
