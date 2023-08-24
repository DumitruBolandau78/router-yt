import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

// server.create("van", {
//   id: "1",
//   name: "Modest Explorer",
//   price: 60,
//   description:
//     "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!",
//   imageUrl:
//     "https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png",
//   type: "simple",
// });

const VanDetail = () => {
  const params = useParams();
  const [van, setVan] = useState(null);

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then(res => res.json())
      .then(data => setVan(data.vans));
  }, [params.id]);

  return (
    <div className="van-detail-container">
        <Link to="/Vans">Back to all vans!</Link>
        <div>
          {
            van ? (
              <div className="van-detail">
                <img src={`${van.imageUrl}`} alt="van" />
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
                <h2 className={van.name}>{van.name}</h2>
                <p className="van-price"><span>${van.price}</span>/day</p>
                <p>{van.description}</p>
                <button className="link-button">Rent this van</button>
              </div>
            ) : (
              <h2>Loading...</h2>
            )
          }
        </div>

    </div>
    );
};

export default VanDetail;
