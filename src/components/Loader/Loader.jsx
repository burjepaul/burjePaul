import { Html, useProgress } from "@react-three/drei";
import icons from "../../assets/icons.svg";
import './Loader.scss'

const Loader = () => {
    const {progress} = useProgress()

    return(
        <Html>
            <span className="canvas-loader"></span>
                {progress < 100 ? 
                <div className="spinner">
                    <svg>
                        <use href={`${icons}#icon-loader`}></use>
                    </svg>
            </div> : null}
                <h2>{progress.toFixed(2)}%</h2>
        </Html>
    )
}

export default Loader