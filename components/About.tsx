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
        src="/profile-picture.jpg"
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
          I am Himansh. A software engineer currently working as a Backend
          Developer at Appointy IT PVT LTD. I&apos;ve been coding for about 3
          years now mostly involved with backend technologies. I started with
          Java for solving problems in Leetcode and python for building data
          science and machine learning applications then I moved to Golang as
          part of my profession career and since then enjoyed a lot building
          applications in Go. I have profession experience with building
          applications using Golang, Postgresql, Docker, GCP, and other modern
          technologies. I have trying to decode cloud technologies and frontend
          for some time now.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
