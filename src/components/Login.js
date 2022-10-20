import React from "react";
import useEffect from "react";
import "./Login.css";
import { useNavigate, Link } from "react-router-dom";

//////////////////////////////REGISTER LOGIC ///////////////////
// Her kan vi putte mer data om brukerkonotene som blir registrert
export default function Login(props) {
  const [userData, setUserData] = React.useState({
    username: "",
    isAdmin: false,
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
    if (checkUsernameAvailability(event.target[0].value)) {
      setisNameTaken(<p>Username is already registered!</p>);
    } else {
      const myObj = {
        username: event.target[0].value,
        isAdmin: event.target[1].checked,
      };
      setUserArray((prevArray) => [...prevArray, myObj]); //async
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
        navigate("/", {
          state: {
            username: userArray[i].username,
            isAdmin: userArray[i].isAdmin,
          },
        });
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
            />
            {NotRegisteredUser}
            <button>Login</button>
          </form>
        </div>
      )}

      {RegisterRender && ( // This whole register form is conditionally rendered
        <div className="Login_wrapper">
          <h2>Register acount</h2>
          <form onSubmit={RegisterSubmitHandleChange}>
            <input
              type="text"
              placeholder="username"
              value={userData.username}
              onChange={registerHandleChange}
              name="username"
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
            <button>Register User</button>
          </form>
        </div>
      )}

      <button onClick={toggleRegisterRender}>
        {RegisterRender ? "Login" : "Register "} form
      </button>
    </div>
  );
}

function test() {
  return <p>ssd</p>;
}
