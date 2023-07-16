//"course" es un Props que viene desde _index.jsx trae una Objeto con los datos(curso) desde la api
export default function Course({ course }) {
    
   //destructuring del Objeto "courser"
   const { titulo, contenido, imagen } = course;

   return (
      <section className="course">
         <style jsx="true">
            {`
               .course {
                  background-image: linear-gradient(to right, rgb(0 0 0 / 0.65), rgb(0 0 0 /0.7)),
                     url(${imagen.data.attributes.url});
               }
            `}
         </style>

         <div className="container curso-grid">
            <div className="contenido">
               <h2 className="heading">{titulo}</h2>
               <p className="text">{contenido}</p>
            </div>
         </div>
      </section>
   );
}
