import { Link } from "@remix-run/react";

//"guitar" es un Props que viene desde store.jsx trae una Objeto con los datos(guitarras) desde la api
const Guitars = ({ guitar }) => {
   //destructuring del Objeto "guitar"
   const { descripcion, imagen, url, nombre, precio } = guitar;

   return (
      <div className="guitarsStyles">
         <img src={imagen.data.attributes.formats.medium.url} alt="guitar" />
         <div className="contenido">
            <h1>{nombre}</h1>
            <p className="descripcion">{descripcion}</p>
            <p className="precio">${precio}</p>

            <Link className="link" to={`/guitar/${url}`}>
               ver porducto
            </Link>
         </div>
      </div>
   );
};

export default Guitars;
