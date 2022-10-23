import React from "react";
import LoggedInUser from "./LoggedInUser";

const Main = () => {

  let title = "Velkommen til forsiden";


  return (
    <>
      <section>
        <h2>{title}</h2>
        <p>
          {" "}
          Her så kan vi skrive om siden eller vise noen av biler til utleie.
          Kanskje?
        </p>
        <LoggedInUser test="username"/>
      </section>
    </>
  );
};

export default Main;
