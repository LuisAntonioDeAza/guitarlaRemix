import { useLoaderData } from "@remix-run/react";
import { getposts } from "~/Models/guitarras.server"; //hace una peticion a la api que retorna una lista de post en formato JSON
import styles from "~/styles/post.css";

//carga la hoja de estilos
export function links() {
   return [
      {
         rel: "styleSheet",
         href: styles,
      },
   ];
}

//metaData
export function meta({ data }) {
   //retorno si no encuentra ninguna guitarra
   if (!data) {
      return [
         {
            title: `guitarLa - ningun post encontrado`,
            descripcion: `Guitarras, venta de guitarras - post no encontrado`,
         },
      ];
   }

   return [
      {
         title: `guitarLa - ${data.post.data[0].attributes.titulo}`,
         descripcion: `Guitarras, venta de guitarras guitarra ${data.post.data[0].attributes.titulo}`,
      },
   ];
}

//Loader - cargador que espera la respuesta de la api
export async function loader({ params }) {
   const { postUrl } = params;
   const post = await getposts(postUrl);

   if (post.data.length === 0) {
      throw new Response("", {
         status: 404,
         statusText: "Guitarra No encontrada",
      });
   }

   return { post };
}

export default function Post() {
   const post = useLoaderData(); //Obtiene los datos optenidos por la API(titulo del post espesifico)

   //destructuring de los datos devuelto por la API
   const { contenido, titulo, imagen } = post.post.data[0].attributes;

   return (
      //contendor
      <div className="container imgs">
         <h1 className="heading">{titulo}</h1>
         <img src={`${imagen.data.attributes.formats.medium.url}`} alt="imagen post" />
         <p className="contenido">{contenido}</p>
      </div>
   );
};


