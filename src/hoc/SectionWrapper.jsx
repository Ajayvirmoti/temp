// This file will going to handle the page contant justification 
//hoc : hogher order component

import React from 'react'
import {motion} from "framer-motion";
import { styles } from '../styles';
import { staggerContainer } from '../utils/motion';

const SectionWrapper = (Component,idName) => 
function hoc(){
    return (
        <motion.section
            variants={staggerContainer()}
            initial="hiddden"
            whileInView="show"
            viewport={{once:true,amount:0.25}}
            className={`${styles.padding} max-w-7xL mx-auto relative z-0`}
        >
            <span
            className='hash-span' id={idName}>
                &nbsp;
            </span>
            <Component/>
        </motion.section>
        
    )
}

export default SectionWrapper