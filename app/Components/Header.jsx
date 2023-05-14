import { Link } from "@remix-run/react";
import Nav from "./Nav";
import logo from '../../public/img/logo.svg'

const Header = () => {

   return (
      <header className="header">
         <div className="contedor barra">
            <Link className="logo" to="/">
               <img className="logo" src={logo} alt="logo imagen"></img>
            </Link>

            <Nav />
         </div>
      </header>
   );
};

export default Header;
