import React, { Fragment } from "react";
import paul from "../images/directors/paul.jpg"
import justina from "../images/directors/justina.jpg"
import josh from "../images/directors/josh.jpg"
import joe from "../images/directors/joe.jpg"

const AboutUsScreen = () => {
   return (
      <Fragment>
         <div className="about-section">
            <h1>About Our Staff</h1>
            <p>Below are our Board of Directors</p>
         </div>

         <h2 style={{ textAlign: "center" }}>Our Team</h2>
         <div className="row">
            <div className="column">
               <div className="card">
                  <img
                     src={joe}
                     alt="pst. Jonathan Onigbinde"
                     style={{ width: "100%", height: "510px"  }}
                  />
                  <div className="container">
                     <h2>Pastor Jonathan Onigbinde</h2>
                     <p className="title">Board Chairman</p>
                     <p>tabithaevangelmissions@gmail.com</p>
                  </div>
               </div>
            </div>

            <div className="column">
               <div className="card">
                  <img
                     src={josh}
                     alt="Joshua Dickson"
                     style={{ width: "100%", height: "510px" }}
                  />
                  <div className="container">
                     <h2>Mr Joshua Dickson</h2>
                     <p className="title">Administrator and Coordinator</p>
                     <p>tabithaevangelmissions@gmail.com</p>
                  </div>
               </div>
            </div>

            <div className="column">
               <div className="card">
                  <img
                     src={justina}
                     alt="Justina Nwokeocha"
                     style={{ width: "100%", height: "510px" }}
                  />
                  <div className="container">
                     <h2>Mrs Justina Nwokeocha</h2>
                     <p className="title">Board Secretary</p>
                     <p>tabithaevangelmissions@gmail.com</p>
                  </div>
               </div>
            </div>

            <div className="column">
               <div className="card">
                  <img
                     src={paul}
                     alt="Paul Zaruma"
                     style={{ width: "100%", height: "510px" }}
                  />
                  <div className="container card-body">
                     <h2>Barr. Paul Zaruma</h2>
                     <p className="title">Legal Adviser</p>
                     <p>tabithaevangelmissions@gmail.com</p>
                  </div>
               </div>
            </div>
         </div>

      </Fragment>
   );
};

export default AboutUsScreen;
