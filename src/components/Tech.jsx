import { motion } from "framer-motion"

import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"
import { styles } from "../style"
import { textVariant } from "../utils/motion"

const Tech = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Heading Section */}
      <motion.div variants={textVariant()} className="mb-10 text-center">
        <p className={styles.sectionSubText}>What I Use</p>
        <h2 className={styles.sectionHeadText}>Tech Stack</h2>
      </motion.div>

      {/* Technologies Section */}
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((techno) => (
          <div className="w-28 h-28" key={techno.name}>
            <BallCanvas icon={techno.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};


export default SectionWrapper(Tech,"");