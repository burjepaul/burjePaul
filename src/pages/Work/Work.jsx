import React, { useState } from "react";

import './Work.styles.scss'
import PortofolioWebsiteCard from "../../components/portofolioWebsiteCard/portofolioWebsiteCard";
import { websites } from "../../config/constants";

import {ReactComponent as RightArrow} from '../../assets/pagearrow-right.svg'
import {ReactComponent as LeftArrow} from '../../assets/pagearrow-left.svg'

const WorkPage = () => {
    const [indexToShow, setIndexToShow] = useState([0,1])

    const handleArrowClick = (value) => {
        if (indexToShow[1]+value === websites.length) setIndexToShow([indexToShow[0]+value, 0])
        else if(indexToShow[0]+value === -1) setIndexToShow([websites.length-1, 0])
        else if(indexToShow[0]+value === websites.length) setIndexToShow([0, 1])
        else if(indexToShow[1]+value === -1) setIndexToShow([websites.length-2, websites.length-1])
        else setIndexToShow([indexToShow[0]+value, indexToShow[1]+value])
    }

    console.log(indexToShow)

    return(
        <div className="work-page-container">
            
            <h1 className="work-page-title">
                My Work Portofolio
            </h1>

            <h2 className="work-page-subtitle">
                Websites
            </h2>
            <div className="work-page-websites-container">
                <LeftArrow className="arrow" onClick={() => {handleArrowClick(-1)}}/>
                <div>
                    <PortofolioWebsiteCard value={websites[indexToShow[0]]} />
                </div>
                <div>
                    <PortofolioWebsiteCard value={websites[indexToShow[1]]} />
                </div>
                <RightArrow className="arrow" onClick={() => {handleArrowClick(1)}}/>
            </div>

        </div>
    )
}

export default WorkPage