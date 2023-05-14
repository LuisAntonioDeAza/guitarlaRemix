import { Link } from "@remix-run/react";

const Guitars = ({ guitar }) => {
    
   const { descripcion, imagen, url, nombre, precio } = guitar;

   return (
      <div className="guitarra">
         <img src={imagen.data.attributes.formats.medium.url} alt="guitarras" />
         <div className="contenido">
            <h1>{nombre}</h1>
            <p className="descripcion">{descripcion}</p>
            <p className="precio">${precio}</p>

            <Link className="enlace" to={`/guitar/${url}`}>
               ver porducto
            </Link>
         </div>
      </div>
   );
};

export default Guitars;
