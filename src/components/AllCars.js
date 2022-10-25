import React from "react";
import { useNavigate, Link } from "react-router-dom";

const AllCars = () => {

  const userArray = JSON.parse(localStorage.getItem("userArray"));
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  

  const [display_array, setdisplay_array] = React.useState(() => {
    const myArr = [] 
    for (let i = 0; i < userArray.length; i++) {
      if ((userArray[i].posts.length) > 0){
        for (let j = 0; j < userArray[i].posts.length; j++) {
          (myArr.push(userArray[i].posts[j]))
        }
      }
    }
    return myArr;
  });

  console.log(display_array)


  const navigate = useNavigate(); //https://reactrouter.com/en/main/hooks/use-navigate
  const rentButton = (value) => { //KANSKJE VI SKAL FJENRE POSTEN HVIS DEN ER UTLEID=?!!
    if (value.rented_out){
      console.log("utleid!")  
    }else{
      navigate("/payment", {state: value});
    }
  };

  return (
    <>
      <h1>Alle biler til utleie</h1>
        <section>
        {display_array.map((value) => (
          <section>
            <p>Pris: {value.renting_out_price}</p>
            <p>Text: {value.rentint_out_text}</p>
            <p>Seter: {value.car.seter}</p>
            <p>Brand: {value.car.brand}</p>
            <p>Model: {value.car.model}</p>
            <p>year: {value.car.year}</p>
            <p>rented_out; {String(value.rented_out)}</p>
            <button onClick={() => rentButton(value)}>Lei bil</button>
          </section>
        ))}
      </section>
    </>
  );
};

export default AllCars;

//<h3>posts_local_array.car</h3>
//<p>{posts_local_array.renting_out_price}</p>