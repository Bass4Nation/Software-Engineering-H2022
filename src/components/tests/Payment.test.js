// Test libraries
import { fireEvent, render, screen } from "@testing-library/react";

//Components
import App from "../../App";

const userArray = [
  {
    username: "Per",
    isAdmin: false,
    cars: [
      {
        id: 0,
        name: "Min Bil",
        brand: "Kia",
        model: "Pikanto",
        year: "2018",
        regnr: "SF2023",
      },
    ],
    posts: [
      {
        id: 0,
        owner: "Per",
        renting_out_price: "400",
        rentint_out_text: "",
        available_time: "2022-11-27T17:18",
        return_time: "2022-11-29T17:18",
        car: {
          id: 0,
          name: "Min Bil",
          brand: "Kia",
          model: "Pikanto",
          year: "2018",
          regnr: "SF2023",
        },
        rented_out: false,
      },
    ],
    rented: [],
  },
  {
    username: "Bob",
    isAdmin: false,
    cars: [],
    posts: [],
    rented: [],
  },
];

//Tester Krav 9, 10. Brukere skal kunne leie en valgt bil, Bruker skal tas til en kjøper side     
it("Rent car via buy button", () => {
  localStorage.setItem("userArray", JSON.stringify(userArray));
  localStorage.setItem("uniqueid", 2);
  localStorage.setItem("loggedInUser", 1);

  render(<App />);
  fireEvent.click(screen.getByTestId("rentButton"));

  const payButton = screen.getByTestId("payButton");
  expect(payButton).toBeInTheDocument();

  fireEvent.click(payButton);
  fireEvent.click(screen.getByTestId("navDashboard"));
  expect(screen.getByText("car: Kia-Pikanto (2018)", { exact: false })).toBeTruthy();
});
