import React, { Fragment} from 'react';
import {useDispatch}  from 'react-redux'
import { useNavigate } from "react-router-dom";
import logo from "../images/logo.png"
import { Link } from 'react-router-dom';
import {logoutUser} from '../reducers/actions/users'


const NavBar = () => {
   const user = JSON.parse(localStorage.getItem("user"));
   //  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
   //  useEffect(()=>{
   //      setUser(JSON.parse(localStorage.getItem("user")));
   //  }, [user])
   console.log(user)
   const dispatch = useDispatch()
   const navigate = useNavigate()
   
   const handleLogout = () => {
      dispatch(logoutUser(navigate));
   };

  return (
    <div>
         <nav className="navbar navbar-default navbar-fixed-top navbar-light">
            <div className="container">
               <div className="navbar-header">
                  <button
                     type="button"
                     className="navbar-toggle"
                     data-toggle="collapse"
                     data-target="#myNavbar"
                  >
                     <span className="icon-bar"></span>
                     <span className="icon-bar"></span>
                     <span className="icon-bar"></span>
                  </button>
                  

                  <img
                     className="navbar-brand logos"
                     alt={"my awesome logo"}
                     src={logo}
                  />
        
               </div>
               <div className="collapse navbar-collapse" id="myNavbar">
                  <ul className="nav navbar-nav navbar-right">
                     <li>
                        <Link to="/">HOME</Link>
                     </li>
                     <li>
                        <Link to="/service">SERVICES</Link>
                     </li>
                     <li>
                        <Link to="/help">HELP</Link>
                     </li>
                     <li>
                        <Link to="/contact">CONTACT</Link>
                     </li>
                     <li>
                        <Link to="/stories">STORIES</Link>
                     </li>
                     <li>
                        <Link to="/about">ABOUT</Link>
                     </li>
                     {user&& (
                         <Fragment>
                            <li>
                                <Link to="/post">POST</Link>
                            </li>
                            <li>
                                <Link to="/" onClick={() => handleLogout()} >LOGOUT</Link>
                            </li>
                         </Fragment>
                     )}
                     {!user && (
                     <li>
                        <Link to="/login">LOGIN</Link>
                     </li>
                     )}
                  </ul>
               </div>
            </div>
         </nav> 

    </div>
  )
}

export default NavBar;
