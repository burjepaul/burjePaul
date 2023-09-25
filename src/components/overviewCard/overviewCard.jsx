import React from "react";

import { Tilt } from "react-tilt";

import './overviewCard.styles.scss'

const OverviewCard = ({title, images, description}) => {

    return(
        <Tilt>
            <div className="overview-card">
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

                {description.map((entry) => {
                    return(
                        <p className="overview-text" key={entry}>- {entry}</p>
                        )
                    })}
            </div>
        </Tilt>
    )
}

export default OverviewCard