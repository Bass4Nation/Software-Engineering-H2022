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


// Hjelp til å lage tester under her
//To use getByTestId you need to add data-testid="whatever Id you want" to the element you want to test
