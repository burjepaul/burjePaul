import { useEffect } from "react"

export const HandleMobilesize = (setIsMobile) => {
    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 700px)")
        setIsMobile(mediaQuery.matches)

        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches)
        }

        mediaQuery.addEventListener("change", handleMediaQueryChange)

        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange)
        }
    },[setIsMobile])
}