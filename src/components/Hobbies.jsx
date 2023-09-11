import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { hobbies } from "../constants";

import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";

const Hobbies = () => {
  return (
    <>
    
    <motion.div variants={textVariant()}>
        
        <h2 className={`${styles.sectionHeadText} text-center`}>
          My Hobbies.
        </h2>
        <p className={`${styles.sectionSubText} text-center`}>
        My life is a colorful blend of passions and pursuits. I'm a coding enthusiast, crafting digital solutions from lines of code. Anime is my creative escape, whisking me away to fantastical realms. Staying active through workouts keeps me balanced, while traveling the world enriches my experiences. And on the soccer field, I thrive on teamwork and the thrill of the game, making my life a tapestry of diverse interests and vibrant experiences.
        </p>
      </motion.div>


    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {hobbies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
    </>
  );
};

export default SectionWrapper(Hobbies, "");