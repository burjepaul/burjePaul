import { Fragment, useState } from "react"
import { Outlet, Link } from "react-router-dom"

import {ReactComponent as Logo} from '../../assets/logo.svg'

import './navigation.styles.scss'
import './burger-menu.styles.scss'
import { DetectScroll } from "../../config/helpers"

const Navigation = () => {
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth)
    
    const scroll = DetectScroll()

    const toggle_hide = () => {
        setBurgerClass("burger-bar unclicked")
        setMenuClass("menu hidden")
        setIsMenuClicked(!isMenuClicked)
    }

    const updateMenu = () => {
        if(!isMenuClicked){
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else{
            toggle_hide()
        }
        setIsMenuClicked(!isMenuClicked)
    }
    
    window.addEventListener('resize', () => {setViewportWidth(window.innerWidth)})

    if (viewportWidth < 700 ) {
    return (
        <Fragment>
            <div style={{width:'100%', height:'9vh'}}>
                <div className="navigation-burger" style={scroll === 'down' ? {opacity: 0} : {opacity: 100}}>
                    <Link className="logo-container" to="/">
                        <Logo className="logo"/>
                    </Link>
                    <nav>
                        <div className="burger-menu" onClick={updateMenu}>
                            <div className={burger_class}></div>
                            <div className={burger_class}></div>
                            <div className={burger_class}></div>
                        </div>
                    </nav>
                </div>

                <div className={menu_class}>
                        <Link className="nav-link-mini" onClick={()=>{toggle_hide()}} to='/work'>
                            Work
                        </Link>
                        <Link className="nav-link-mini" onClick={()=>{toggle_hide()}} to='/prices'>
                            Prices
                        </Link>
                        <Link className="nav-link-mini" onClick={()=>{toggle_hide()}} to='/contact'>
                            Contact
                        </Link>
                </div>
            <Outlet/>
            </div>
        </Fragment>
    )
    }
    else{
        return(
          <Fragment>
            <div className="navigation" style={scroll === 'down' ? {opacity: 0} : {opacity: 100}}>
                <Link className="logo-container" to="/">
                    <Logo className="logo"/>
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/work'>
                    Work
                    </Link>
                    <Link className="nav-link" to='/prices'>
                        Prices
                    </Link>
                    <Link className="nav-link" to='/contact'>
                        Contact
                    </Link>
                </div>
            </div>
            <Outlet/>
          </Fragment>
        )  
}
    }
    
  

export default Navigation