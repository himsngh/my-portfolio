import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

// tsrfe -- shortcut for adding boilerplate template of react + typescript
// cntrl + space to autofill suggestions

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row
         max-w-5xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        src="/profile.jpg"
        className="-mb-28 md:mb-0 flex-shrink-0 w-48 h-48 rounded-full object-cover
            md:rounded-lg md:w-56 md:h-72 xl:w-[300px] xl:h-[400px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>

        <p className="text-base md:text-1xl ">
        I am a passionate software developer with a love for crafting innovative solutions. 
        Currently working as a MTS 2 at VMware. In my past experiences, 
        I have been involved in various phases including design, planning, 
        implementation, and testing of new features. My toolbox includes working in a 
        micro service environment using Golang, PostgreSQL, Docker, and other technologies 
        that allow me to bring ideas to life. I find great joy in collaborating with internal 
        teams and vendors to enhance and implement new features. 
        </ br>
        Let&apos;s connect and explore how we can create something remarkable together or simply 
        chat about the fascinating world of software development.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
