import { getGuitar } from "~/Models/guitarras.server.js";
import { useLoaderData } from "@remix-run/react";
import Guitars from "~/Components/Guitars";
import styles from "~/styles/guitar.css";

//links componens para exportar los estilos css
export function links() {
   return [
      {
         rel: "styleSheet",
         href: styles,
      },
   ];
}

//metaDate
export function meta() {
   return [
      {
         title: "GuitarLa - Tiend sa",
         charset: "utf-8",
         description: "Ventas de guitarra y blog",
         viewport: "width=device-width, initial-scale=1",
      },
   ];
}

//funcion asincrona que hace una consulta a la api
export async function loader() {
   const guitar = await getGuitar();
   return guitar.data;
}

//Inicio del componente

const Store = () => {
   const guitar = useLoaderData();

   return (
      <main className="contenedor">
         <h2 className="heading">Nuestra coleccion</h2>

         {guitar.length && (
            <div className="guitarras-grid">
               {guitar.map((guitar) => (
                  <Guitars guitar={guitar.attributes} key={guitar.id} />
               ))}
            </div>
         )}
      </main>
   );
};

export default Store;
