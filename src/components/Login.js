import React from "react";
import useEffect from "react";
import "./styles/Login.css";
import { useNavigate, Link } from "react-router-dom";

//////////////////////////////REGISTER LOGIC ///////////////////
// Her kan vi putte mer data om brukerkonotene som blir registrert
export default function Login(props) {
  const [userData, setUserData] = React.useState({
    username: "",
    isAdmin: false,
    cars: [],
    EnsureUniqueId: 0,
    posts: [],
  });

  // Set Userdata
  function registerHandleChange(event) {
    const { name, value, type, checked } = event.target;
    setUserData((prevUserData) => {
      return {
        ...prevUserData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  //RegisterHandleChange.  Gather data from event and put in array
  const [userArray, setUserArray] = React.useState(() => {
    //Gettig locaStorage and setting it as userArray
    const saved = localStorage.getItem("userArray");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });

  const [isNameTaken, setisNameTaken] = React.useState();

  function RegisterSubmitHandleChange(event) {
    event.preventDefault();
    //Check if username is taken
    const isNameTaken = userArray.some(
      (user) => user.username === userData.username
    ); // Check if username is taken
    // console.log(isNameTaken);
    if (isNameTaken === true) {
      setisNameTaken(<p>Username is already registered!</p>);
    } else {
      //Add user to userArray
      setUserArray((prevUserArray) => {
        return [...prevUserArray, userData];
      });
      setNotRegisteredUser();
    }
  }

  //Every Time userArray gets changed, it saves to LocalStorage
  React.useEffect(() => {
    localStorage.setItem("userArray", JSON.stringify(userArray));
  }, [userArray]);

  //just a print
  React.useEffect(() => {
    console.log(userArray, "- user Array has changed");
  }, [userArray]); // <-- here put the parameter to listen

  //Conditionally render either login or register
  const [RegisterRender, setRegisterRender] = React.useState(false);
  function toggleRegisterRender() {
    setRegisterRender((prevRegisterRender) => !prevRegisterRender);
  }

  //////////////////////////////LOGIN LOGIC///////////////////
  const [loginUsername, setloginUsername] = React.useState("");
  function loginHandleChange(event) {
    setloginUsername(event.target.value);
    console.log(loginUsername);
  }

  function checkUsernameAvailability(nameToCheck) {
    for (var i = 0; i < userArray.length; i++) {
      if (userArray[i].username === nameToCheck) {
        return true;
      }
    }
  }

  const navigate = useNavigate(); //

  //Ikke Helt ferdig
  const [NotRegisteredUser, setNotRegisteredUser] = React.useState(
    <p>no users are registered!</p>
  );
  function loginSubmitHandleChange(event) {
    event.preventDefault();
    for (var i = 0; i < userArray.length; i++) {
      if (userArray[i].username === loginUsername) {
        navigate("/");
        localStorage.setItem("loggedInUser", i);
      } else {
        setNotRegisteredUser(<p>Username is not registered!</p>);
      }
    }
  }

  //Conditionally NotRegisteredUser

  return (
    <div>
      {!RegisterRender && ( // This whole register form is conditionally rendered
        <div>
          <h2>Login</h2>
          <form onSubmit={loginSubmitHandleChange}>
            <input
              type="text"
              placeholder="username"
              value={loginUsername}
              onChange={loginHandleChange}
              name="LoginUsername"
              data-testid="logginUsername"
            />
            {NotRegisteredUser}
            <button data-testid="loginButton">Login</button>
          </form>
        </div>
      )}

      {RegisterRender && ( // This whole register form is conditionally rendered
        <div className="Login_wrapper">
          <h2>Register account</h2>
          <form onSubmit={RegisterSubmitHandleChange}>
            <input
              type="text"
              placeholder="username"
              value={userData.username}
              onChange={registerHandleChange}
              name="username"
              data-testid="registerUsername"
            />
            <input
              type="checkbox"
              id="isAdmin"
              checked={userData.isAdmin}
              onChange={registerHandleChange}
              name="isAdmin"
            />
            <label htmlFor="isAdmin">Admin konto</label>
            <br></br>
            {isNameTaken}
            <button data-testid="registerNewUserButton">Register User</button>
          </form>
        </div>
      )}

      <button onClick={toggleRegisterRender} data-testid="registerFormButton">
        {RegisterRender ? "Login" : "Register "} form
      </button>
    </div>
  );
}

function test() {
  return <p>ssd</p>;
}
