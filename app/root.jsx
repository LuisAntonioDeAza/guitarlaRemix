import { Meta, Links, Outlet, Scripts, LiveReload } from "@remix-run/react";

import styles from "./styles/index.css";
import Header from "~/Components/Header";
import Footer from "./Components/Footer";

//MetaData
export function meta() {
   return [
      {
         title: "GuitarLa - Remix",
         charset: "utf-8",
         viewport: "width=device-width, initial-scale=1",
      },
   ];
}

export function links() {
   return [
      {
         rel: "styleSheet",
         href: "https://necolas.github.io/normalize.css/8.0.1/normalize.css",
      },
      {
         rel: "preconnect",
         href: "https://fonts.googleapis.com",
      },
      {
         rel: "preconnect",
         href: "https://fonts.gstatic.com",
         crosorgin: "true",
      },
      {
         rel: "stylesheet",
         href: "https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap",
      },
      {
         rel: "StyleSheet",
         href: styles,
      },
   ];
}

//initial APP
export default function App() {
   return (
      <Document>
         <Outlet />
      </Document>
   );
}

function Document({ children }) {
   return (
      <html lang="es">
         <head>
            <Meta />
            <Links />
         </head>
         <body>
            <Header />
            {children}
            <Footer />

            <Scripts />
            <LiveReload />
         </body>
      </html>
   );
}
