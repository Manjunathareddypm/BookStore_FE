import React, { useState } from "react";
import SignUp from "../signup/signup";
import Signin from "../signin/signin";


import Main from "../../component/books/books";
import Footer from "../../component/footer/footer";
import Header from "../../component/header/header";
import Books from "../../component/books/books";


function Dashboard() {
  const [toggles, setToggle] = useState(true);

  const listenToSignUpPage = () => {
    setToggle(false);
  };

  const listenToLoginPage = () => {
    setToggle(true);
  };
  return (
    <div>
      <Header />
      <Books />
      <Footer />
      {/* <div>
        {toggles ? (
          <SignUp listenToSignUpPage={listenToSignUpPage} />
        ) : (
          <Signin listenToLoginPage={listenToLoginPage} />
        )}
      </div> */}
    </div>
  );
}

export default Dashboard;