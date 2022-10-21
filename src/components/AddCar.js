import { useState } from "react";

const AddCar = () => {
  const [car, setCar] = useState({
    id: Array.length + 1,
    brand: "",
    model: "",
    year: "",
    price: "",
  });


  const addCarToCarArray = (event) => {
    // event.preventDefault();
    const carArray = JSON.parse(localStorage.getItem("userArray")) || [];
    carArray[0].cars.push(car);
    localStorage.setItem("userArray", JSON.stringify(carArray));
    console.log(carArray[0].cars);
  };

//   React.useEffect(() => {
//     localStorage.setItem("userArray", JSON.stringify(userArray));
//   }, [userArray]);


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
        <label>Pris pr mnd</label>
        <input
          type="text"
          name="price"
          value={car.price}
          onChange={(e) => setCar({ ...car, price: e.target.value })}
        />
      <button onClick={addCarToCarArray}> Legg til bil</button>
      </form>
    </>
  );
};

export default AddCar;
