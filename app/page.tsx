import Navbar from "@/components/navbar";
import Hero from "@/components/hero";

export default function Home() {
  return <><a className="skip-link" href="#contenido">Saltar al contenido</a><Navbar /><main id="contenido"><div id="inicio"><Hero /></div></main></>;
}
