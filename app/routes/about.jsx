import imagen from "../../public/img/nosotros.jpg";
import styles from "~/styles/about.css";

//Carga la hoja de estilos
export function links() {
   return [
      {
         rel: "styleSheet",
         href: styles,
      },
      {
         rel: "preload",
         href: imagen,
         as: "image",
      },
   ];
}

const about = () => {
   return (
      <main className="container about">
         <h2 className="heading">Nostros</h2>
         <div className="contenido">
            <img src={imagen} alt="img about"></img>

            <div>
               <p>
                  Nulla sit amet lobortis justo. Suspendisse eu velit eget mi pulvinar interdum.
                  Aenean sodales risus eu interdum porta. Quisque lorem velit, condimentum quis
                  imperdiet id, finibus vitae felis. Morbi nec nisi ac enim elementum convallis.
                  Curabitur odio dolor, hendrerit sed vestibulum in, rutrum eu erat. Fusce lobortis,
                  erat et ullamcorper tincidunt, dolor neque tincidunt felis, vel vulputate purus
                  nunc semper tortor. Nulla convallis est faucibus, suscipit nibh in, fringilla
                  diam. Nulla sed odio sit amet dui tincidunt condimentum eget sit amet ante.
                  Quisque accumsan nibh ac orci tincidunt, ut placerat lacus tristique. Phasellus
                  ante mauris, porta non viverra non, auctor ut purus.
               </p>
               <p>
                  Nulla sit amet lobortis justo. Suspendisse eu velit eget mi pulvinar interdum.
                  Aenean sodales risus eu interdum porta. Quisque lorem velit, condimentum quis
                  imperdiet id, finibus vitae felis. Morbi nec nisi ac enim elementum convallis.
                  Curabitur odio dolor, hendrerit sed vestibulum in, rutrum eu erat. Fusce lobortis,
                  erat et ullamcorper tincidunt, dolor neque tincidunt felis, vel vulputate purus
                  nunc semper tortor. Nulla convallis est faucibus, suscipit nibh in, fringilla
                  diam. Nulla sed odio sit amet dui tincidunt condimentum eget sit amet ante.
                  Quisque accumsan nibh ac orci tincidunt, ut placerat lacus tristique. Phasellus
                  ante mauris, porta non viverra non, auctor ut purus.
               </p>
            </div>
         </div>
      </main>
   );
};

export default about;
