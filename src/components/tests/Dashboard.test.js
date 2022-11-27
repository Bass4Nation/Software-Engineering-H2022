// Test libraries
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
//Components
import App from "../../App";

it("Sjekker om brukeren kommer til riktig dashboard ved innlogging", () => {
  render(<App />);

  const navLogin = screen.getByTestId("navLogin");
  fireEvent.click(navLogin); // Click on nav element: Login

  expect(screen.getByTestId("logginUsername")).toBeInTheDocument();

  const registerFormButton = screen.getByTestId("registerFormButton");
  fireEvent.click(registerFormButton); // Using fireEvent simulate to click the button

  const inputUsernameRegister = screen.getByTestId("registerUsername");
  userEvent.type(inputUsernameRegister, "test@mail.com");
  expect(screen.getByTestId("registerUsername")).toHaveValue("test@mail.com");

  fireEvent.click(screen.getByTestId("registerNewUserButton")); // User should be registered
  fireEvent.click(registerFormButton); // User should be registered

  const inputUsername = screen.getByTestId("logginUsername");
  userEvent.type(inputUsername, "test@mail.com");
  expect(screen.getByTestId("logginUsername")).toHaveValue("test@mail.com");
  fireEvent.click(screen.getByTestId("loginButton")); // User should be logged in

  const navDashboard = screen.getByTestId("navDashboard");
  fireEvent.click(navDashboard); // Click on nav element: Min side

  // //Logged in user should be able to see the Dashboard component
  const reqLogInText = screen.getByText(
    "Velkommen til din profil test@mail.com!"
  );
  expect(reqLogInText).toBeInTheDocument();
});


const userArray = [
  {
    "username": "Per",
    "isAdmin": false,
    "cars": [
      {
        "id": 0,
        "name": "Min Bil",
        "brand": "Kia",
        "model": "Pikanto",
        "year": "2018",
        "regnr": "SF2023"
      }
    ],
    "posts": [
      {
        "id": 0,
        "owner": "Per",
        "renting_out_price": "400",
        "rentint_out_text": "",
        "available_time": "2022-11-27T17:18",
        "return_time": "2022-11-29T17:18",
        "car": {
          "id": 0,
          "name": "Min Bil",
          "brand": "Kia",
          "model": "Pikanto",
          "year": "2018",
          "regnr": "SF2023"
        },
        "rented_out": true
      }
    ],
    "rented": []
  },
  {
    "username": "Bob",
    "isAdmin": false,
    "cars": [
      {
        "id": 2,
        "name": "Min Chevrolet ",
        "brand": "Chevrolet",
        "model": "Silverado 1500",
        "year": "2020",
        "regnr": "1000"
      }
    ],
    "posts": [
      {
        "id": 2,
        "owner": "Bob",
        "renting_out_price": "123",
        "rentint_out_text": "",
        "available_time": "",
        "return_time": "",
        "car": {
          "id": 2,
          "name": "Min Chevrolet ",
          "brand": "Chevrolet",
          "model": "Silverado 1500",
          "year": "2020",
          "regnr": "1000"
        },
        "rented_out": false
      }
    ],
    "rented": [
      {
        "key": 0,
        "owner": "Per",
        "car": {
          "id": 0,
          "name": "Min Bil",
          "brand": "Kia",
          "model": "Pikanto",
          "year": "2018",
          "regnr": "SF2023"
        },
        "price": "400",
        "available_time": "2022-11-27T17:18",
        "return_time": "2022-11-29T17:18"
      }
    ]
  }
]
//Krav 19, Brukere skal ha mulighet for å kansellere reservasjon av bil.  
it("cancel_renting removed from ui", () => {
  localStorage.setItem("userArray", JSON.stringify(userArray));
  localStorage.setItem("uniqueid", 4);
  localStorage.setItem("loggedInUser", 1);

  render(<App />);
  const cancel_renting = screen.getByTestId("cancel_renting");
  expect(cancel_renting).toBeInTheDocument();
  fireEvent.click(cancel_renting)
  expect(cancel_renting).not.toBeInTheDocument();
});

it("deletepost removed from ui", () => {
  localStorage.setItem("userArray", JSON.stringify(userArray));
  localStorage.setItem("uniqueid", 4);
  localStorage.setItem("loggedInUser", 1);

  render(<App />);
  const deletepost = screen.getByTestId("deletepost");
  expect(deletepost).toBeInTheDocument();
  fireEvent.click(deletepost)
  expect(deletepost).not.toBeInTheDocument();

});

it("deleteCar removed from ui", () => {
  localStorage.setItem("userArray", JSON.stringify(userArray));
  localStorage.setItem("uniqueid", 4);
  localStorage.setItem("loggedInUser", 1);

  render(<App />);
  const deleteCar = screen.getByTestId("deleteCar");
  expect(deleteCar).toBeInTheDocument();
  fireEvent.click(deleteCar)
  expect(deleteCar).not.toBeInTheDocument();
});

const userArray_deleted = [
  {
    "username": "Per",
    "isAdmin": false,
    "cars": [
      {
        "id": 0,
        "name": "Min Bil",
        "brand": "Kia",
        "model": "Pikanto",
        "year": "2018",
        "regnr": "SF2023"
      }
    ],
    "posts": [
      {
        "id": 0,
        "owner": "Per",
        "renting_out_price": "400",
        "rentint_out_text": "",
        "available_time": "2022-11-27T17:18",
        "return_time": "2022-11-29T17:18",
        "car": {
          "id": 0,
          "name": "Min Bil",
          "brand": "Kia",
          "model": "Pikanto",
          "year": "2018",
          "regnr": "SF2023"
        },
        "rented_out": false
      }
    ],
    "rented": []
  },
  {
    "username": "Bob",
    "isAdmin": false,
    "cars": [],
    "posts": [],
    "rented": []
  }
]

it("Deletefunctions removed from localstorage", () => {
  localStorage.setItem("userArray", JSON.stringify(userArray));
  localStorage.setItem("uniqueid", 4);
  localStorage.setItem("loggedInUser", 1);

  render(<App />);
  fireEvent.click(screen.getByTestId("cancel_renting"))
  fireEvent.click(screen.getByTestId("deletepost"))
  fireEvent.click(screen.getByTestId("deleteCar"))

  expect(localStorage.getItem("userArray")).toEqual(JSON.stringify(userArray_deleted))
});

//Krav 21, Brukere skal kunne se sine leide biler  
it("see rented cars", () => {
  localStorage.setItem("userArray", JSON.stringify(userArray));
  localStorage.setItem("uniqueid", 4);
  localStorage.setItem("loggedInUser", 1);

  render(<App />);
  expect(screen.getByText("Kia-Pikanto (2018)", { exact: false })).toBeTruthy();

});

//Krav 22, Brukere skal kunne se sine annonser 
it("see rented cars", () => {
  localStorage.setItem("userArray", JSON.stringify(userArray));
  localStorage.setItem("uniqueid", 4);
  localStorage.setItem("loggedInUser", 1);

  render(<App />);
  expect(screen.getByText("Chevrolet-Silverado 1500 (2020)", { exact: false })).toBeTruthy();
});

//Krav 23, Brukere skal kunne se sine registrerte biler. 
it("see rented cars", () => {
  localStorage.setItem("userArray", JSON.stringify(userArray));
  localStorage.setItem("uniqueid", 4);
  localStorage.setItem("loggedInUser", 1);

  render(<App />);
  expect(screen.getByText("Regnr: 1000", { exact: false })).toBeTruthy();
});