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
            md:rounded-lg md:w-56 md:h-80 xl:w-[400px] xl:h-[500px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>

        <p className="text-base">
          I am Himansh. Volumes provide the ability to connect specific
          filesystem paths of the container back to the host machine. If a
          directory in the container is mounted, changes in that directory are
          also seen on the host machine. If we mount that same directory across
          container restarts, we’d see the same files. When a container runs, it
          uses the various layers from an image for its filesystem. Each
          container also gets its own “scratch space” to create/update/remove
          files. Any changes won’t be seen in another container, even if they
          are using the same image.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
