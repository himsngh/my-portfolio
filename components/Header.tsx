import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

function Header({}: Props) {
  return (
    <header
      className="sticky top-0 p-5 flex items-start justify-between 
    max-w-7xl mx-auto z-20 xl:items-center"
    >
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        {/* Social Icons */}
        <SocialIcon
          url="https://www.linkedin.com/in/himanshu-ranjan-7580a0135/"
          bgColor="transparent"
          fgColor="gray"
        />

        <SocialIcon
          url="https://twitter.com/HIMANSHSINGH8"
          bgColor="transparent"
          fgColor="gray"
        />

        <SocialIcon
          url="https://github.com/himsngh"
          bgColor="transparent"
          fgColor="gray"
        />
      </motion.div>

        {/* TODO: Getting hyderation error due to this Link tag, need to find a different way to do this */}
      {/* <Link href="#contact"> */}
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="flex flex-row items-center text-gray-300 cursor-pointer"
        >
          <SocialIcon
            network="email"
            bgColor="transparent"
            fgColor="gray"
            className="cursor-pointer"
          />

          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
            Get in Touch
          </p>
        </motion.div>
      {/* </Link> */}
    </header>
  );
}

export default Header;
