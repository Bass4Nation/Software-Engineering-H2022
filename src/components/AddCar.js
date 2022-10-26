import { useEffect, useState } from "react";
import React from "react";

var uniuniqueid_check = JSON.parse(localStorage.getItem("uniqueid"))
if (uniuniqueid_check === null) {
  localStorage.setItem("uniqueid", 0);
}


const AddCar = () => {
  const userArray = JSON.parse(localStorage.getItem("userArray"));
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  var [uniqueid, setuniqueid] = useState(JSON.parse(localStorage.getItem("uniqueid")))


  const [car, setCar] = useState({
    id: uniqueid,
    name: "",
    brand: "",
    model: "",
    year: "",
    seter: "",
  });

  const addCarToCarArray = (event) => {
    event.preventDefault();

    userArray[loggedInUser].cars.push(car);
    setuniqueid(uniqueid + 1) //Async 
    const synced_id = uniqueid + 1 
    setCar({ ...car, id: synced_id });

    localStorage.setItem("userArray", JSON.stringify(userArray));
  };

  const [post, setpost] = useState({
    id: uniqueid,
    title: "",
    renting_out_price: "",
    rentint_out_text: "",
    car: [],
    rented_out: false,
  });

  const addPosTtoArray = (event) => {
    setuniqueid(uniqueid + 1)//Async 
    const synced_id = uniqueid + 1
    event.preventDefault();
    setpost({ ...post, id: synced_id});

    userArray[loggedInUser].posts.push(post);
    localStorage.setItem("userArray", JSON.stringify(userArray));
  };


  React.useEffect(() => {
    localStorage.setItem("uniqueid", JSON.stringify(uniqueid));
  }, [uniqueid]); // <-- here put the parameter to listen

  



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
          onChange={(e) => setpost({ ...post, title: e.target.value })}
        />
        <label>Velg bil</label>
        <select
          type="text"
          name="car"
          value={post.car}
          onChange={(e) =>
            setpost({ ...post, car: JSON.parse(e.target.value) })
          }
        >
          <option value="None">--Choose--</option>
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
