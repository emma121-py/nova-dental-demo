import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Treatments from "@/components/treatments";
import WhyUs from "@/components/why-us";
import Specialists from "@/components/specialists";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <Navbar />
      <main id="contenido">
        <div id="inicio"><Hero /></div>
        <Treatments />
        <WhyUs />
        <Specialists />
      </main>
    </>
  );
}
