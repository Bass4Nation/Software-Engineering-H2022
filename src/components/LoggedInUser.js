import React from "react";

const LoggedInUser = (props) => {
  const [user, setUser] = React.useState("");

  React.useEffect(() => {
    const saved = localStorage.getItem("loggedInUser");
    const initialValue = JSON.parse(saved);
    setUser(initialValue.username);
  }, []);

  return (
    <>
      <p>{user}</p>
    </>
  );
};

export default LoggedInUser;
