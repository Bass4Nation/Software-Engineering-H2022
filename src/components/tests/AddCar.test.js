// Test libraries
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
//Components
import App from "../../App";
import AddCar from "../AddCar";
import Main from "../../components/Main";
import Login from "../Login.js";

it("Check if AddCar render without issues", () => {
  render(
    <BrowserRouter>
      <AddCar />
    </BrowserRouter>
  );
  const reqLogInText = screen.getByTestId("reqLogInTest");
  expect(reqLogInText).toBeInTheDocument();
});

// it("Add a car and check if it is added to the database", () => {
//     render(
//         <BrowserRouter>
//         <AddCar />
//         </BrowserRouter>
//     );
//     const addCarButton = screen.getByTestId("addCarButtonTest");
//     const brandInput = screen.getByPlaceholderText("Brand");
//     const modelInput = screen.getByPlaceholderText("Model");
//     const yearInput = screen.getByPlaceholderText("Year");
//     const priceInput = screen.getByPlaceholderText("Price");
    
//     userEvent.type(brandInput, "Volvo");
//     userEvent.type(modelInput, "V40");
//     userEvent.type(yearInput, "2015");
//     userEvent.type(priceInput, "2000");
    
//     fireEvent.click(addCarButton);
    
//     expect(screen.getByText("Volvo")).toBeInTheDocument();
//     expect(screen.getByText("V40")).toBeInTheDocument();
//     expect(screen.getByText("2015")).toBeInTheDocument();
//     expect(screen.getByText("2000")).toBeInTheDocument();
// });

// Hjelp til å lage tester under her
//To use getByTestId you need to add data-testid="whatever Id you want" to the element you want to test
