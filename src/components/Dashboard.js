import React from "react";
import { generateRandomId } from "./utils/RandId";
// Brukerens profil/dashboard

const Dashboard = () => {
  const userArray = JSON.parse(localStorage.getItem("userArray"));
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  // Skal ta inn brukerens data fra "databasen" og vise det på siden.
  // Skal også ha mulighet til å endre på brukerens data.

  const [user, setUser] = React.useState(userArray[loggedInUser] || []);
  console.log(generateRandomId());
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
  };

  return (
    <div>
      <h1 >Dashboard</h1>
      <section>
        <h2 data-testid="DashboardTestID">Velkommen til din profil {user.username}!</h2>
      </section>

      <section>
        <h2>Your Posts:</h2>
        {user.posts.map((value) => (
          <section>
            <h3>{value.title}</h3>
            <p>Pris: {value.renting_out_price}</p>
            <p>Text: {value.rentint_out_text}</p>
            <button onClick={() => deletepost(value)}>Slett Post</button>
          </section>
        ))}
      </section>

      <section>
        <h2>Your Cars:</h2>
        {user.cars.map((car) => (
          <section>
            <h3>{car.name}</h3>
            <p>Merke: {car.brand}</p>
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
