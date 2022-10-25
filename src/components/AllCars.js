import React from "react";
// import RandomId from "./helper/helper.js";

const AllCars = () => {
  const userArray = JSON.parse(localStorage.getItem("userArray")) || [];
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")) || 0;

  console.log(userArray);

  const [display_array, setdisplay_array] = React.useState(() => {
    //get all cars from all users
    let all_cars = [];
    for (let i = 0; i < userArray.length; i++) {
      for (let j = 0; j < userArray[i].posts.length; j++) {
        all_cars.push(userArray[i].posts[j]);
      }
    }
    return all_cars;
  });

    // const myArr = [];
    // for (let i = 0; i < userArray.length; i++) {
    //   if (userArray[i].posts.length > 0) {
    //     for (let j = 0; j < userArray[i].posts.length; j++) {
    //       myArr.push(userArray[i].posts[j]);
    //     }
    //   }
    // }
    // return myArr;
  // });

  console.log(display_array);

  const rentButton = (value) => {
    console.log(value);
  };



  // display no car to show or show all cars
  const displayCars = () => {
    if (display_array.length === 0) {
      return <h1>No cars posted for rent</h1>;
    } else {
      return display_array.map((value) => (
        <section>
          <p>Pris: {value.renting_out_price}</p>
          <p>Text: {value.rentint_out_text}</p>
          <p>Seter: {value.car.seter}</p>
          <p>Brand: {value.car.brand}</p>
          <p>Model: {value.car.model}</p>
          <p>year: {value.car.year}</p>
          <button onClick={() => rentButton(value)}>Lei bil</button>
        </section>
      ));
    }
  };

  return (
    <>
      <h1>Alle biler til utleie</h1>
      <section>
      {displayCars()}
      </section>
    </>
  );
};

export default AllCars;

//<h3>posts_local_array.car</h3>
//<p>{posts_local_array.renting_out_price}</p>
