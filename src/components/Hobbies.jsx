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
          What Drives Me
        </h2>
        <p className={`${styles.sectionSubText} text-center`}>
        I’m driven by a love for building tools that solve real problems.
        Anime fuels my creativity and pushes me to think beyond conventional limits.
        My workout discipline strengthens the consistency and focus I bring into debugging and backend logic.
        Traveling opens me up to new ideas and cultures, while soccer sharpens my teamwork and adaptability.
        These passions shape the way I think, collaborate, and grow as a developer.
        </p>
      </motion.div>


    <div className='flex flex-row flex-wrap justify-center gap-10 mt-16 mb-10'>
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