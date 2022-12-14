// Test libraries
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

//Components
import App from "../../App";

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
];

//Tester krav 6 - Administratorkonto skal kunne slette annonser  
it("Logged in user with admin rights", () => {
  localStorage.setItem("userArray", JSON.stringify(userArray));
  localStorage.setItem("uniqueid", 2);
  localStorage.setItem("loggedInUser", 0);

  render(<App />);
  const adminbutton = screen.getByTestId("AdminDelete");
  expect(adminbutton).toBeInTheDocument();
  expect(screen.getByText("toyota", { exact: false })).toBeTruthy();
  fireEvent.click(adminbutton);
  fireEvent.click(screen.getByTestId("navDashboard"));
  fireEvent.click(screen.getByTestId("navMain"));
  expect(
    screen.getByText("Ingen biler lastet opp i databasen enda", {
      exact: false,
    })
  ).toBeTruthy(); //
});

//--------------------Søke funksjon----------------------------

describe("Search function for filtering after price/date/rented out etc.", () => {
    //Krav 11, Brukere skal kunne filtrete alle annonser  
  it("Filtering cars under 100kr", () => {
    localStorage.setItem("userArray", JSON.stringify(userArray));
    localStorage.setItem("uniqueid", 2);
    localStorage.setItem("loggedInUser", 0);

    render(<App />);

    const highprice = screen.getByTestId("highprice");
    const filterButton = screen.getByTestId("filterButton");

    userEvent.type(highprice, "100");
    fireEvent.click(filterButton);

    expect(
      screen.getByText("Ingen biler lastet opp i databasen enda", {
        exact: false,
      })
    ).toBeTruthy();
  });

  it("Filtering cars under 1000kr", () => {
    localStorage.setItem("userArray", JSON.stringify(userArray));
    localStorage.setItem("uniqueid", 2);
    localStorage.setItem("loggedInUser", 0);

    render(<App />);

    const highprice = screen.getByTestId("highprice");
    const filterButton = screen.getByTestId("filterButton");

    userEvent.type(highprice, "1000");
    fireEvent.click(filterButton);

    expect(screen.getByText("toyota", { exact: false })).toBeTruthy();
  });

  //Krav 13. Brukere skal kunne se om bilen som skal bli utleid er ledig på valgt dato  
  it("Filtering cars available in december", () => {
    localStorage.setItem("userArray", JSON.stringify(userArray));
    localStorage.setItem("uniqueid", 2);
    localStorage.setItem("loggedInUser", 0);

    render(<App />);

    const avaiablefrom = screen.getByTestId("avaiablefrom");
    const availableto = screen.getByTestId("availableto");
    const filterButton = screen.getByTestId("filterButton");

    fireEvent.change(avaiablefrom, {
      target: { value: "2022-12-27T15:30" },
    });
    fireEvent.change(availableto, {
      target: { value: "2022-12-28T15:30" },
    });

    fireEvent.click(filterButton);

    expect(
      screen.getByText("Ingen biler lastet opp i databasen enda", {
        exact: false,
      })
    ).toBeTruthy();
  });

  it("Filtering cars available in november", () => {
    localStorage.setItem("userArray", JSON.stringify(userArray));
    localStorage.setItem("uniqueid", 2);
    localStorage.setItem("loggedInUser", 0);

    render(<App />);

    const avaiablefrom = screen.getByTestId("avaiablefrom");
    const availableto = screen.getByTestId("availableto");
    const filterButton = screen.getByTestId("filterButton");

    fireEvent.change(avaiablefrom, {
      target: { value: "2022-11-27T15:30" },
    });
    fireEvent.change(availableto, {
      target: { value: "2022-11-28T15:30" },
    });

    fireEvent.click(filterButton);

    expect(screen.getByText("toyota", { exact: false })).toBeTruthy();
  });

  it("Filtering out rented cars", () => {
    localStorage.setItem("userArray", JSON.stringify(userArray));
    localStorage.setItem("uniqueid", 2);
    localStorage.setItem("loggedInUser", 0);

    render(<App />);
    const rented_out = screen.getByTestId("rented_out");
    const filterButton = screen.getByTestId("filterButton");

    fireEvent.click(rented_out);
    fireEvent.click(filterButton);

    expect(screen.getByText("toyota", { exact: false })).toBeTruthy();
  });

  const userArrayRentedOut = [
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
          rented_out: true,
        },
      ],
      rented: [],
    },
  ];

  it("Filtering out rented cars (Displaying all cars available)", () => {
    localStorage.setItem("userArray", JSON.stringify(userArrayRentedOut));
    localStorage.setItem("uniqueid", 2);
    localStorage.setItem("loggedInUser", 0);

    render(<App />);
    const rented_out = screen.getByTestId("rented_out");
    const filterButton = screen.getByTestId("filterButton");

    fireEvent.click(rented_out);
    fireEvent.click(filterButton);

    expect(
      screen.getByText("Ingen biler lastet opp i databasen enda", {
        exact: false,
      })
    ).toBeTruthy();
  });
});
