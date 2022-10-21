import React from "react";

const LoggedInUser = (props) => {
    const [user, setUser] = React.useState(() => {
        //Gettig locaStorage and setting it as userArray
        if (localStorage.getItem("loggedInUSer")!== null){
            const saved = localStorage.getItem("loggedInUser");
            const initialValue = JSON.parse(saved);
            return initialValue.username 
        }else{
            return "No User is Logged in"
        }
      });


  return (
    <>
      <p>{user}</p>
    </>
  );
};

export default LoggedInUser;
