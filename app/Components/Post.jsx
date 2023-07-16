import { Link } from "@remix-run/react";
import { formatDate } from "~/Utils/helpers.js";

//"post" es un Props que viene desde blog.jsx trae una Objeto con los datos(blogs) desde la api
const Post = ({ post }) => {
   //destructuring del Objeto "post"
   const { contenido, titulo, imagen, url, createdAt } = post;
         
   return (
      <article className="post">
         <img className="imagen" src={imagen.data.attributes.formats.small.url} alt={titulo} />

         <div className="contenido">
            <h1 className="titulo">{titulo}</h1>
            <p className="date">{formatDate(createdAt)}</p>
            <div className="txt" id="txt"></div>
            <p className="resumen">{contenido}</p>
            <Link className="link" to={`/post/${url}`}>
               Leer entrada
            </Link>
         </div>
      </article>
   );
};

export default Post;
