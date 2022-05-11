import React, { useRef, useState } from 'react'
import emailjs from "@emailjs/browser";
import logo from "../images/logo.png"

const ContactUs = () => {
    const form = useRef();
    const [done, setDone] = useState(false)
    const sendEmail = (e) => {
        e.preventDefault();
        const {REACT_APP_EMAILJS_PK, REACT_APP_EMAILJS_SID, REACT_APP_EMAILJS_TID} = process.env
        emailjs
            .sendForm(
                REACT_APP_EMAILJS_SID,
                REACT_APP_EMAILJS_TID,
                form.current,
                REACT_APP_EMAILJS_PK
            )
            .then(
                (response) => {
                    console.log(response.text);
                    setDone(true);
                    form.reset();
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <div>
            <div id="contact" className="container-fluid bg-grey">
                <h2 className="text-center hard pt-4">CONTACT-US</h2>
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <img
                            className="logosx"
                            alt={"my awesome logo"}
                            src={logo}
                        />
                        <p>TEM would be so glad to hear from you, Leave us a message.</p>
                        <p><span className="glyphicon glyphicon-map-marker"></span> Jos, Nigeria</p>
                        <p><span className="glyphicon glyphicon-phone"></span> +234 818 252 6413</p>
                        <p><span className="glyphicon glyphicon-envelope"></span> tabithaevangelmissions@gmail.com</p>
                    </div>
                    <div className="col-md-6 col-sm-12 p-4">
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="row">
                                <div className="col-sm-6 form-group">
                                    <input className="form-control" id="name" name="user_name" placeholder="Name" type="text" />
                                </div>
                                <div className="col-sm-6 form-group">
                                    <input className="form-control" id="email" name="user_email" placeholder="Email" type="email" />
                                </div>
                            </div>
                            <textarea className="form-control" id="comments" name="message" placeholder="Comment" rows="5"></textarea>
                            <div className="row">
                                <div className="col-sm-12 form-group">
                                    <button className="pull-right" type="submit">Send</button>
                                </div>
                            </div>


                            <span>{done && "Thanks for Contacting TEM"}</span>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs
