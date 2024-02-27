import ContentNews from "./ContentNews";
import ContentUpper from "./ContentUpper";
import HomePageCSS from "./HomePage.module.css";

function Content() {
  return (
    <div className={HomePageCSS.content}>
      <ContentUpper />
      <h1>Best Choice</h1>
      <ContentNews />
    </div>
  );
}

export default Content;
