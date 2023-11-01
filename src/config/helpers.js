import { useEffect, useState } from "react"

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

export const fadeIn = (direction, type, delay, duration) => {
    return {
      hidden: {
        x: direction === "left" ? 200 : direction === "right" ? -200 : 0,
        y: direction === "up" ? 200 : direction === "down" ? -200 : 0,
        opacity: 0,
      },
      show: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          type: type,
          delay: delay,
          duration: duration,
          ease: "easeOut",
        },
      },
    };
};

export const staggerContainer = (staggerChildren, delayChildren) => {
    return {
      hidden: {},
      show: {
        transition: {
          staggerChildren: staggerChildren,
          delayChildren: delayChildren || 0,
        },
      },
    };
};

export const GetPositionOfanElementInPage = (divRef) => {
  const [divPosition, setDivPosition] = useState({ bottom: 0, top: 0 });
  useEffect(() => {
      const updatePosition = () => {
          if (divRef.current) {
            const { bottom, top } = divRef.current.getBoundingClientRect();
            setDivPosition({ bottom, top });
          }
        };
      updatePosition();
      // Optionally, you can also listen for window resize events to update the position dynamically
      window.addEventListener('scroll', updatePosition);
      window.addEventListener('resize', updatePosition);
      return () => {
          window.removeEventListener('scroll', updatePosition);
          window.removeEventListener('resize', updatePosition);
      };
    }, [divRef]);

    return divPosition
}

export const GetCurrentScrollHeight = () => {
  const [scrollHeight, setScrollHeight] = useState(window.innerHeight)
  useEffect(() => {
      const handleScroll = () => {
          setScrollHeight(window.scrollY + window.innerHeight)
      }

      window.addEventListener('scroll', handleScroll)

      return () => {
          window.removeEventListener('scroll', handleScroll);
        };
  },[])

  return(scrollHeight)
}

export const DetectScroll = () => {
  const [scrollDirection, setScrollDirection] = useState(null);
  const [prevScrollY, setPrevScrollY] = useState(0);


  useEffect(() => {
      const handleScroll = () => {
          const currentScrollY = window.scrollY;
  
          if (currentScrollY > prevScrollY) {
            // Scrolling down
            setScrollDirection('down');
          } else if (currentScrollY < prevScrollY) {
            // Scrolling up
            setScrollDirection('up');
          }
      
          setPrevScrollY(currentScrollY);
        }
      
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [prevScrollY]);

  return(scrollDirection)
}