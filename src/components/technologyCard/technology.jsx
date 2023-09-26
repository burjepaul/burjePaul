import React from "react";

import { motion } from "framer-motion";

import './technology.styles.scss'
import { fadeIn } from "../../config/helpers";


const TechnologyCard = ({values, index}) => {
    return(
        <motion.div 
        variants={fadeIn("left", "spring", 0.1 * index, 0.75)}
        className="technology">
            <div 
            className="image-container" style={{
                backgroundImage:'url(' + require(`../../assets/technology-icons/${values.imgSource}.png`) + ')',
                backgroundSize:'80% 80%',
                backgroundRepeat:'no-repeat',
                backgroundPosition:'center'
            }}>

            </div>
            <p>{values.name}</p>
        </motion.div>
    )
}

export default TechnologyCard