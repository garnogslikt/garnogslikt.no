import { render } from "react-dom";
import PatternList from "./components/PatternList";
import InstagramFeed from "./components/InstagramFeed";
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
        <hr />
        <PatternList />
        <hr />
        <InstagramFeed />
      </div>
      <footer className="page-footer">© Garn og slikt 2022</footer>
    </>
  );
};

render(<App />, document.getElementById("root"));
