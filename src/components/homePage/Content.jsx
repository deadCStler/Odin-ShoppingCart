import BestChoice from "./BestChoice";
import ContentNews from "./ContentNews";
import ContentUpper from "./ContentUpper";
import HomePageCSS from "./HomePage.module.css";

function Content() {
  return (
    <div className={HomePageCSS.content}>
      <ContentUpper />
      <BestChoice />
      <ContentNews />
    </div>
  );
}

export default Content;
