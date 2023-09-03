import React from 'react'

import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn, textVariant  } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { services } from '../constants';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Aperçu</h2>
      </motion.div>

      <motion.p 
      variants={fadeIn("", "", 0.1, 1)}
      className='mt-4 text-secondary text-[17px] max-w--3xl leading-[30px]'>
        Je suis Abdul Rahman, diplomé d'un bac +3 en Développement Web et Mobile, je suis passionné par le développement web et mobile, je me
        lance toujours des défis pour améliorer mes compétences et mes connaissances afin de pouvoir réaliser des projets de qualité.
        Passionné de rester à jour avec les dernières tendances je développe mes applications avec Symfony et NextJS. 
        J'apprend actuellement React Native pour pouvoir développer des applications mobiles et NodeJS pour le BackEnd.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service} />
      ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about');