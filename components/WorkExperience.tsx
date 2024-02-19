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
      className="flex flex-col relative h-screen overflow-hidden text-left
        md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>

      <div
        className="w-full flex space-x-5 overflow-x-scroll p-8 snap-x snap-mandatory
        "
      >
        <ExperienceCard 
          company="VMware" 
          title="Member of Technical Staff 2"
          summary={[
            'Worked on the kubernetes vmware distribution for providing support of 1.28 k8s',
            'Worked on the release of 7.0 P09 and managed pipelines and release releated work',
            'Worked on workload control plane, a vmware distribution to manage and supervise infrastructre using kubernetes distribution'
        ]} 
         />
        <ExperienceCard 
          company="Appointy" 
          title="Software Developer 1"
          summary={[
            "Researched and tested a horizontal scaling solution for the database to reduce application latency and increase performance.",
            "Diagnosed a memory leak issue and helped the team in finding and executing a solution.",
            "Developed multiple external integrations into our system like Calendar (Google, Outlook), Zoom, BigCommerce, FCM, Google Sheets, ServiceNow etc.",
            "Helped in developing and delivering multiple products / features to our enterprise clients within the time frame.",
            "Designed a micro service to validate and verify new user's signup process to reduce the spam accounts creation and a monitoring system for emails sent to reduce bounce rates."
          ]}
          />
        <ExperienceCard company="Appointy" title="Software Developer Intern"/>
      </div>
    </motion.div>
  );
}

export default WorkExperience;
