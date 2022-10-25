import { useLocation, useNavigate } from "react-router-dom"

const Payment = () => {
    const userArray = JSON.parse(localStorage.getItem("userArray"));

    const location = useLocation();
    console.log(location)

    const navigate = useNavigate()

    function handleCancel(){
        navigate("/")
    }

    function handlePay(){
        

    }

  return (
    <div>
        <h2>Betaling håndteres av eksterene avhengihter</h2>
        <button onClick={handleCancel}>Cancel</button>
        <button onClick={handlePay}>Pay</button>

    </div>
  );
};

export default Payment;
