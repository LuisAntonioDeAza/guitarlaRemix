import { Link } from "@remix-run/react";
import Nav from "./Nav";
import logo from "../../public/img/logo.svg";

export default function Header() {
   return (
      <header className="header">
         <div className="container bar">
            <Link className="logo" to="/">
               <img className="logo" src={logo} alt="logo imagen"/>
            </Link>

            {"Barra de navegacion"}
            <Nav />
         </div>
      </header>
   );
}
