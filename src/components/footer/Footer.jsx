import FooterCSS from "./Footer.module.css";
function Footer() {
  return (
    <>
      <div className={FooterCSS.main}>
        <div className={FooterCSS.content}>
          © Copyright PT. MiniBuy International Compani
          <br />
          © COPYRIGHT 2023 MINIBUY CO.LTD ALL RIGHT RESERVED
          <br />© Copyright deadCStler
          <br />
          <a
            href="https://github.com/deadCStler"
            target="_blank"
            rel="github"
            className={FooterCSS.link}
          >
            GitHub: deadCStler
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
