import React from "react";
import Nav from "./Nav";

const Footer = () => {
   return (
      <footer className="footer">
         <div className="contenedor footer">
            <Nav />

            <p className="cpr">Todos los derechos reservados{new Date().getFullYear()}</p>
         </div>
      </footer>
   );
};

export default Footer;
