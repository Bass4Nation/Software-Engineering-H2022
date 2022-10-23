import React from "react";
import { useEffect } from "react";
// Brukerens profil/dashboard
const Dashboard = () => {
  // Skal ta inn brukerens data fra "databasen" og vise det på siden.
  // Skal også ha mulighet til å endre på brukerens data.

  const [user, setUser] = React.useState(() => {
    //Gettig locaStorage and setting it as userArray

    const saved = localStorage.getItem("loggedInUser");
    const initialValue = JSON.parse(saved);
    console.log(initialValue);

    return initialValue;
  });

  const deleteCar = (car) => {
// delete a car with use of Id from userArray and loggedInUser and refresh page
    const userArray = JSON.parse(localStorage.getItem("userArray")) || [];
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    const loggedInUserIndex = userArray.findIndex(
      (user) => user.username === loggedInUser.username
    );
    const carIndex = userArray[loggedInUserIndex].cars.findIndex(
      (car) => car.id === car.id
    );
    userArray[loggedInUserIndex].cars.splice(carIndex, 1);
    localStorage.setItem("userArray", JSON.stringify(userArray));
    localStorage.setItem("loggedInUser", JSON.stringify(userArray[loggedInUserIndex]));
    window.location.reload(); // <-- refresh page to show changes
  };
  

  console.log(user);
  return (
    <div>
      <h1>Dashboard</h1>
      <section>
        <h2>Velkommen til din profil</h2>
        <p>{user.username}</p>
      </section>
      <section>
        {user.cars.map((car) => (
          <section>
            <h3>Merke: {car.brand}</h3>
            <p>Model: {car.model}</p>
            <p>Årsmodell: {car.year}</p>
            <p>Pris: {car.price} kr i mnd</p>
            <button onClick={() => deleteCar(car)}>Slett bil</button>
          </section>
        ))}
      </section>
    </div>
  );
};

export default Dashboard;
