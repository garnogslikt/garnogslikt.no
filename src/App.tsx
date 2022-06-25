import { render } from "react-dom";
import instagramIcon from "../assets/instagram-32.svg";

const App = () => {
  return (
    <>
      <header className="page-header">
        <div className="page-header-left"></div>
        <div className="page-header-center">
          <h1 className="page-title">Garn og slikt</h1>
        </div>
        <div className="page-header-right">
          <a href="https://www.instagram.com/garnogslikt/">
            <img className="instagram-icon" src={instagramIcon} />
          </a>
        </div>
      </header>
      <div className="page-content">
        <div className="about">
          <p>
            Her kommer det oppskrifter fra <b>Garn og slikt</b>, blant annet{" "}
            <b>Square Neck Camisole</b> som kjent fra Instagram.
          </p>
        </div>
        <div className="instagram-feed">
          <iframe
            src="//lightwidget.com/widgets/c7bd2611488857caa701eb86da052941.html"
            scrolling="no"
            allowTransparency={true}
            className="lightwidget-widget"
            style={{
              height: "1000px",
              width: "100%",
              border: "0",
              overflow: "hidden",
            }}
          ></iframe>
        </div>
      </div>
      <footer className="page-footer">© Garn og slikt 2022</footer>
    </>
  );
};

render(<App />, document.getElementById("root"));
