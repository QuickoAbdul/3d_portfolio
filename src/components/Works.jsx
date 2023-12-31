import React, { useState } from "react";
import  { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div onClick={() => window.open(source_code_link, "_blank")}
            className='cursor-pointer'>
          <div className='relative w-full h-[230px]'>
            <img
              src={image}
              alt='project_image'
              className='w-full h-full object-cover rounded-2xl'
            />

            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
              <div className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
                <img
                  src={github}
                  alt='source code'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          </div>

          <div className='mt-5'>
            <h3 className='text-white font-bold text-[24px]'>{name}</h3>
            <p className='mt-2 text-secondary text-[14px]'>{description}</p>
          </div>

          <div className='mt-4 flex flex-wrap gap-2'>
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
            </div>
        </div>
      </Tilt>
    </motion.div>
    
  );
};

const Works = () => {
  const [startIndex, setStartIndex] = useState(0);
  // Le nombre maximum de cartes à afficher par défaut est 3
  const maxVisibleCards = 6;
  const handlePrevClick = () => {
    setStartIndex((prevIndex) => Math.max(0, prevIndex - maxVisibleCards));
  };

  const handleNextClick = () => {
    setStartIndex((prevIndex) =>
      Math.min(prevIndex + maxVisibleCards, projects.length - maxVisibleCards)
    );
  };
  return (
    <>
    <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Mes Projets</p>
        <h2 className={`${styles.sectionHeadText}`}>Projets.</h2>
     </motion.div>
      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Les projets suivants mettent en valeur mes compétences et mon expérience à travers
          des exemples concrets de mon travail. Chaque projet est brièvement décrit avec
          des liens vers des référentiels de code et des démonstrations en direct. Cela reflète ma
          capacité à résoudre des problèmes complexes, à travailler avec différentes technologies,
          et gérer efficacement les projets.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.slice(startIndex, startIndex + maxVisibleCards).map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
      <div className="arrow-container">
        <button className="arrow" onClick={handlePrevClick}>
          ←
        </button>
        <button className="arrow" onClick={handleNextClick}>
          →
        </button>
      </div>

      <div
        onClick={() => window.open("https://github.com/QuickoAbdul", "_blank")}
      className="flex flex-wrap justify-center mt-10 py-5 mx-80 rounded-xl bg-tertiary hover:bg-violet-800 active:bg-violet-900 focus:outline-none focus:ring focus:ring-violet-300 cursor-pointer">
        Voir plus</div>
    </>
  )
}
        //à changer par un hover show allproject comme l'ancien portfolio

export default SectionWrapper(Works, "work");