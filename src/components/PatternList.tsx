import { Pattern, IPatternProps } from "./Pattern";
import "./PatternList.css";
import herringbonePurse from "../../assets/herringbone-purse.jpg";
import squareNeckCamisole from "../../assets/square-neck-camisole.jpg";

const Patterns: IPatternProps[] = [
  {
    title: "Herringbone Purse",
    imageSrc: herringbonePurse,
    info: `Herringbone Purse er en enkel og rask strikket veske som kommer i to størrelser. Vesken kan brukes med stropp, eller uten stropp som prosjektbag, toalettmappe eller lignende. Den er strikket i fiskebeinsstruktur som gjør vesken tykk, tett og solid.`,
    ravelryUrl: "",
    strikkelandUrl: "",
  },
  {
    title: "Square Neck Camisole",
    imageSrc: squareNeckCamisole,
    info: `Square Neck Camisole er en allsidig singlet med en myk, flatterende
            firkanthals. Ribbstrukturen gjør toppen svært tøyelig, som gjør at den
            passer alle kroppsfasonger. Toppen strikkes ovenfra og ned, og du kan
            enkelt justere lengden etter din egen preferanse.`,
    ravelryUrl: "https://www.ravelry.com/patterns/library/square-neck-camisole",
    strikkelandUrl:
      "https://strikkeland.no/produkter/oppskrifter/show?produktID=110697&butikk=garnogslikt",
  },
];

const PatternList = () => {
  return (
    <div className="patternList">
      {Patterns.map((pattern: IPatternProps) => (
        <Pattern {...pattern} />
      ))}
    </div>
  );
};

export default PatternList;
