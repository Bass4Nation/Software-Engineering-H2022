import React from "react";
import { useNavigate } from "react-router-dom";
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
    if (value.rented_out) {
      // console.log("utleid!");
    } else {
      navigate("/payment", { state: value });
    }
  };

  // Delete post from database and update display_array to reflect the change
  const adminDeletePost = (value) => {
    // console.log(value);
    for (let i = 0; i < userArray.length; i++) {
      if (userArray[i].posts.length > 0) {
        for (let j = 0; j < userArray[i].posts.length; j++) {
          if (userArray[i].posts[j].id === value.id) {
            userArray[i].posts.splice(j, 1);
            localStorage.setItem("userArray", JSON.stringify(userArray));
            setdisplay_array(display_array.filter((item) => item.id !== value.id));
          }
        }
      }
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
    // console.log(availablefrom);
    // console.log(availableto);

    var myArr = AllPosts;
    // console.log(myArr);

    if (remove_rented_out) {
      myArr = myArr.filter((array) => array.rented_out === false);
    }

    if (highprice) {
      myArr = myArr.filter(
        (array) => parseInt(array.renting_out_price) < highprice
      );
    }

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

  const noPostes = () => {
    return (
      <section className={style.noPosts}>
        <h1>Ingen biler lastet opp i databasen enda</h1>
        <p>
          Pr??v ?? registrer en bil og legg den ut til utleie etter innlogging
        </p>
      </section>
    );
  };

  return (
    <>
      <h1 className={style.allCarsTitle}>Alle biler til utleie</h1>
      <section className={style.mainContent}>
        <section className={style.filterform}>
          <label htmlFor="highprice">H??yeste pris</label>
          <input
            type="number"
            name="highprice"
            value={highprice || ""}
            onChange={handleHighPriceChange}
            data-testid="highprice"
          />
          <label htmlFor="avaiablefrom">Tilgjenglig fra</label>
          <input
            type="datetime-local"
            name="avaiablefrom"
            value={availablefrom || ""}
            onChange={handleAvailablefrom}
            data-testid="avaiablefrom"
          />
          <label htmlFor="availableto">Tilgjenglig til</label>
          <input
            type="datetime-local"
            name="availableto"
            value={availableto || ""}
            min={availablefrom}
            onChange={handleAvailableto}
            data-testid="availableto"
          />
          <section>
            <input
              type="checkbox"
              name="rented_out"
              checked={remove_rented_out}
              onChange={toggleRented_out}
              data-testid="rented_out"
            />
            <label htmlFor="rented_out">Skjul utleide biler</label>
          </section>

          <button data-testid="filterButton" onClick={FilterSubmit}>
            filtrer
          </button>
        </section>

        <section className={style.allCars}>
          {display_array.length === 0
            ? noPostes()
            : display_array.map((value) => (
                <React.Fragment key={value.id}>
                  <section
                    className={value.rented_out ? style.carRented : style.car}
                  >
                    {userArray[loggedInUser].isAdmin && (
                      <button
                        data-testid="AdminDelete"
                        onClick={() => adminDeletePost(value)}
                      >
                        Admin slett post
                      </button>
                    )}
                    <p>Pris: {value.renting_out_price} kr</p>
                    <p>Tilgjenglig: {value.available_time}</p>
                    <p>Returner: {value.return_time}</p>
                    <p>
                      Bil: {value.car.brand} {value.car.model} ({value.car.year}
                      )
                    </p>
                    <img
                      src="/temp_car_img.jpg"
                      alt="car"
                      className={style.carImg}
                    />
                    <button
                    data-testid="rentButton"
                      className={
                        value.rented_out
                          ? style.carButtonDisabled
                          : style.carButton
                      }
                      onClick={() => rentButton(value)}
                    >
                      {value.rented_out ? "Utleid" : "Lei bilen"}
                    </button>
                  </section>
                </React.Fragment>
              ))}
        </section>
      </section>
    </>
  );
};

export default AllCars;
