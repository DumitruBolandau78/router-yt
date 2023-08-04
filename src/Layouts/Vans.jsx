import { useEffect, useState } from "react";

// server.create("van", {
//   id: "6",
//   name: "Green Wonder",
//   price: 70,
//   description:
//     "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.",
//   imageUrl:
//     "https://assets.scrimba.com/advanced-react/react-router/green-wonder.png",
//   type: "rugged",
// });

const Vans = () => {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch("/api/vans")
      .then(res => res.json())
      .then(data => setVans(data.vans));
  }, []);

  const vanElements = vans.map(van => (
    <div key={van.id} className="van-tile">
      <img src={van.imageUrl} alt="img" />
      <div className="van-info">
        <h3>{van.name}</h3>
        <p>${van.price}<span>/Day</span></p>
      </div>
      <i className={`van-type ${van.type} selected`}>{van.type}</i>
    </div>
  ));

  console.log(vans);

  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list">
        {vanElements}
      </div>
    </div>
  )
};

export default Vans;
