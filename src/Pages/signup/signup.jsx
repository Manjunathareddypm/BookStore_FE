import React from "react";
import "./signup.css";
import Cart from "../../image/cart.png"
import IconButton from "@mui/material/IconButton";
import { Box, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import {signup1} from "../../Services/userservice"

const firstNameRegex = /^[A-Z]{1,1}[a-z]{3,30}$/;
const lastNameRegex = /^[a-z[A-Z]{3,30}$/;
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const passwordRegex = /^[a-z]{1,3}[A-Z]{1,1}[0-9]{1,4}$/;

function SignUp(props) {
  const [signupObj, setSigupObj] = React.useState({firstName:"", lastName:"", email:"", password:""})
  const [errorObj, setErrorObj] = React.useState({
    firstNameError:false,
    firstNameHelper:"",
    lastNameError:false,
    lastNameHelper:"",
    emailError: false,
    emailHelper: "",
    passwordError: false,
    passwordHelper: "",
  });

  const takefirstname = (fname) => {
    setSigupObj((prevState) => ({ ...prevState, firstName: fname.target.value }));
  }
  const takelastname = (lname) => {
    setSigupObj((prevState) => ({ ...prevState, lastName: lname.target.value }));
  }
  const takeEmail = (event) => {
    setSigupObj((prevState) => ({ ...prevState, email: event.target.value }));
  };
  const takePassword = (e) => {
    setSigupObj((prevState) => ({ ...prevState, password: e.target.value }));
  };
  const submit = async () => {

    let firstnameTest = firstNameRegex.test(signupObj.firstName)
    let lastnameTest = lastNameRegex.test(signupObj.lastName)
    let emailTest = emailRegex.test(signupObj.email);
    let passwordTest = passwordRegex.test(signupObj.password);

    if (firstnameTest === false) {
      setErrorObj((prevState) => ({
        ...prevState,
        firstNameError: true,
        firstNameHelper: "enter correct email",
      }));
    } else {
      setErrorObj((prevState) => ({
        ...prevState,
        firstNameError: false,
        firstNameHelper: "",
      }));
    }

    if (lastnameTest === false) {
      setErrorObj((prevState) => ({
        ...prevState,
        lastNameError: true,
        lastNameHelper: "enter correct email",
      }));
    } else {
      setErrorObj((prevState) => ({
        ...prevState,
        lastNameError: false,
        lastNameHelper: "",
      }));
    }

    if (emailTest === false) {
        setErrorObj((prevState) => ({
          ...prevState,
          emailError: true,
          emailHelper: "enter correct email",
        }));
      } else {
        setErrorObj((prevState) => ({
          ...prevState,
          emailError: false,
          emailHelper: "",
        }));
      }
      if (passwordTest === false) {
        setErrorObj((prevState) => ({
          ...prevState,
          passwordError: true,
          passwordHelper: "enter correct password",
        }));
      } else {
        setErrorObj((prevState) => ({
          ...prevState,
          passwordError: false,
          passwordHelper: "",
        }));
  }
  if (firstnameTest === true && lastnameTest === true && emailTest === true && passwordTest === true) {
    let response = await signup1(signupObj);
    console.log(response);
    console.log('User Signed Up Successfully...');
    // return <Navigate to="/" />;
  }
}
  
  const clickLogin = () => {
    props.listenToSignUpPage();
  };
  return (
    <div className="signup-form">
      <div className="main-container">
        <div className="left-box">
          <img className="left-box-image" src={Cart} alt="error" />
          <span className="left-box-text">Online Book Shopping</span>
        </div>
        <div className="right-box">
          <div className="first-box">
            <div className="signin">
            <IconButton style={{color: "#878787"}} onClick={clickLogin}>LOGIN</IconButton>
            </div>
            <div className="signup">
            <IconButton style={{color: "#0A0102"}}>SIGNUP</IconButton>
            </div>
          </div>
          <div className="second-box">
            <div className="firstname1">full name</div>
            <div className="fnametext1">
            <TextField style={{width:"80%", height:"70%", marginBottom:"10px"}}
                   id="outlined-basic" 
                   label="First name" 
                   variant="outlined"
                   size="small"
                   onChange={takefirstname}
                   error={errorObj.firstNameError}
                   helperText={errorObj.firstNameHelper}/>
            </div>
          </div>
          <div className="third-box">
          <div className="email1">Email id</div>
            <div className="emailtext1">
            <TextField style={{width:"80%", height:"70%", marginBottom:"10px"}}
                   id="outlined-basic" 
                   label="email id" 
                   variant="outlined" 
                   size="small"
                   onChange={takeEmail}
            error={errorObj.emailError}
            helperText={errorObj.emailHelper}/>
            </div>
          </div>
          <div className="fourth-box">
            <div className="password1">password</div>
            <div className="passwordtext1">
            <TextField style={{width:"80%", height:"70%", marginBottom:"10px"}}
                   id="outlined-basic" 
                   label="password" 
                   variant="outlined"
                   size="small"
                   onChange={takePassword}
                  error={errorObj.passwordError}
                  helperText={errorObj.passwordHelper} />
            </div></div>
          <div className="fifth-box">
          <div className="mobile">lastName</div>
            <div className="mobiletext">
            <TextField style={{width:"80%", height:"70%", marginBottom:"10px"}}
                   id="outlined-basic" 
                   label="lastName" 
                   variant="outlined" 
                   size="small"
                   onChange={takelastname}
                  error={errorObj.lastNameError}
                  helperText={errorObj.lastNameHelper}/>
            </div>
          </div>
          <div className="six-box1">
          <Button variant="contained" style={{width:"80%", background: "#A03037"}} onClick={submit}>SIGNUP </Button>
          </div>
          
      </div>
      </div>
    </div>
  );
}

export default SignUp;
