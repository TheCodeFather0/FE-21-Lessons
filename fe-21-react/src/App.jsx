import Card from "./Components/Card";
import "./style.css";
const links = [
  {
    id: 1,
    imageSrc: "./photo2.png",
    title: "Təcrübəli Təlimçilər",
    description:
      "Çox peşəkar və təcrübəli təlimçilərdən dərin bilikləri və geniş təcrübəni əldə etmiş olacaqsınız",
  },
  {
    id: 1,
    imageSrc: "./photo2.png",
    title: "Təcrübəli Təlimçilər",
    description:
      "Çox peşəkar və təcrübəli təlimçilərdən dərin bilikləri və geniş təcrübəni əldə etmiş olacaqsınız",
  },
  {
    id: 1,
    imageSrc: "./photo2.png",
    title: "Təcrübəli Təlimçilər",
    description:
      "Çox peşəkar və təcrübəli təlimçilərdən dərin bilikləri və geniş təcrübəni əldə etmiş olacaqsınız",
  },
  {
    id: 1,
    imageSrc: "./photo2.png",
    title: "Təcrübəli Təlimçilər",
    description:
      "Çox peşəkar və təcrübəli təlimçilərdən dərin bilikləri və geniş təcrübəni əldə etmiş olacaqsınız",
  },
  {
    id: 1,
    imageSrc: "./photo2.png",
    title: "Təcrübəli Təlimçilər",
    description:
      "Çox peşəkar və təcrübəli təlimçilərdən dərin bilikləri və geniş təcrübəni əldə etmiş olacaqsınız",
  },
  {
    id: 1,
    imageSrc: "./photo2.png",
    title: "Təcrübəli Təlimçilər",
    description:
      "Çox peşəkar və təcrübəli təlimçilərdən dərin bilikləri və geniş təcrübəni əldə etmiş olacaqsınız",
  },
];
const App = () => {
  return (
    <div className="cards">
      {links.map(({ imageSrc, title, description }) => {
        return <Card sekil={imageSrc} basliq={title} aciqlama={description} />;
      })}
    </div>
  );
};

export default App;
