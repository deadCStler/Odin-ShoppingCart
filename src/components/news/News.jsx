import { NewsArticle } from "../homePage/ContentNews";
import NewsCSS from "./News.module.css";
import LoadMore from "../../assets/exmore.png";

function News() {
  return (
    <>
      <div className={NewsCSS.grid}>
        <NewsArticle
          title="Global Lifestyle Retailer MINISO Announces New Partnerships and Expansion Plans in Four Markets"
          body="Global lifestyle retailer MINISO has announced its plans to expand operations into three new markets, namely Angola, Trinidad and Tobago, and Latvia. With Panama, the four new partnerships were unveiled during MINISO's Global Partners Summit, held in Guangzhou, China, in March 2023. The summit, with the theme of “Wink Together, Win for Better”, was attended by partners from over 100 markets around the world. "
        />
        <NewsArticle
          title="MINISO expands its U.S. operations southwards, opening six new stores in Florida and Texas"
          body="On November 25th, MINISO opened four new stores in Texas and two in Florida, doubling the global value retailer's store count in these states."
        />
        <NewsArticle
          title="Miniso Malaysia : Present the best and happiest things to everyone on earth"
          body="Most people's impressions of MINISO are that it has all kinds of products, ranging from children's toys, electronic products, snacks, hygiene products, perfumes, and even lipsticks! You can find them all in MINISO stores! What's more, these items are exquisite and affordable."
        />
        <NewsArticle
          title="MINISO Launches Sanrio Blind Box Collection, Creating Buzz at US Stores"
          body="MINISO (NYSE: MNSO; HKEX: 9896) has launched an exclusive collection of blind box offerings of Sanrio characters at its US stores. The lifestyle retailer, which now has over stores in over 60 locations in the US including in New York City, Los Angeles and Chicago, launched the collection in October, and it has already created a buzz amongst customers."
        />
        <NewsArticle
          title="Toy Story's Lotso arrives at MINISO Vietnam and takes the country by storm"
          body="On Oct 18, global lifestyle retailer MINISO (NYSE: MNSO; HKEX: 9896) launched its Lotso from the Toy Story collection at selected outlets in Vietnam. From plush toys and pillows to hand towels and keychains, stores were fully stocked with Lotso products before opening their doors to welcome shoppers. "
        />
        <NewsArticle
          title="MINISO Opens its 2000th Store Outside of China"
          body="On October 1st, 2022, Chinese lifestyle retailer MINISO (NYSE: MNSO, HKEX: 9896) launched its 2000th store outside of China, bringing its signature fun, affordable, designed-led lifestyle products to Lyon, France. Marking the latest step in the brand's global expansion since 2015, the new store is the brand's eighteenth in France overall, in its fifth city. "
        />
      </div>
      <div className={NewsCSS.load}>
        <img src={LoadMore} alt="loadmore" />
      </div>
    </>
  );
}

export default News;
