import { useLoaderData,Link } from "@remix-run/react";
import { getGuita } from "~/Models/guitarras.server";
import styles from "~/styles/guitar.css";

//metaDate
export function meta({ data }) {
   //retorno si no encuentra ninguna guitarra
   if (!data) {
      return [
         {
            title: `guitarLa - Ninguna guitarra encontrada`,
            descripcion: `Guitarras, venta de guitarras - guitarra no encontrada`,
         },
      ];
   }
   //Cuando encontro resultados en la API retorna
   return [
      {
         title: `guitarLa - ${data.guitar.data[0].attributes.nombre}`,
         descripcion: `Guitarras, venta de guitarras guitarra ${data.guitar.data[0].attributes.nombre}`,
      },
   ];
}

//importa la hoja de estilos
export function links() {
   return [
      {
         rel: "styleSheet",
         href: styles,
      },
   ];
}

//Loader - cargador que espera la respuesta de la api
export async function loader({ params }) {
   //params recibe desde guitar.jsx el nombre de la guitarra
   const { guitarUrl } = params;
   const guitar = await getGuita(guitarUrl);

   if (guitar.data.length === 0) {
      throw new Response("", {
         status: 404,
         statusText: "Guitarra No encontrada",
      });
   }

   return { guitar };
}

const Guitarras = () => {
   const guitar = useLoaderData(); //Obtiene los datos optenidos por la API(nombre de guitarra espesifica)

   //destructuring de los datos devuelto por la API
   const { nombre, imagen, descripcion, precio } = guitar.guitar.data[0].attributes;

   return (
      //Contenedor
      <div className="container guitarsStyles">
         <img src={imagen.data.attributes.url} alt={nombre} />

         <div className="contenido">
            <h1 className="">{nombre}</h1>
            <p>{descripcion}</p>
            <h1 className="price">${precio}</h1>
            <div className="goback">
            <Link className="links" to="/store" >
               Ir atras
               </Link>
               </div>
         </div>
      </div>
   );
};

export default Guitarras;
