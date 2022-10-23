import { useEffect, useState } from "react";
import React from "react";

const userArray = JSON.parse(localStorage.getItem("userArray"));
const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

const AddCar = () => {
  const [car, setCar] = useState({
    id: userArray[loggedInUser].EnsureUniqueId,
    brand: "",
    model: "",
    year: "",
    seter: "",
  });

  const addCarToCarArray = (event) => {
    event.preventDefault();

    userArray[loggedInUser].cars.push(car);
    userArray[loggedInUser].EnsureUniqueId = userArray[loggedInUser].EnsureUniqueId + 1;
    setCar({ ...car, id: userArray[loggedInUser].EnsureUniqueId });
    localStorage.setItem("userArray", JSON.stringify(userArray));
  };

  return (
    <>
      <h1>Her kan du registrere bilen din til utleie</h1>
      <form>
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
