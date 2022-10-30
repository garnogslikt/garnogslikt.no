import { Pattern, IPatternProps } from "./Pattern";
import "./PatternList.css";
import pearlBeanie from "../../assets/pearl-beanie.jpg";
import herringbonePurse from "../../assets/herringbone-purse.jpg";
import squareNeckCamisole from "../../assets/square-neck-camisole.jpg";

const Patterns: IPatternProps[] = [
  {
    title: "Pearl Beanie",
    imageSrc: pearlBeanie,
    info: "Pearl Beanie er en enkel og rask lue som strikkes nedenfra og opp i perleribbstruktur. Først strikkes bremmen, før det strikkes dobbeltstrikk som lager en definert brett på luen. Deretter vendes arbeidet og det strikkes perleribb, før det avsluttes med fellinger.",
    ravelryUrl: "https://www.ravelry.com/patterns/library/pearl-beanie-3",
    strikkelandUrl: "",
  },
  {
    title: "Herringbone Purse",
    imageSrc: herringbonePurse,
    info: `Herringbone Purse er en enkel og rask strikket veske som kommer i to størrelser. Vesken kan brukes med stropp, eller uten stropp som prosjektbag, toalettmappe eller lignende. Den er strikket i fiskebeinsstruktur som gjør vesken tykk, tett og solid.`,
    ravelryUrl: "https://www.ravelry.com/patterns/library/herringbone-purse-2",
    strikkelandUrl:
      "https://strikkeland.no/produkter/oppskrifter/show?produktID=110750&butikk=garnogslikt",
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
