import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";

import './homePage.styles.scss'
import Phone3D from "../../components/3dComponents/MobilePhone";
import Monitor3D from "../../components/3dComponents/Monitor";
import Loader from "../../components/Loader/Loader";
import Rendering from "../../components/3dComponents/3dRendering";
import { HandleMobilesize } from "../../config/helpers";
import Scroller from "../../components/Scroller/scroller";


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
                  {/* <pointLight color="lightblue" intensity={20} position={[1, 1 ,7]}/> */}
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
          
        <div className="overview-container">
          <h1 className="overview-title">Overview</h1>
        </div>

          <div className="footer">
          </div>
      </div>
    )
}

export default HomePage