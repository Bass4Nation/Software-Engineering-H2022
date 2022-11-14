import React from "react";
// import { generateRandomId } from "./utils/RandId";
import style from "./styles/Dashboard.module.css";
// Brukerens profil/dashboard

const Dashboard = () => {
  const userArray = JSON.parse(localStorage.getItem("userArray")) || [];
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")) || 0;
  // Skal ta inn brukerens data fra "databasen" og vise det på siden.
  // Skal også ha mulighet til å endre på brukerens data.

  const [user, setUser] = React.useState(userArray[loggedInUser] || []);
  const deleteCar = (car) => {
    for (var i = 0; i < userArray[loggedInUser].cars.length; i++) {
      if (userArray[loggedInUser].cars[i].id === car.id) {
        userArray[loggedInUser].cars.splice(i, 1);
        localStorage.setItem("userArray", JSON.stringify(userArray));
        setUser({
          //https://blog.logrocket.com/how-when-to-force-react-component-re-render/
          ...user,
          cars: userArray[loggedInUser].cars,
        });
      }
    }
  };

  const deletepost = (value) => {
    for (var i = 0; i < userArray[loggedInUser].posts.length; i++) {
      if (userArray[loggedInUser].posts[i].id === value.id) {
        userArray[loggedInUser].posts.splice(i, 1);
        localStorage.setItem("userArray", JSON.stringify(userArray));
        setUser({
          //https://blog.logrocket.com/how-when-to-force-react-component-re-render/
          ...user,
          posts: userArray[loggedInUser].posts,
        });
      }
    }
    for (var j = 0; j < userArray.length; j++) {
      //delete the "rented" array if the car is rented.
      for (var k = 0; k < userArray[j].rented.length; k++) {
        if (userArray[j].rented[k].key === value.id) {
          userArray[loggedInUser].rented.splice(j, 1);
          localStorage.setItem("userArray", JSON.stringify(userArray));
          setUser({
            ...user,
            rented: userArray[loggedInUser].rented,
          });
        }
      }
    }
  };

  const cancel_renting = (value) => {
    for (var j = 0; j < userArray.length; j++) {
      for (var k = 0; k < userArray[j].posts.length; k++) {
        if (userArray[j].posts[k].id === value.key) {
          userArray[j].posts[k].rented_out = false;
          localStorage.setItem("userArray", JSON.stringify(userArray));
        }
      }
    }
    for (var i = 0; i < userArray[loggedInUser].rented.length; i++) {
      if (userArray[loggedInUser].rented[i].key === value.key) {
        //     userArray[loggedInUser].posts[value.postsIndex].rented_out = false;
        userArray[loggedInUser].rented.splice(i, 1);
        localStorage.setItem("userArray", JSON.stringify(userArray));
        setUser({
          //https://blog.logrocket.com/how-when-to-force-react-component-re-render/
          ...user,
          rented: userArray[loggedInUser].rented,
        });
      }
    }
  };

  return (
    <div>
      <h1 className={style.pageTitle}>Dashboard</h1>
      <section>
        <h2 className={style.title} data-testid="DashboardTestID">
          Velkommen til din profil {user.username}!
        </h2>
      </section>
      <section className={style.AllSections}>
        <section className={style.aSection}>
          <h2 className={style.sectionTitle}>Dine leide biler:</h2>
          {user.rented.map((value) => (
            <section className={style.aElement}>
              <p>owner: {value.owner}</p>
              <p>
                tidspunkt: fra {value.available_time} til {value.return_time}
              </p>
              <p>
                car: {value.car.brand}-{value.car.model} ({value.car.year})
              </p>
              <p>price: {value.price}kr</p>
              <button onClick={() => cancel_renting(value)}>
                avbestille leie
              </button>
            </section>
          ))}
        </section>

        <section className={style.aSection}>
          <h2 className={style.sectionTitle}>Dine annonser</h2>
          {user.posts.map((value) => (
            <section className={style.aElement}>
              <h3>{value.car.name}</h3>
              <p>
                {value.car.brand}-{value.car.model} ({value.car.year})
              </p>
              <p>fra {value.available_time}</p>
              <p>til {value.return_time}</p>
              <p>Pris: {value.renting_out_price}kr</p>
              <button onClick={() => deletepost(value)}>Slett annonse</button>
            </section>
          ))}
        </section>

        <section className={style.aSection}>
          <h2 className={style.sectionTitle}>Dine registerte biler:</h2>
          {user.cars.map((car) => (
            <section className={style.aElement}>
              <h3>{car.name}</h3>
              <p>
                {car.brand} - {car.model} ({car.year})
              </p>
              <p>Regnr: {car.regnr} </p>
              <button onClick={() => deleteCar(car)}>Slett bil</button>
            </section>
          ))}
        </section>
      </section>
    </div>
  );
};

export default Dashboard;
