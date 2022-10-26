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
  };

  const cancel_renting = (value) => {
    for (var i = 0; i < userArray[loggedInUser].rented.length; i++) {
      if (userArray[loggedInUser].rented[i].key === value.key) {
        userArray[value.userIndex].posts[value.postsIndex].rented_out = false;
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
          <h2 className={style.sectionTitle}>Your Rented cars:</h2>
          {user.rented.map((value) => (
            <section className={style.aElement}>
              <p>owner: {userArray[value.userIndex].username}</p>
              <p>
                car:{" "}
                {userArray[value.userIndex].posts[value.postsIndex].car.brand}
                {userArray[value.userIndex].posts[value.postsIndex].car.model}
                {userArray[value.userIndex].posts[value.postsIndex].car.year}
              </p>
              <button onClick={() => cancel_renting(value)}>
                cancel renting
              </button>
            </section>
          ))}
        </section>

        <section className={style.aSection}>
          <h2 className={style.sectionTitle}>Your Posts:</h2>
          {user.posts.map((value) => (
            <section className={style.aElement}>
              <h3>{value.title}</h3>
              <p>Pris: {value.renting_out_price}</p>
              <p>Text: {value.rentint_out_text}</p>
              <button onClick={() => deletepost(value)}>Slett Post</button>
            </section>
          ))}
        </section>

        <section className={style.aSection}>
          <h2 className={style.sectionTitle}>Your Registered Cars:</h2>
          {user.cars.map((car) => (
            <section className={style.aElement}>
              <h3>{car.name}</h3>
              <p>Merke: {car.brand}</p>
              <p>Model: {car.model}</p>
              <p>Årsmodell: {car.year}</p>
              <p>Pris: {car.price} kr i mnd</p>
              <button onClick={() => deleteCar(car)}>Slett bil</button>
            </section>
          ))}
        </section>
      </section>
    </div>
  );
};

export default Dashboard;

// function test(value) {
//   console.log("RAN FUNCTION!")
//   for (var i = 0; i < userArray.length; i++) {
//     for (var j = 0; j < userArray[i].posts[j].length; j++) {
//       console.log("ss")
//       if (userArray[i].posts[j].key === value.key) {
//         return user.rented.map((value) => (
//           <section>
//             <p>owner: {userArray[value.userIndex].username}</p>
//             <p>
//               car:{" "}
//               {userArray[value.userIndex].posts[value.postsIndex].car.brand}
//               {userArray[value.userIndex].posts[value.postsIndex].car.model}
//               {userArray[value.userIndex].posts[value.postsIndex].car.year}
//             </p>
//             <button onClick={() => cancel_renting(value)}>
//               cancel renting
//             </button>
//           </section>
//         ));
//       } else {
//         console.log("gone");
//       }
//     }
//   }
// }
