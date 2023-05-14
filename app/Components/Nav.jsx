import { Link, useLocation } from "@remix-run/react";

const Nav = () => {

    const location = useLocation();
   return (
      <nav className="navegacion">
         <Link className={location.pathname === "/" ? "active" : ""} to="/">
            Inicio
         </Link>
         <Link className={location.pathname === "/about" ? "active" : ""} to="/about">
            Nosotros
         </Link>
         <Link className={location.pathname === "/store" ? "active" : ""} to="/store">
            Tienda
         </Link>
         <Link className={location.pathname === "/blog" ? "active" : ""} to="/blog">
            Blog
         </Link>
      </nav>
   );
};

export default Nav;
