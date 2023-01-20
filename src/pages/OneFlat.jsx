import "../styles/header.css";
import "../styles/card.css";
import "../styles/oneFlat.css";
import Datas from "../datas/flat.json";
import Header from "../components/home/Header";
import Footer from "../components/home/Footer";
import { useParams, Navigate } from "react-router-dom";
import Gallery from "../components/Gallery";
import Stars from "../components/Stars";
import Collapse from "../components/Collapse";

export default function OneFlat() {
  const { id } = useParams();
  console.log({ id });
  const selectFlat = Datas.find((flat) => id === flat.id);
  if (!selectFlat) {
    return <Navigate to="/404" />;
  }
  console.log(selectFlat);
  const { title, pictures, location, equipments, host } = selectFlat;
  const Tags = selectFlat.tags;

  return (
    <div id="flat_select">
      <Header />
      <div className="flat_page">
        <Gallery pictures={pictures} />
        <div className="flat_content">
          <div className="flat_information">
            <h1 className="flat_title">{title} </h1>
            <div className="flat_location"> {location}</div>
            <div className="flat_tags">
              {Tags.map((tag, oneTag) => (
                <button key={oneTag} className="tag">
                  {tag}
                </button>
              ))}
            </div>
          </div>
          <div className="flat_host">
            <div className="flat_proprietaire">
              <div className="flat_guy">{host.name.split("  ")}</div>
              <img
                className="flat_img_proprio"
                src={host.picture}
                alt="propriétaire"
              ></img>
            </div>
            <div className="flat_stars">
              <Stars props={selectFlat.rating}></Stars>
            </div>
          </div>
        </div>

        <div className="flat_collapse">
          <div className="flat_description">
            <Collapse
              title={"Description"}
              description={
                <p className="txt_description">{selectFlat.description}</p>
              }
            />
          </div>
          <div className="flat_equipement">
            <Collapse
              title={"Equipements"}
              description={
                <p className="bloc_equipement">
                  {equipments.map((equ) => (
                    <li className="equipment_list" key={equ}>
                      {equ}
                    </li>
                  ))}
                </p>
              }
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
