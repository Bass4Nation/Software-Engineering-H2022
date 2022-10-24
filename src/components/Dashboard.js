import React from "react";
// Brukerens profil/dashboard
const Dashboard = () => {

  const userArray = JSON.parse(localStorage.getItem("userArray"));
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  // Skal ta inn brukerens data fra "databasen" og vise det på siden.
  // Skal også ha mulighet til å endre på brukerens data.

  const [user, setUser] = React.useState(userArray[loggedInUser] || []);

  const deleteCar = (car) => {
    for(var i = 0; i < userArray[loggedInUser].cars.length; i++){
      if (userArray[loggedInUser].cars[i].id === car.id){
        userArray[loggedInUser].cars.splice(i, 1)
        localStorage.setItem("userArray", JSON.stringify(userArray));
        setUser({ //https://blog.logrocket.com/how-when-to-force-react-component-re-render/
          ...user,
          cars: userArray[loggedInUser].cars
        })
      }
    }
  } 
  


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
