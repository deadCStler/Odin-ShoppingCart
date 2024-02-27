import ContentUpper from "./ContentUpper";
import HomePageCSS from "./HomePage.module.css";

function Content() {
  return (
    <div className={HomePageCSS.content}>
      <ContentUpper />
      <h1>Best Choice</h1>
      <h1>News</h1>
    </div>
  );
}

export default Content;
