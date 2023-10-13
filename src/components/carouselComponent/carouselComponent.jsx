import React from 'react'

import Carousel from 'react-multi-carousel'

import 'react-multi-carousel/lib/styles.css'
import './carouselComponent.styles.scss'
import PortofolioWebsiteCard from '../portofolioWebsiteCard/portofolioWebsiteCard'
import PortofolioMobileCard from '../portofolioMobileCard/portofolioMobileCard'
import PortofolioOthersCard from '../portofolioOthersCard/portofolioOtherCard'
import Portofolio3DCard from '../portofolio3DCard/portofolio3DCard'

function CarouselComponent({websiteData , mobileData, otherData, videoAndRenders}) {
  console.log(websiteData)
    const responsiveWebsite = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 2
        },
        desktop: {
          breakpoint: { max: 3000, min: 1500 },
          items: 2
        },
        tablet: {
          breakpoint: { max: 1500, min: 0 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    const responsiveMobile = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 0 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      if (websiteData){
        return(
          <div className='carousel-container'>
            <Carousel 
                responsive={responsiveWebsite}
                infinite={true}
                >
                    {websiteData.map((entry) => {
                      return(
                        <div className='items-container'>
                                <PortofolioWebsiteCard value={entry}/>
                            </div>
                            )
                          })}
            </Carousel>
        </div>
      )}

      if (otherData){
        return(
          <div className='carousel-container'>
            <Carousel 
                responsive={responsiveWebsite}
                infinite={true}
                >
                    {otherData.map((entry) => {
                      return(
                        <div className='items-container'>
                                <PortofolioOthersCard value={entry}/>
                            </div>
                            )
                          })}
            </Carousel>
        </div>
      )}

      if (mobileData){
        return(
          <div className='carousel-container'>
            <Carousel 
                responsive={responsiveMobile}
                infinite={true}
                >
                    {mobileData.map((entry) => {
                      return(
                            <div className='items-container'>
                                <PortofolioMobileCard value={entry}/>
                            </div>
                            )
                          })}
            </Carousel>
      </div>
        )
      }

      if (videoAndRenders){
        return(
          <div className='carousel-container'>
            <Carousel 
                responsive={responsiveMobile}
                infinite={true}
                >
                    {videoAndRenders.map((entry) => {
                      return(
                            <div className='items-container'>
                                <Portofolio3DCard value={entry}/>
                            </div>
                            )
                          })}
            </Carousel>
      </div>
        )
      }
}

export default CarouselComponent
