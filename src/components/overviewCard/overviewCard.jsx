import React from "react";

import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import './overviewCard.styles.scss'
import { fadeIn } from "../../config/helpers";

const OverviewCard = ({title, images, description, index, handleClick}) => {


    return(
        <Tilt>
            <motion.div
                onClick={() => {handleClick(title)}}
                variants={fadeIn("down", "spring", 0.25 * index, 0.75)}
                className="overview-card">
                    <h2 className="overview-card-title">{title}</h2>

                    <div className="images-container">
                        {images.map((imgSource) => {
                            return(
                                <div className="image-circle" key={imgSource} style={{
                                    backgroundImage:'url(' + require(`../../assets/${imgSource}.png`) + ')',
                                    backgroundSize:'80% 80%',
                                    backgroundRepeat:'no-repeat',
                                    backgroundPosition:'center'
                                }}></div>
                                )})}
                    </div>

                    <ul>
                        {description.map((entry) => {
                            return(
                                <li className="overview-text" key={entry}>{entry}</li>
                                )
                            })}
                    </ul>
            </motion.div>
        </Tilt>
    )
}

export default OverviewCard