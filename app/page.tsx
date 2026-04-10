import Hero from "@/components/hero";
import Recomendacion from "@/components/recomendacion";
import Distribucion from "@/components/Distribucion";
import ContactosSection from "@/components/contactos/ContactosSection";
import Seleccion from "@/components/Seleccion";
import Footer from "@/components/footer";
import MenuRenfert from "./Navdar";

export default function Home() {
  return (
    <main>
      {/*menu */}
         <MenuRenfert/>
      {/*Incio de la seccion*/}
              <Hero />
         {/*Seccion Recomendacion*/}
                <Recomendacion/>
                {/*Seccion seleccion*/}
                       <Seleccion/>
                  {/*Seccion Recomendacion*/}
                          <Distribucion/>
                        {/*Seccion Contactos*/}
                              <ContactosSection/>
                              {/*Footer Redes */}
                                    <Footer/>
                              

    </main>
  );
}
