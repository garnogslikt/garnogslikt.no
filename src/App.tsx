import { render } from "react-dom";
import instagramIcon from "../assets/instagram-32.svg";
import squareNeckCamisole from "../assets/square-neck-camisole.jpg";

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
        <hr />
        <div className="designs">
          <img className="designs-image" src={squareNeckCamisole}></img>
          <div className="designs-info">
            <h1>Square Neck Camisole</h1>
            <p>
              Square Neck Camisole er en allsidig singlet med en myk,
              flatterende firkanthals. Ribbstrukturen gjør toppen svært tøyelig,
              som gjør at den passer alle kroppsfasonger. Toppen strikkes
              ovenfra og ned, og du kan enkelt justere lengden etter din egen
              preferanse.
            </p>
            <div className="purchase-buttons">
              <a
                className="purchase-button purchase-button-strikkeland"
                href="https://strikkeland.no/o/bruker/oppskrifter/show?produktID=110697&page=1"
              >
                Kjøp på Strikkeland
              </a>
              <a
                className="purchase-button purchase-button-ravelry"
                href="https://www.ravelry.com/patterns/library/square-neck-camisole"
              >
                Kjøp på Ravelry
              </a>
            </div>
          </div>
        </div>
        <hr />
        <div className="instagram-feed">
          <a href="https://www.instagram.com/garnogslikt/">
            <h1>Følg meg på Instagram</h1>
          </a>
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
