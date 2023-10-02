import React from "react";

import './Work.styles.scss'

import CarouselComponent from "../../components/carouselComponent/carouselComponent";
import { websites, mobileApps, otherApps } from "../../config/constants";

const WorkPage = () => {

    console.log(mobileApps)
    return(
        <div className="work-page-container">
            
            <h1 className="work-page-title">
                My Work Portofolio
            </h1>

            <h2 className="work-page-subtitle">
                Websites
            </h2>
            <CarouselComponent websiteData={websites}/>

            <h2 className="work-page-subtitle">
                Mobile Applications
            </h2>
            <CarouselComponent mobileData={mobileApps}/>

            <h2 className="work-page-subtitle">
                Other Applications
            </h2>
            <CarouselComponent otherData={otherApps}/>

        </div>
    )
}

export default WorkPage