import React from "react";
import './scroller.styles.scss'

import { motion } from "framer-motion";

const Scroller = () => {
    return (
        <div className="scroller-container">
            <motion.div
                animate={{y:[0, 48 , 0]}}
                transition={{
                        duration:1.5,
                        repeat: Infinity,
                        repeatType:'loop',
                        ease:"easeInOut"
                }}
                className="scroller-ball"
            />

        </div>
    )
}

export default Scroller