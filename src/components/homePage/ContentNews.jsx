import NewsIcon from "../../assets/miniso.jpg";
import ContentNewsCSS from "./ContentNews.module.css";
import LearnMore from "../../assets/graylink.png";
import RedLearnMore from "../../assets/whitearrow.png";
import { Link } from "react-router-dom";
import { useState } from "react";

function NewsArticle({ title, body }) {
  return (
    <div className={ContentNewsCSS.newsEle}>
      <div className={ContentNewsCSS.img}>
        <img src={NewsIcon} alt="NewsIcon" />
      </div>
      <h3 className={ContentNewsCSS.newsTitle}>{title}</h3>
      <div className={ContentNewsCSS.newsBody}>{body} </div>
    </div>
  );
}

function ContentNews() {
  const [learnMore, setLearnMore] = useState(false);

  return (
    <div className={ContentNewsCSS.news}>
      <h1 className={ContentNewsCSS.title}>News</h1>
      <div className={ContentNewsCSS.grid}>
        {window.innerWidth < 761 ? (
          <>
            <NewsArticle
              title="Global Lifestyle Retailer MINISO Announces New Partnerships and Expansion Plans in Four Markets"
              body="Global lifestyle retailer MINISO has announced its plans to expand operations into three new markets, namely Angola, Trinidad and Tobago, and Latvia. With Panama, the four new partnerships were unveiled during MINISO's Global Partners Summit, held in Guangzhou, China, in March 2023. The summit, with the theme of “Wink Together, Win for Better”, was attended by partners from over 100 markets around the world. "
            />
            <NewsArticle
              title="MINISO expands its U.S. operations southwards, opening six new stores in Florida and Texas"
              body="On November 25th, MINISO opened four new stores in Texas and two in Florida, doubling the global value retailer's store count in these states."
            />
          </>
        ) : (
          <>
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
              body="Most people’s impressions of MINISO are that it has all kinds of products, ranging from children’s toys, electronic products, snacks, hygiene products, perfumes, and even lipsticks! You can find them all in MINISO stores! What’s more, these items are exquisite and affordable."
            />
          </>
        )}
      </div>
      <Link
        to="/franchise"
        className={ContentNewsCSS.learnMore}
        onMouseEnter={() => setLearnMore(true)}
        onMouseLeave={() => setLearnMore(false)}
      >
        <img src={learnMore ? RedLearnMore : LearnMore} alt="normal learn" />
      </Link>
    </div>
  );
}

export default ContentNews;
