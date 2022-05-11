import React, {useState, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux";
import { loginUser } from "../reducers/actions/users"
import { validate, handleInput} from "./helpers"

const LoginScreen = () => {

   const [loginData, setLoginData] = useState({
      email: '',
      password: ''
   })

   const [formErrors, setFormErrors] = useState({});
   const [isSubmit, setIsSubmit] = useState(false);

   const dispatch = useDispatch();
   const navigate = useNavigate();

   const handleOnSubmit = (e) => {
      e.preventDefault();
      setFormErrors(validate(loginData));
      setIsSubmit(true);
   }

   useEffect(() => {
      if (Object.keys(formErrors).length === 0 && isSubmit) {
         dispatch(loginUser(loginData, navigate));
         reset();
      } else {
         console.log(formErrors)
      }
   }, [formErrors])

   const reset = () => {
      setLoginData({
         email: '',
         password: ''
      })
   }


   return (
      <div className="container-fluid bg-grey login">
         <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6 col-sm-12 formLog">
               <form onSubmit={handleOnSubmit} >

                  <h1 style={{ textAlign: "center" }}>LOGIN</h1>

                  <label for="email">
                     <b>Email</b>
                  </label>
                  <input
                     type="text"
                     placeholder="Enter Email"
                     name={'email'}
                     value={loginData.email}
                     onChange={(e) => handleInput(e, setLoginData)}
                  />
                  <p className="text-danger">{formErrors.email}</p>

                  <label for="psw">
                     <b>Password</b>
                  </label>
                  <input
                     type="password"
                     placeholder="Enter Password"
                     name="password"
                     value={loginData.password}
                     onChange={(e) => handleInput(e, setLoginData)}
                  />
                  <p className="text-danger">{formErrors.password}</p>

                  <label>
                     <input
                        type="checkbox"
                        checked="checked"
                        name="remember"
                        style={{ marginBottom: "15px" }}
                     />{" "}
                     Remember me
                  </label>

                  <div className="clearfix">
                     <Link to='/'>
                        <button type="button" className="cancelbtn">
                           Go Back
                        </button>
                     </Link>
                     <button type="submit" className="signupbtn">
                        Login
                     </button>
                  </div>

               </form>
            </div>
            <div className="col-md-3"></div>
         </div>

      </div>

   );
};

export default LoginScreen;
