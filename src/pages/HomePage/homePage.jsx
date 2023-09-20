import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";

import './homePage.styles.scss'
import Phone3D from "../../components/3dComponents/MobilePhone";
import Monitor3D from "../../components/3dComponents/Monitor";
import Loader from "../../components/Loader/Loader";
import Rendering from "../../components/3dComponents/3dRendering";


const HomePage = () => {

    return(
      <div className="container">

          <div className="preview">
            <Canvas shadows gl={{preserveDrawingBuffer:true}}>
              <Suspense fallback={<Loader/>}>

                <hemisphereLight intensity={3} groundColor={"black"}/>
                <ambientLight intensity={1} />
                {/* <pointLight color="lightblue" intensity={20} position={[1, 1 ,7]}/> */}
                <spotLight color="lightblue" intensity={10} position={[1,1,10]} angle={15} castShadow/>
                <Phone3D/>
                <Monitor3D/>
                <Rendering/>
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                    autoRotate
                    />
                <PerspectiveCamera makeDefault position={[0, 0, 12]}/>



              </Suspense>
            </Canvas>
          </div>
          
          <div className="footer">
          </div>
      </div>        
    )
}

export default HomePage