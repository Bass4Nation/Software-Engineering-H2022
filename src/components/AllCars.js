import React from "react";
import { useNavigate, Link } from "react-router-dom";
import style from "./styles/AllCars.module.css";

const AllCars = () => {
  const userArray = JSON.parse(localStorage.getItem("userArray")) || [];
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")) || 0;

  const [display_array, setdisplay_array] = React.useState(() => {
    const myArr = [];
    for (let i = 0; i < userArray.length; i++) {
      if (userArray[i].posts.length > 0) {
        for (let j = 0; j < userArray[i].posts.length; j++) {
          myArr.push(userArray[i].posts[j]);
        }
      }
    }
    return myArr;
  });

  console.log(display_array);

  const navigate = useNavigate(); //https://reactrouter.com/en/main/hooks/use-navigate
  const rentButton = (value) => {
    //KANSKJE VI SKAL FJENRE POSTEN HVIS DEN ER UTLEID=?!!
    if (value.rented_out) {
      console.log("utleid!");
    } else {
      navigate("/payment", { state: value });
    }
  };

  return (
    <>
      <h1 className={style.allCarsTitle}>Alle biler til utleie</h1>
      <section className={style.allCars}>
        {display_array.map((value) => (
          <>
            <section className={value.rented_out ? style.carRented : style.car} key={value.id}>
              <p>Pris: {value.renting_out_price}</p>
              <p>Text: {value.rentint_out_text}</p>
              <p>Seter: {value.car.seter}</p>
              <p>Brand: {value.car.brand}</p>
              <p>Model: {value.car.model}</p>
              <p>year: {value.car.year}</p>
              <p>rented_out; {String(value.rented_out)}</p>
              <img src="/temp_car_img.jpg" alt="car" 
              className={style.carImg}/>
              <button
                className={value.rented_out ? style.carButtonDisabled : style.carButton}
                onClick={() => rentButton(value)}
              >
                {value.rented_out ? "Utleid" : "Lei bilen"}
              </button>
            </section>
          </>
        ))}
      </section>
    </>
  );
};

export default AllCars;

//<h3>posts_local_array.car</h3>
//<p>{posts_local_array.renting_out_price}</p>
