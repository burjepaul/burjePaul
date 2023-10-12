import React, { useState } from "react";

import './Work.styles.scss'

import CarouselComponent from "../../components/carouselComponent/carouselComponent";
import { websites, mobileApps, otherApps } from "../../config/constants";
import OverviewCard from "../../components/overviewCard/overviewCard";
import { HandleMobilesize } from "../../config/helpers";

const WorkPage = () => {
    const [isMobile, setIsMobile] = useState(false)
    const [carouselToShow, setCarouselToShow] = useState(null)


    HandleMobilesize(setIsMobile)

    const renderCarousel = () => {
        switch(carouselToShow){
            case 'Websites':
                return (
                    <>
                        <h2 className="work-page-subtitle">
                            Websites
                        </h2>
                        <CarouselComponent websiteData={websites}/>
                    </>
                )
            case 'Mobile Applications':
                return (
                    <>
                        <h2 className="work-page-subtitle">
                            Mobile Applications
                        </h2>
                        <CarouselComponent mobileData={mobileApps}/>
                    </>
                )
            case '3d Projects':
                return (
                    <>
                        <h2 className="work-page-subtitle">
                            Mobile Applications
                        </h2>
                        <CarouselComponent mobileData={mobileApps}/>
                    </>
                )
            case 'Others':
                return (
                    <>
                        <h2 className="work-page-subtitle">
                            Other Applications
                        </h2>
                        <CarouselComponent otherData={otherApps}/>
                    </>
                )
            default:
                <></>
        }
    }

    return(
        <div className="work-page-container">
            
            <h1 className="work-page-title">
                My Work Portofolio
            </h1>

            <div 
            style={isMobile ? {gridTemplateColumns: "100%"} : {gridTemplateColumns: "50% 50%"}}
            className="work-card-container">

                <OverviewCard handleClick={setCarouselToShow} title={"Websites"} images={['website1', 'website2']} description={['Custom websites with personalizate logos, 3d Videos, 3d Models, mobile responsive.']}/>
                <OverviewCard handleClick={setCarouselToShow} title={"Mobile Applications"} images={['mobile1', 'mobile2']} description={['Mobile applications published on Google Play and App Gallery, compatible with both iOS and Android.']}/>
                <OverviewCard handleClick={setCarouselToShow} title={"3d Projects"} images={['3d-modeling1', '3d-modeling2']} description={['3D Models and Videos custom made with advance textures.']}/>
                <OverviewCard handleClick={setCarouselToShow} title={"Others"} images={['others1', 'others2']} description={['Backend servers, web scrapers, automations and others services.']}/>

            </div>

            <div className="work-carousel">
                {renderCarousel()}
            </div>

        </div>
    )
}

export default WorkPage