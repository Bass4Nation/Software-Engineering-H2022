// Test libraries
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

//Components
import App from "../../App";
import AddCar from "../AddCar";

const userArray = [
  {
    username: "Admin",
    isAdmin: true,
    cars: [
      {
        id: 0,
        name: "TestAdminBil",
        brand: "toyota ",
        model: "240",
        year: "2001",
        regnr: "AJ2032",
      },
    ],
    posts: [
      {
        id: 0,
        owner: "Admin",
        renting_out_price: "500",
        rentint_out_text: "",
        available_time: "2022-11-27T15:30",
        return_time: "2022-11-28T15:30",
        car: {
          id: 0,
          name: "TestAdminBil",
          brand: "toyota ",
          model: "240",
          year: "2001",
          regnr: "AJ2032",
        },
        rented_out: false,
      },
    ],
    rented: [],
  },
]

//--------------------ADMIN TEST------------------------------
it("Logged in user with admin rights", () => {
  
  localStorage.setItem("userArray", JSON.stringify(userArray));
  localStorage.setItem("uniqueid", 2);
  localStorage.setItem("loggedInUser", 0);

  render(<App />);

  const navFrontpage = screen.getByTestId("navMain");
  fireEvent.click(navFrontpage);

  const adminbutton = screen.getByTestId("AdminDelete");
  expect(adminbutton).toBeInTheDocument();

});
