export interface IPatternProps {
  title: string;
  imageSrc: string;
  info: string;
  ravelryUrl: string;
  strikkelandUrl: string;
}

export const Pattern = (props: IPatternProps) => {
  return (
    <div className="pattern">
      <img className="pattern-image" src={props.imageSrc}></img>
      <div className="pattern-info">
        <h1>{props.title}</h1>
        <p>{props.info}</p>
        <div className="purchase-buttons">
          {props.strikkelandUrl ? (
            <a
              className="purchase-button purchase-button-strikkeland"
              href={props.strikkelandUrl}
            >
              Kjøp på Strikkeland
            </a>
          ) : (
            <></>
          )}
          {props.ravelryUrl ? (
            <a
              className="purchase-button purchase-button-ravelry"
              href={props.ravelryUrl}
            >
              Kjøp på Ravelry
            </a>
          ) : (
            <p>Kommer snart...</p>
          )}
        </div>
      </div>
    </div>
  );
};
