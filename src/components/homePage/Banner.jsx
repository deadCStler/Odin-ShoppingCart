import HomePageCSS from "./HomePage.module.css";
import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner2.jpg";
import banner3 from "../../assets/banner3.jpg";
import banner4 from "../../assets/banner4.jpg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Banner() {
  const imgArr = [
    { src: banner1, alt: "banner1", to: "/" },
    { src: banner2, alt: "banner2", to: "/" },
    { src: banner3, alt: "banner3", to: "/" },
    { src: banner4, alt: "banner4", to: "/" },
  ];

  const [currBanner, setCurrBanner] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrBanner((prevIndex) =>
        prevIndex < imgArr.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [imgArr.length]);

  return (
    <div className={HomePageCSS.banner}>
      {imgArr.map((item, index) => (
        <Link key={index} to={item.to} className={HomePageCSS.display}>
          <img
            src={item.src}
            alt={item.alt}
            className={HomePageCSS.img}
            hidden={index === currBanner ? "" : "hidden"}
          />
        </Link>
      ))}
      <div className={HomePageCSS.slider}>
        <div
          className={currBanner === 0 ? HomePageCSS.active : HomePageCSS.circle}
          onClick={() => setCurrBanner(0)}
        ></div>
        <div className={HomePageCSS.dashed}>-----</div>
        <div
          className={currBanner === 1 ? HomePageCSS.active : HomePageCSS.circle}
          onClick={() => setCurrBanner(1)}
        ></div>
        <div className={HomePageCSS.dashed}>-----</div>
        <div
          className={currBanner === 2 ? HomePageCSS.active : HomePageCSS.circle}
          onClick={() => setCurrBanner(2)}
        ></div>
        <div className={HomePageCSS.dashed}>-----</div>
        <div
          className={currBanner === 3 ? HomePageCSS.active : HomePageCSS.circle}
          onClick={() => setCurrBanner(3)}
        ></div>
      </div>
    </div>
  );
}

export default Banner;
