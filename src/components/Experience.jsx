import React from 'react'
import { VerticalTimeline,VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'

import { styles } from '../styles'
import {experiences} from '../constants'
import {SectionWrapper} from '../hoc';
import { textVariant } from '../utils/motion'
import { index } from 'mathjs'

const ExperienceCard = ({experience})=>(
  <VerticalTimelineElement
    contentStyle={{ background:'#1d1836', color:'#fff'}}
    contentArrowStyle={{ borderRight:'7px solid #232631'}}
    date={experience.data}
    iconStyle={{background:experience.iconBg}}
    icon={
      <div>
        <img src={experience.icon} alt={experience.company_name}
        className='w-[60%] h-[60%] object-contain'
        />
      </div>

    }
   
  >
     <div
      className='text-white text-[24px] font-bold'
     >
      {experience.data}

     </div>


  </VerticalTimelineElement>


)
const Experience = () => {
  return (
    <>
    {/* Motion div for the heading of work experience */}
    <motion.div variants={textVariant()}>
      <p
      className={styles.sectionSubText}
      >Welcome to my journey of Tech Field</p>
      <h2 className={styles.sectionHeadText}>Work Experience</h2>


    </motion.div>

    {/* div for verticle timeline*/}

    <div
      className='mt-20 flex flex-col'>
        {/* for verticle Line */}
        <VerticalTimeline>
          {experiences.map((experience, index)=>(
          <ExperienceCard key ={index} experience={experience}/>
          ))}
      
      </VerticalTimeline>
      </div>


    </>
  )
}

export default SectionWrapper (Experience, "work")