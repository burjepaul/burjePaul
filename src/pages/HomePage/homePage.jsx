import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";

import './homePage.styles.scss'
import { overviewCards } from "../../config/constants";
import Phone3D from "../../components/3dComponents/MobilePhone";
import Monitor3D from "../../components/3dComponents/Monitor";
import Loader from "../../components/Loader/Loader";
import Rendering from "../../components/3dComponents/3dRendering";
import { HandleMobilesize, staggerContainer } from "../../config/helpers";
import Scroller from "../../components/Scroller/scroller";
import OverviewCard from "../../components/overviewCard/overviewCard";

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
            <h1 className="overview-title">Overview</h1>
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

          <div className="footer">
          </div>
      </div>
    )
}

export default HomePage