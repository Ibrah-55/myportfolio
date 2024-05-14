import React, { lazy, Suspense } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { skills } from "../constants";

const FeedbackCard = ({
  index,
  title,
  sl1,
  sl3,
  sl2,
  sl4,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
    {/* <p className='text-white font-black text-[48px]'>"</p> */}

    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px]'>{title}</p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
        <p className='mt-1 text-secondary text-[12px]'>
            <span className='blue-text-gradient'></span> {sl1}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
            {sl2} 
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
             {sl3}
          </p>
        </div>

        
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Skills and Tools</p>
          <h2 className={styles.sectionHeadText}>Skills.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {skills.map((title, index) => (
          <FeedbackCard key={title} index={index} {...title} />
        ))}
      </div>
    </div>
  );
};

const LazyFeedbacks = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Feedbacks />
    </Suspense>
  );
};

export default SectionWrapper(LazyFeedbacks, "");
