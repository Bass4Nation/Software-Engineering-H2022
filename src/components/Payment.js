import { useLocation, useNavigate } from "react-router-dom";

const Payment = () => {
  const userArray = JSON.parse(localStorage.getItem("userArray"));
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  const uniqueid = JSON.parse(localStorage.getItem("uniqueid"))

  const location = useLocation();
  console.log(location.state);

  const navigate = useNavigate();

  function handleCancel() {
    navigate("/");
  }

  function handlePay() {
    for (let i = 0; i < userArray.length; i++) {
      for (let j = 0; j < userArray[i].posts.length; j++) {
        if (location.state.id === userArray[i].posts[j].id) {
          userArray[i].posts[j].rented_out = true;
          const myObj = {
            key: uniqueid,
            userIndex: i,
            postsIndex: j,
          };
          userArray[loggedInUser].rented.push(myObj);
          const newuniqueid = uniqueid + 1;
          localStorage.setItem("uniqueid", JSON.stringify(newuniqueid));
          localStorage.setItem("userArray", JSON.stringify(userArray));
          navigate("/");
        }
      }
    }
  }

  return (
    <div>
      <h3>Din valgte bil:</h3>
      <p>
        Bil: {location.state.car.brand}-{location.state.car.model},{" "}
        {location.state.car.year}
      </p>
      <p>Pris: {location.state.renting_out_price}</p>

      <h3>Betaling håndteres av eksterene avhengihter</h3>
      <button onClick={handleCancel}>Cancel</button>
      <button onClick={handlePay}>Pay</button>
    </div>
  );
};

export default Payment;
