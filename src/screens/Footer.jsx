import React from 'react'
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <div>
        <footer className="container-fluid text-center text-white">
            <Link to="#about">
               <span className="glyphicon glyphicon-chevron-up"></span>
            </Link>
            <h5>
               Copyright &copy; WrashTech
               <script>document.write(new Date().getFullYear());</script>
            </h5>
         </footer>
      
    </div>
  )
}

export default Footer
