import "./InstagramFeed.css";

const InstagramFeed = () => {
  return (
    <div className="instagram-feed">
      <a href="https://www.instagram.com/garnogslikt/">
        <h1>Følg meg på Instagram</h1>
      </a>

      <iframe
        src="https://cdn.lightwidget.com/widgets/c7bd2611488857caa701eb86da052941.html"
        scrolling="no"
        allowTransparency={true}
        className="lightwidget-widget"
        style={{
          width: "100%",
          border: "0",
          overflow: "hidden",
        }}
      ></iframe>
    </div>
  );
};

export default InstagramFeed;
