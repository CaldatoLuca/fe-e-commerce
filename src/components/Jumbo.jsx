import jumboImg from "../assets/img/jumbo.avif";
import Button from "./Button";

function Jumbo() {
  return (
    <section id="home-jumbo" className="py-10 bg-neutral-700 text-neutral-100">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* img */}
        <div className="hidden md:w-1/2 md:flex justify-center items-center">
          <img
            src={jumboImg}
            alt="jumboImg"
            className=" img-fluid  object-contain"
          />
        </div>

        {/* text */}
        <div className="text-center w-3/5 md:text-start md:w-1/2 flex lg:px-5 xl:px-0 justify-center items-center">
          <div className="md:ml-4 md:w-full xl:ml-0 xl:w-3/5">
            <h1 className="text-emerald-600 font-bold text-4xl mb-5">
              Scopri la nostra collezione sportiva
            </h1>
            <p className="mb-5">
              Esplora la nostra vasta gamma di abbigliamento sportivo progettato
              per massimizzare le tue prestazioni e il tuo comfort. Dai
              un'occhiata alle ultime tendenze e agli stili innovativi che ti
              accompagneranno in ogni tuo allenamento e competizione.
            </p>
            <div className="flex gap-4 justify-center md:justify-start mb-2">
              {" "}
              <Button
                content="Esplora la collezione"
                type="emerald"
                href="/search"
              />
              <Button content="Diventa Partner" type="neutral-white" href="/" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Jumbo;
