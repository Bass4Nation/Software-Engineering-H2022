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
    const saved = localStorage.getItem("userArray");
    const initialValue = JSON.parse(saved);
    for (var i = 0; i < initialValue.length; i++) {
      if (initialValue[i].username === user.username) {
        console.log("found user");
        initialValue[i].cars.pop(car);
        localStorage.setItem("userArray", JSON.stringify(initialValue));
      } 
    }
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
