import React from "react";
import "./signin.css";
import Cart from "../../image/cart.png"
import IconButton from "@mui/material/IconButton";
import { siginin } from "../../Services/userservice";
import { Button, TextField } from "@mui/material";
import { redirect, useNavigate } from "react-router-dom";


const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

function Signin(props) {
  const [signinObj, setSiginObj] = React.useState({email:"", password:""})
    const [errorObj, setErrorObj] = React.useState({
        emailError: false,
        emailHelper: "",
        passwordError: false,
        passwordHelper: "",
      });
      const navigate = useNavigate()
      
    const takeEmail = (event) => {
        setSiginObj((prevState) => ({ ...prevState, email: event.target.value }));
      };
      const takePassword = (e) => {
        setSiginObj((prevState) => ({ ...prevState, password: e.target.value }));
      };

      const submit = async () => {

        let emailTest = emailRegex.test(signinObj.email);
        let passwordTest = passwordRegex.test(signinObj.password);

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
      if (emailTest === true && passwordTest === true) {
        console.log("hi");
        let response = await siginin(signinObj);
        console.log(response);
        localStorage.setItem('token',response.data.data.token)
        //  redirect("/dashboard");
        // //  return <Navigate to= "/dashboard" />;
        navigate('/dashboard')
      }
    }
    const clickSignup = () => {
        props.listenToLoginPage();
      };
  return (
    <div className="login-form">
      <div className="main-container">
        <div className="left-box">
          <img className="left-box-image" src={Cart} alt="error" />
          <span className="left-box-text">Online Book Shopping</span>
        </div>
        <div className="right-box">
        <div className="first-box">
            <div className="signin">
            <IconButton style={{color: "#0A0102"}}>LOGIN</IconButton>
            </div>
            <div className="signup">
            <IconButton style={{color: "#878787"}} onClick={clickSignup}>SIGNUP</IconButton>
            </div>
          </div>
          <div className="email-box">
          <div className="email">Email id</div>
            <div className="emailtext">
            <TextField style={{width:"80%", height:"100%"}}
                   id="outlined-basic" 
                   label="email id" 
                   variant="outlined" 
                   size="small"
                   onChange={takeEmail}
                   error={errorObj.emailError}
                   helperText={errorObj.emailHelper}
                   />
            </div>
          </div>
          <div className="password-box">
            <div className="password">password</div>
            <div className="passwordtext">
            <TextField style={{width:"80%"}}
                   id="outlined-basic" 
                   label="password" 
                   variant="outlined" 
                   size="small"
                   onChange={takePassword}
            error={errorObj.passwordError}
            helperText={errorObj.passwordHelper}
            />
            </div>
            </div>
            <div className="signin-box">
          <Button variant="contained" style={{width:"85%", background: "#A03037", marginTop:"10px"}} onClick={submit}>Login </Button>
          </div>
            <div className="ok-box">OK</div>
            <div className="extra-box">
                <div>
                <Button variant="contained" style={{height:"100%",width:"126px ", background: "#4266B2", marginLeft:"10px"}}>Facebook </Button>
                </div>
                <div>
                <Button variant="contained" style={{height:"100%", width:"119px", background: "#E4E4E4", marginRight:"20px"}}>Google </Button>
                </div>
            </div>
        </div>
        </div>
        </div>
  )
}
export default Signin;