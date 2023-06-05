import React, { useState, useEffect } from "react";
import OfferingsDesktop from "./OfferingsDesktop";
import OfferingsMobile from "./OfferingsMobile";

const Offerings = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Initial check on component mount
    handleResize();

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (isMobile) {
    return <OfferingsMobile/>
  }

  return <OfferingsDesktop/>
};

export default Offerings;