import React from "react";
import { useNavigate, Link } from "react-router-dom";
import style from "./styles/AllCars.module.css";

const AllCars = () => {
  const userArray = JSON.parse(localStorage.getItem("userArray")) || [];
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")) || 0;

  var AllPosts = [];
  for (let i = 0; i < userArray.length; i++) {
    if (userArray[i].posts.length > 0) {
      for (let j = 0; j < userArray[i].posts.length; j++) {
        AllPosts.push(userArray[i].posts[j]);
      }
    }
  }

  const [display_array, setdisplay_array] = React.useState(AllPosts);

  const navigate = useNavigate(); //https://reactrouter.com/en/main/hooks/use-navigate
  const rentButton = (value) => {
    //KANSKJE VI SKAL FJENRE POSTEN HVIS DEN ER UTLEID=?!!
    if (value.rented_out) {
      console.log("utleid!");
    } else {
      navigate("/payment", { state: value });
    }
  };

  const [highprice, sethighprice] = React.useState();
  const [remove_rented_out, setremove_rented_out] = React.useState(false);

  const [availablefrom, setavailablefrom] = React.useState();
  const [availableto, setavailableto] = React.useState();

  const toggleRented_out = () => setremove_rented_out((prevbool) => !prevbool);

  function handleHighPriceChange(event) {
    sethighprice(event.target.value);
  }

  function handleAvailablefrom(event) {
    setavailablefrom(event.target.value);
  }

  function handleAvailableto(event) {
    setavailableto(event.target.value);
  }

  function FilterSubmit(event) {
    event.preventDefault();
    console.log(availablefrom);
    console.log(availableto);

    var myArr = AllPosts;
    console.log(myArr);

    if (remove_rented_out) {
      myArr = myArr.filter((array) => array.rented_out === false);
    }

    if (highprice) {
      myArr = myArr.filter(
        (array) => parseInt(array.renting_out_price) < highprice
      );
    }

    const test123 = new Date(availablefrom);

    if (availablefrom) {
      myArr = myArr.filter(
        (array) => new Date(array.available_time) <= new Date(availablefrom)
      );
      myArr = myArr.filter(
        (array) => new Date(array.return_time) >= new Date(availablefrom)
      );

    }

    if (availableto) {
      myArr = myArr.filter(
        (array) => new Date(array.return_time) >= new Date(availableto)
      );
    }

    setdisplay_array(myArr);
  }

  return (
    <>
      <h1 className={style.allCarsTitle}>Alle biler til utleie</h1>
      <section className={style.mainContent}>
        <section className={style.filterform}>
          <label htmlFor="highprice">Highest price</label>
          <input
            type="number"
            name="highprice"
            value={highprice}
            onChange={handleHighPriceChange}
          />
          <label htmlFor="avaiablefrom">Avaiable from</label>
          <input
            type="datetime-local"
            name="avaiablefrom"
            value={availablefrom}
            onChange={handleAvailablefrom}
          />
          <label htmlFor="availableto">Avaiable to</label>
          <input
            type="datetime-local"
            name="availableto"
            value={availableto}
            min={availablefrom}
            onChange={handleAvailableto}
          />
          <section>
            <input
              type="checkbox"
              name="rented_out"
              checked={remove_rented_out}
              onChange={toggleRented_out}
            />
            <label htmlFor="rented_out">hide rented out cars</label>
          </section>

          <button onClick={FilterSubmit}>filter</button>
        </section>
        <section className={style.allCars}>
          {display_array.map((value) => (
            <>
              <section
                className={value.rented_out ? style.carRented : style.car}
                key={value.id}
              >
                <p>Pris: {value.renting_out_price} kr</p>
                <p>Tilgjenglig: {value.available_time}</p>
                <p>Returner: {value.return_time}</p>
                <p>
                  Bil: {value.car.brand} {value.car.model} ({value.car.year})
                </p>
                <img
                  src="/temp_car_img.jpg"
                  alt="car"
                  className={style.carImg}
                />
                <button
                  className={
                    value.rented_out ? style.carButtonDisabled : style.carButton
                  }
                  onClick={() => rentButton(value)}
                >
                  {value.rented_out ? "Utleid" : "Lei bilen"}
                </button>
              </section>
            </>
          ))}
        </section>
      </section>
    </>
  );
};

export default AllCars;

//<h3>posts_local_array.car</h3>
//<p>{posts_local_array.renting_out_price}</p>
