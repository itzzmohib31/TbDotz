import OfferingsDesktop from "./OfferingsDesktop";
import OfferingsMobile from "./OfferingsMobile";
import { useState, useEffect } from "react";

export const Offerings = () => {
  const [variant, setVariant] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setVariant(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div key={variant}>
      {variant <= 768 ? <OfferingsMobile /> : <OfferingsDesktop />}
    </div>
  );
};

export default Offerings;
