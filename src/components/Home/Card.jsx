import Datas from "../../datas/flat.json";

function Card() {
  console.log(Datas);

  return (
    <section className="Contain">
      <div className="Cards">
        {Datas.map((flat) => {
          return (
            <div className="Card" key={flat.id}>
              <a href={"/oneflat/" + flat.id}>
                <div className="Card_content">
                  <p className="Card_title">{flat.title}</p>
                </div>
                <img
                  className="Card_cover"
                  src={flat.cover}
                  alt="Logement"
                ></img>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Card;
