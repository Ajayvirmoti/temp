// import Tilt from 'react-tilt'
import {motion} from 'framer-motion';
import Tilt from 'react-tilt'
import { styles } from '../styles';
import { services } from '../constants';
import {fadeIn, textVariant} from '../utils/motion';
import { index } from 'mathjs';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({index,title,icon}) =>{
  // All the details are fetching from ./constants/index.js file 
  return(
    <Tilt
    className = 'xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right","spring",0.5*index,0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
        //Tilt options
          options={{
            max:45,
            scale:1,
            speed:450
          }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col' 
        >
          {/* Randering the img */}
          <img src={icon} alt={title}
          className='w-16 h-16 object-contain content-center'/>
          <h3
          className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )  
}

const About = () => {
  return (
    // react regular fragment
    <>
    {/* text Varirnt : a function for animation */}
    <motion.div variants={textVariant()}>
      <p
      className={styles.sectionSubText}
      >INTRODUCTION</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>

    </motion.div>
    <motion.p
      variants={fadeIn("","",0.1,1)}
      className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30]px"
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo voluptatem maiores officia ipsam laboriosam, nostrum aliquam inventore nesciunt soluta, laudantium dolore quod amet quidem? Blanditiis voluptate voluptates iure debitis corporis.
        Lorem ipsum dolor sit amet.
        Lorem ipsum dolor sit amet.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus beatae illo, architecto impedit, iste laudantium necessitatibus accusantium omnis perferendis veritatis fuga ab quas alias, quo asperiores dolorum quae nostrum numquam.
    </motion.p>
    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service,index) => (
        <ServiceCard key = {service.title} index = {index}{...service}/>
      ))

      }

    </div>

    </>
  )
}
// Wraping the About in SectionWrapper so that we can apply the SectionWrapper 
export default SectionWrapper(About,"about");