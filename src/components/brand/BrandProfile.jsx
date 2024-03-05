import BrandProfileBanner from "../../assets/brandProfileBanner.jpg";
import BrandCSS from "./Brand.module.css";

export function BrandProfile() {
  return (
    <>
      <img src={BrandProfileBanner} alt="banner brandprofilepage" />
      <h1 className={BrandCSS.heading}>Brand Profile</h1>
      <p>
        MiniBuy was founded by entrepreneur Emily Chang, who discovered
        inspiration for the brand during her travels in South Korea in 2015.
        While exploring various shopping districts, she encountered several
        boutique stores offering stylish, yet affordable products sourced from
        different parts of Asia. Drawing upon her background in retail
        management and her passion for delivering value to customers, Emily
        established MiniBuy with its headquarters in Seoul, South Korea, aiming
        to cater to the diverse needs of young consumers worldwide.
      </p>

      <p>
        The original vision of MiniBuy was to provide accessible luxury to the
        younger generation through a range of high-quality products and
        exceptional services. Emily envisioned a brand where customers could
        find chic and well-designed items without breaking the bank.
      </p>
      <p>
        As MiniBuy expanded its reach globally, it recognized the importance of
        redefining affordability and introduced the concept of
        &quot;value-driven consumption&quot; to the retail landscape. To stay
        relevant to its youthful audience, MiniBuy continually innovates through
        collaborations with popular brands, cutting-edge designs, and
        integration of trendy technology to create products that are not only
        aesthetically pleasing but also functional and enjoyable to use.
      </p>

      <p>
        Adapting to the evolving consumer landscape, MiniBuy embraced an
        omni-channel approach, seamlessly merging online and offline platforms
        to offer customers a holistic shopping experience.
      </p>

      <p>
        With its brand ethos &quot; Embrace the Joy of Life,&quot; MiniBuy has
        successfully established a presence in over 80 countries and
        territories, boasting a network of more than 3,000 stores worldwide.
        From bustling metropolises like Tokyo and Shanghai to cosmopolitan hubs
        such as Barcelona and Toronto, MiniBuy continues to enrich the lives of
        millions of consumers by providing them with delightful and high-quality
        lifestyle solutions.
      </p>
    </>
  );
}
