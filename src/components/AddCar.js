import { useState } from "react";

const AddCar = () => {

  // A useState for add a car with random id
  const [car, setCar] = useState({
    id: Math.floor(Math.random() * 10000),
    brand: "",
    model: "",
    year: "",
    price: "",
  });

  // const [car, setCar] = useState({
  //   id: Array.length + 1,
  //   brand: "",
  //   model: "",
  //   year: "",
  //   price: "",
  // });

  const addCarToCarArray = () => {
    // event.preventDefault();
    // Update userArray with new car
    const carArray = JSON.parse(localStorage.getItem("userArray")) || [];
    carArray[0].cars.push(car);
    localStorage.setItem("userArray", JSON.stringify(carArray));
    // Update loggedInUser with new car
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    loggedInUser.cars.push(car);
    localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
    // console.log(carArray[0].cars);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCar((prevCar) => {
      return {
        ...prevCar,
        [name]: value,
      };
    });
  };

  return (
    <>
      <h1>Her kan du registrere bilen din til utleie</h1>
      <form onSubmit={addCarToCarArray}>
        <input
          type="text"
          name="brand"
          placeholder="Brand"
          value={car.brand}
          onChange={handleChange}
        />
        <input
          type="text"
          name="model"
          placeholder="Model"
          value={car.model}
          onChange={handleChange}
        />
        <input
          type="text"
          name="year"
          placeholder="Year"
          value={car.year}
          onChange={handleChange}
        />
        <input
          type="text"
          name="price"
          placeholder="Price"
          value={car.price}
          onChange={handleChange}
        />
        <button type="submit">Add car</button>
      </form>
    </>
  );
};

export default AddCar;
