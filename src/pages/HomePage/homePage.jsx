import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";
import Iframe from "react-iframe";

import './homePage.styles.scss'
import { overviewCards, technologys } from "../../config/constants";
import Phone3D from "../../components/3dComponents/MobilePhone";
import Monitor3D from "../../components/3dComponents/Monitor";
import Loader from "../../components/Loader/Loader";
import Rendering from "../../components/3dComponents/3dRendering";
import { HandleMobilesize, fadeIn, staggerContainer } from "../../config/helpers";
import Scroller from "../../components/Scroller/scroller";
import OverviewCard from "../../components/overviewCard/overviewCard";
import TechnologyCard from "../../components/technologyCard/technology";
import VideoAnimation from '../../assets/LogoVideo.mp4'
import MobilePhone from '../../assets/Mobile-photo.png'

const HomePage = () => {
  const [isMobile, setIsMobile] = useState(false)

  HandleMobilesize(setIsMobile)

    return(
      <div className="page-container">

        <div className="hero-container">
            <h1 className="main-title">Create Your Own, Custom Website, Mobile App and Many More</h1>

            <div className="preview">
              {isMobile ? <Scroller/> : null}
              <Canvas shadows gl={{preserveDrawingBuffer:true}}>
                <Suspense fallback={<Loader/>}>

                  <hemisphereLight intensity={3} groundColor={"black"}/>
                  <ambientLight intensity={1} />
                  <spotLight color="lightblue" intensity={10} position={[1,1,10]} angle={15} castShadow/>
                  <Phone3D isMobile={isMobile}/>
                  <Monitor3D isMobile={isMobile}/>
                  <Rendering isMobile={isMobile}/>
                  <OrbitControls
                      enableZoom={false}
                      enablePan={false}
                      maxPolarAngle={Math.PI / 2}
                      minPolarAngle={Math.PI / 2}
                      autoRotate
                      />
                  <PerspectiveCamera makeDefault position={[0, 0, 11]}/>

                </Suspense>
              </Canvas>
            </div>
        </div>        

        <motion.div 
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{once: true, amount:0.25}}
          className="overview-container">
            <h1 className="overview-title">Overview.</h1>
            <div 
              style={isMobile ? {gridTemplateColumns: "100%"} : {gridTemplateColumns: "50% 50%"}}
              className="overview-card-container">
                {overviewCards.map((entry, index) => {
                  return(
                    <OverviewCard title={entry.title} images={entry.imagesSource} description={entry.descriptions} index={index} key={index}/>
                  )
                })}
            </div>
        </motion.div>
        
        <h1 className="technology-title">Technologies.</h1>
        <motion.div 
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{once: true, amount:0.25}}
          style={isMobile ? {gridTemplateColumns: "50% 50%"} : {gridTemplateColumns: "20% 20% 20% 20% 20%"}}
          className="technology-container">
            {technologys.map((entry, index) => {
                  return(
                    <TechnologyCard values={entry} index={index} key={index}/>
                  )
                })}
        </motion.div>

        <h1 className="projects-title">Projects.</h1>
        <h2 className="projects-subtitle">Websites</h2>
        <motion.div 
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{once: true, amount:0.25}}>
            <motion.div variants={fadeIn("right", "spring", 0.5, 1.5)}>

              <Iframe url="https://fotbal-predictions.netlify.app"
                width="100%"
                height="400px"
                id=""
                className="iframe"
                display="block"
                position="relative"
                />

              </motion.div>
        </motion.div>

        <h2 className="projects-subtitle">Mobile Applications</h2>
        <motion.div 
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{once: true, amount:0.25}}>
            <motion.div variants={fadeIn("right", "spring", 0.5, 1.5)}>
                <div className="project-image-container">
                  <img src={MobilePhone} className="project-mobile-image" alt="mobile-phone"/>
                </div>

              </motion.div>
        </motion.div>

        <h2 className="projects-subtitle">3d Animations</h2>
        <motion.div 
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{once: true, amount:0.25}}
          className="video-container">
              <motion.div
                variants={fadeIn("right", "spring", 0.5, 1.5)}>
                <video autoPlay={true} muted={true} loop={true} className="video-animation" style={isMobile ? {width: "100%"} : {width: "70%"}}>
                  <source src={VideoAnimation} type="video/mp4" />
                </video>
              </motion.div>
        </motion.div>

        <h2 className="projects-subtitle" style={{textAlign:"center"}}><a href="/work" rel="noreferrer" className="see-work-page-anchor">See Work Page</a> for more projects</h2>

        <h1 className="projects-title">Prices.</h1>
        <h2 className="price-text">
          The price varies depending on your requirements. <br/><br/>
          For websites, it depends on how many pages the site should have or how many 3D models, as for mobile applications, is depends on the complexity, if it should be compatible with both iOS or Android.  <br/><br/>
          You can make yourself an idea of the price by going to <a href="/prices" rel="noreferrer" className="see-work-page-anchor">Price Page</a> and calculate a relative price or send me an email using the <a href="/contact" rel="noreferrer" className="see-work-page-anchor">Contact Page</a>
        </h2>

          <div className="footer">
          </div>
      </div>
    )
}

export default HomePage