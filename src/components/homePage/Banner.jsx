import HomePageCSS from "./HomePage.module.css";
import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner2.jpg";
import banner3 from "../../assets/banner3.jpg";
import banner4 from "../../assets/banner4.jpg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Banner() {
  const imgArr = [
    { src: banner1, alt: "banner1", to: "/somewhere1" },
    { src: banner2, alt: "banner2", to: "/somewhere2" },
    { src: banner3, alt: "banner3", to: "/somewhere3" },
    { src: banner4, alt: "banner4", to: "/somewhere4" },
  ];

  const [currBanner, setCurrBanner] = useState(0);
  const [prevBanner, setPrevBanner] = useState(imgArr.length - 1);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevBanner(currBanner);
      setCurrBanner((prevIndex) =>
        prevIndex < imgArr.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  //will use the prev banner to show animation
  return (
    <div className={HomePageCSS.banner}>
      <Link to={imgArr[currBanner].to} className={HomePageCSS.display}>
        <img src={imgArr[currBanner].src} alt={imgArr[currBanner].alt} />
      </Link>
    </div>
  );
}

export default Banner;
