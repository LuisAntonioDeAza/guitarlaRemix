import { useLoaderData } from "@remix-run/react";
import { getGuita } from "~/Models/guitarras.server";

export async function loader({ params }) {
   const { guitarUrl } = params;

   const guitar = await getGuita(guitarUrl);
   return { guitar };
}

const Guitarras = () => {
  
   const guitar = useLoaderData();
   console.log(guitar);

   return (
      <div>
         <div>si</div>
      </div>
   );
};

export default Guitarras;
