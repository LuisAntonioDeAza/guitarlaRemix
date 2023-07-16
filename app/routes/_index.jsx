import { getGuitar, getPost, getCourse } from "~/Models/guitarras.server.js";
import { useLoaderData } from "@remix-run/react";
import Guitars from "~/Components/Guitars";
import Course from "~/Components/Course";
import styles from "~/styles/guitar.css";
import Post from "~/Components/Post";
import style from "~/styles/post.css";

//carga las hojas de estilos
export function links() {
   return [
      {
         rel: "styleSheet",
         href: styles,
      },
      {
         rel: "styleSheet",
         href: style,
      },
   ];
}

//cargador que espera la respuesta de la API
export async function loader() {
   //Hacer varias consulta a la API y trae los datos
   const [guitars, posts, course] = await Promise.all([getGuitar(), getPost(), getCourse()]);

   return { guitars, posts, course };
}

export default function Index() {
   //Almacena los datos obtenidos por la API
   const { guitars, posts, course } = useLoaderData();

   return (
      //Lllama al componente de guitarras
      <>
         <section className="container">
            <h2 className="heading">Nuestra coleccion</h2>
            <div className="guitarras-grid">
               {guitars.data.map((guitar) => (
                  <Guitars guitar={guitar.attributes} key={guitar.id} />
               ))}
            </div>
         </section>

         {/*.... */}
         <Course course={course.data.attributes} />

         {/*Inyecta los post */}
         <section className="container blog-grid">
            <h2 className="heading">Blog</h2>

            <div className="blog">
               {posts.data.map((post) => (
                  <Post post={post.attributes} key={post.id} />
               ))}
            </div>
         </section>
      </>
   );
}
