import { useEffect, useState } from "react";
import React from "react";

const userArray = JSON.parse(localStorage.getItem("userArray"));
const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
var postid = JSON.parse(localStorage.getItem("postid"))

if (postid === null ){
  localStorage.setItem("postid", "0");
}

const AddCar = () => {
  const [car, setCar] = useState({
    id: userArray[loggedInUser].EnsureUniqueId,
    name: "",
    brand: "",
    model: "",
    year: "",
    seter: "",
  });

  const addCarToCarArray = (event) => {
    event.preventDefault();

    userArray[loggedInUser].cars.push(car);
    userArray[loggedInUser].EnsureUniqueId =
      userArray[loggedInUser].EnsureUniqueId + 1;
    setCar({ ...car, id: userArray[loggedInUser].EnsureUniqueId });
    localStorage.setItem("userArray", JSON.stringify(userArray));
  };

  const [post, setpost] = useState({
    id: postid,
    title: "",
    renting_out_price: "",
    rentint_out_text: "",
    car: [],
  });

  const addPosTtoArray = (event) => {
    event.preventDefault();

    userArray[loggedInUser].posts.push(post);
    postid = postid + 1;
    localStorage.setItem("postid", JSON.stringify(postid));
    setpost({...post});
    localStorage.setItem("userArray", JSON.stringify(userArray));
  };

  
  const rendered = [];
  for (var i = 0; i < userArray[loggedInUser].cars.length; i++) {
    rendered.push(
      <option value={JSON.stringify(userArray[loggedInUser].cars[i])}>
        {userArray[loggedInUser].cars[i].name}
      </option>
    );
  }

  return (
    <>
      <h1>Lei ut</h1>
      <form onSubmit={addPosTtoArray}>
      <label>Tittel</label>
        <input
          type="text"
          name="title"
          value={post.title}
          onChange={(e) =>
            setpost({ ...post, title: e.target.value })
          }
        />
        <label>Velg bil</label>
        <select
          type="text"
          name="car"
          value={post.car}
          onChange={(e) => setpost({ ...post, car: JSON.parse(e.target.value) })}
        >
          <option value="None">
        --Choose--
      </option>
          {rendered}
        </select>
        <br></br>
        <label>pris</label>
        <input
          type="text"
          name="renting_out_price"
          value={post.renting_out_price}
          onChange={(e) =>
            setpost({ ...post, renting_out_price: e.target.value })
          }
        />
        <label>rentint_out_text</label>
        <br></br>
        <textarea
          type="text"
          name="rentint_out_text"
          value={post.rentint_out_text}
          onChange={(e) =>
            setpost({ ...post, rentint_out_text: e.target.value })
          }
        />
        <button> lei ut bil</button>
      </form>

      <h3>Her kan du registrere bilen din til utleie</h3>
      <form>
        <label>name</label>
        <input
          type="text"
          name="name"
          value={car.name}
          onChange={(e) => setCar({ ...car, name: e.target.value })}
        />
        <label>Merke</label>
        <input
          type="text"
          name="brand"
          value={car.brand}
          onChange={(e) => setCar({ ...car, brand: e.target.value })}
        />
        <label>Modell</label>
        <input
          type="text"
          name="model"
          value={car.model}
          onChange={(e) => setCar({ ...car, model: e.target.value })}
        />
        <label>Årsmodell</label>
        <input
          type="text"
          name="year"
          value={car.year}
          onChange={(e) => setCar({ ...car, year: e.target.value })}
        />
        <label>seter</label>
        <input
          type="text"
          name="seats"
          value={car.price}
          onChange={(e) => setCar({ ...car, price: e.target.value })}
        />
        <button onClick={addCarToCarArray}> Legg til bil</button>
      </form>
    </>
  );
};

export default AddCar;
