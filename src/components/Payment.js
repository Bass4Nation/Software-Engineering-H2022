import { useLocation, useNavigate } from "react-router-dom";

const Payment = () => {
  const userArray = JSON.parse(localStorage.getItem("userArray"));
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  const location = useLocation();

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
            key: location.state.id,
            owner: location.state.owner,
            car: location.state.car,
            price: location.state.renting_out_price,
            available_time: location.state.available_time,
            return_time: location.state.return_time,
          };
          userArray[loggedInUser].rented.push(myObj);
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
      <p>Tidspunkt: {location.state.available_time} - {location.state.return_time}</p>
      <p></p>

      <h3>Betaling håndteres av eksterene avhengihter</h3>
      <button onClick={handleCancel}>Avbryt</button>
      <button data-testid="payButton" onClick={handlePay}>Betal</button>

    </div>
  );
};

export default Payment;
