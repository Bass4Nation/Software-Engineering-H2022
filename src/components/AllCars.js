import { useState, useEffect } from "react";
import style from "./styles/AllCars.module.css";


const AllCars = () => {

  const [cars, setCars] = useState([]);

  const temp_img = "./temp_car_img.jpg";

  const rentButton = (car) => {
    // Her kan vi legge inn funksjonalitet for å leie bilen.
    console.log(car);
  };

  const getAllCars = () => {
    const carArray = JSON.parse(localStorage.getItem("userArray")) || [];
    const allCars = carArray.map((user) => user.cars); // [[{car1}, {car2}], [{car3}, {car4}]]
    setCars(allCars.flat()); // flat() is used to flatten the array
  };

  useEffect(() => {
    getAllCars();
  }, []); // [] is used to run the function only once

  return (
    <>
      <h1>Alle biler til utleie</h1>
      <section className={style.allCars}>
        {cars.map((car) => (
          <section key={car.id} className={style.car}>
            <h3>{car.brand}</h3>
            <p>{car.model}</p>
            <p>{car.year}</p>
            <p>{car.price} kr i mnd</p>
            <img src={temp_img} alt={car.name} />
            <button onClick={() => rentButton(car)}>Lei bil</button>
          </section>
        ))}
      </section>
    </>
  );
};

export default AllCars;
