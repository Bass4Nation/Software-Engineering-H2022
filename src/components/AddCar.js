import { useEffect, useState } from "react";
import style from "./styles/AddCar.module.css";
import React from "react";

var uniuniqueid_check = JSON.parse(localStorage.getItem("uniqueid"));
if (uniuniqueid_check === null) {
  localStorage.setItem("uniqueid", 0);
}

const AddCar = () => {
  const userArray = JSON.parse(localStorage.getItem("userArray") || "[]");
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser") || "[]");
  var [uniqueid, setuniqueid] = useState(
    JSON.parse(localStorage.getItem("uniqueid")) || 0
  );

  const [car, setCar] = useState({
    id: uniqueid,
    name: "",
    brand: "",
    model: "",
    year: "",
    regnr: "",
  });

  const addCarToCarArray = (event) => {
    event.preventDefault();

    userArray[loggedInUser].cars.push(car);
    setuniqueid(uniqueid + 1); //Async
    const synced_id = uniqueid + 1;
    setCar({ ...car, id: synced_id });

    localStorage.setItem("userArray", JSON.stringify(userArray));
  };

  const [post, setpost] = useState({
    id: uniqueid,
    owner: userArray[loggedInUser].username,
    renting_out_price: "",
    rentint_out_text: "",
    available_time: "",
    return_time: "",
    car: [],
    rented_out: false,
  });

  const addPosTtoArray = (event) => {
    setuniqueid(uniqueid + 1); //Async
    const synced_id = uniqueid + 1;
    event.preventDefault();
    setpost({ ...post, id: synced_id,});

    userArray[loggedInUser].posts.push(post);
    localStorage.setItem("userArray", JSON.stringify(userArray));
  };

  React.useEffect(() => {
    localStorage.setItem("uniqueid", JSON.stringify(uniqueid));
  }, [uniqueid]); // <-- here put the parameter to listen


  

  const options = [];
  for (var i = 0; i < userArray[loggedInUser].cars.length; i++) {
    options.push(
      <option value={JSON.stringify(userArray[loggedInUser].cars[i])}>
        {userArray[loggedInUser].cars[i].name}
      </option>
    );
  }
  console.log(post)

  return (
    <>
      <section className={style.formPostCar}>
        <h1>Lei ut</h1>
        <form onSubmit={addPosTtoArray}>
          <label>Utleid fra</label>
          <input
            type="datetime-local"
            name="available_time"
            value={post.available_time}
            data-testid="inputAvailableTimeStart"
            onChange={
              (e) => setpost({ ...post, available_time: e.target.value })}
          />
          <label>Utleid til</label>
          <input
          min={post.available_time}
            type="datetime-local"
            name="return_time"
            value={post.return_time}
            data-testid="inputAvailableTimeEnd"
            onChange={
              (e) => setpost({ ...post, return_time: e.target.value })}
          />
          <label>Velg bil: </label>
          <select
            type="text"
            name="car"
            value={car.value}
            data-testid="selectRegistredCar"
            onChange={(e) =>
              setpost({ ...post, car: JSON.parse(e.target.value) })}
          >
            <option>--Choose--</option>
            {options}
          </select>
          <br></br>
          <label>pris i kr</label>
          <input
            type="number"
            name="renting_out_price"
            value={post.renting_out_price}
            data-testid="inputCarRentPrice"

            onChange={(e) =>
              setpost({ ...post, renting_out_price: e.target.value })
            }
          />
          <button data-testid="rentOutButtonTest"> lei ut bil</button>
        </form>
      </section>

      <section className={style.regForms}>
        <h3>Her kan du registrere bilen din til utleie</h3>
        <form>
          <label>Egendefinert navn</label>
          <input      
            type="text"
            name="name"
            value={car.name}
            data-testid="inputCarName"
            onChange={(e) => setCar({ ...car, name: e.target.value })}
          />
          <label>Merke</label>
          <input
            type="text"
            name="brand"
            value={car.brand}
            data-testid="inputCarBrand"
            onChange={(e) => setCar({ ...car, brand: e.target.value })}
          />
          <label>Modell</label>
          <input
            type="text"
            name="model"
            value={car.model}
            data-testid="inputCarModel"
            onChange={(e) => setCar({ ...car, model: e.target.value })}
          />
          <label>Årsmodell</label>
          <input
            type="number"
            name="year"
            data-testid="inputCarYear"
            value={car.year}
            onChange={(e) => setCar({ ...car, year: e.target.value })}
          />
          <label>Registreringsnumber</label>
          <input
            type="text"
            name="regnr"
            value={car.regnr}
            data-testid="inputCarNumber"
            onChange={(e) => setCar({ ...car, regnr: e.target.value })}
          />

          <button onClick={addCarToCarArray} data-testid="testAddButton">
            {" "}
            Legg til bil
          </button>
        </form>
      </section>
    </>
  );
};

export default AddCar;
