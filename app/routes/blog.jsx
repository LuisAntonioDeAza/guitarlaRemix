import { useLoaderData } from "@remix-run/react";
import { getPost } from "~/Models/guitarras.server.js"; // hace un consulta a la API y retorna los datos(blogs-post)
import Post from "~/Components/Post";
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
//cargador que espera la respuesta de la api
export async function loader() {
   const reponse = await getPost();
   return reponse.data;
}

const Blog = () => {
   const blogs = useLoaderData(); //asigna los datos obtenidos por la api

   console.log("Segun yo se envio");

   return (
      <main className="container blog-grid">
         <h1 className="headig">Blog</h1>

         <div className="blog">
            {blogs.map((post) => (
               <Post post={post.attributes} key={post.id} />
            ))}
         </div>
      </main>
   );
};

export default Blog;
