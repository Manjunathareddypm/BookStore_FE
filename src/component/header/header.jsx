import React from "react";
import "./header.css";
import education from "../../image/education.png";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";

function Header() {
  return (
    <div className="header">
      <div className="left">
        <div className="booktext"><img src={education} alt="education" className="left-img" /></div>
        <div className="booktext" style={{color:"white", marginBottom: "5px"}}>Bookstore</div>
      </div>
      
      <div className='search'>
            <div className='s1box'><SearchIcon /></div>
            <div className='serbox'><input className='serbox1' type="text" placeholder="search" /></div>
            {/* <div className='s2box'><a>&#9932;</a></div> */}
        </div>
        <div className="rigcart">
           <div className="rig">
           <div className="profile12" style={{color:"white"}}><Person2OutlinedIcon /> </div>
             <div className="protext" style={{color:"white", fontSize:"12px", marginTop:"8px"}}>Profile</div>
          </div>

            <div className="rig1">
           <div className="cart" style={{color:"white"}}><ShoppingCartOutlinedIcon /> </div>
            <div className="carttext" style={{color:"white", fontSize:"12px", marginTop:"8px"}}>Cart</div>
            </div>
            </div> 
        </div>
        
  );
}

export default Header;
