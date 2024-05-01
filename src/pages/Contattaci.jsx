import { FaDiscord, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

function Contattaci() {
  return (
    <main className="mt-36">
      <section id="contattaci" className=" bg-green-600 text-neutral-100">
        <div className="container mx-auto px-5 py-28 flex flex-col md:flex-row gap-10 justify-between items-center">
          {/* Form */}
          <div className="w-full text-center md:text-start md:w-1/2">
            <h3 className="text-3xl font-bold mb-5">
              Hai Bisogno di Aiuto? Contattaci!
            </h3>
            <p className="mt-4 text-lg mb-5">
              Se incontri problemi tecnici sul nostro sito, desideri assistenza
              con un ordine o hai semplicemente domande su Gymwear Performance,
              siamo qui per aiutarti! Il nostro team di supporto clienti è
              pronto ad assisterti con cortesia e competenza. Non esitare a
              contattarci utilizzando il modulo sottostante o tramite i nostri
              canali social media. Saremo lieti di risolvere qualsiasi problema
              tu possa avere e assicurarti un'esperienza positiva con i nostri
              prodotti e servizi.
            </p>

            {/* Invio mail */}
            <form action="#" method="post" className={`flex flex-col gap-5 `}>
              {/* Email */}

              <label htmlFor="contact-email">Inserisci Email</label>
              <input
                type="text"
                name="email"
                id="contact-email"
                className="p-1 border bg-neutral-50 text-center  hover:border-emerald-600 rounded-md cursor-pointer outline-none group-hover:bg-neutral-100 transition"
              />

              {/* testo */}
              <label htmlFor="contatc-text">Inserisci testo</label>
              <textarea
                name="text"
                id="contact-text"
                cols="30"
                rows="10"
                className="p-1 border bg-neutral-50 text-center  hover:border-emerald-600 rounded-md cursor-pointer outline-none group-hover:bg-neutral-100 transition"
              ></textarea>

              <div>
                {" "}
                <button className="bg-neutral-800 rounded-3xl text-neutral-100 py-2 px-5 ">
                  Invia
                </button>
              </div>
            </form>
          </div>

          {/* socials */}
          <div className="w-full  md:w-1/2 flex justify-center items-center">
            <ul className="flex flex-col gap-10 text-4xl font-bold">
              <li className="flex gap-5 items-center">
                <FaDiscord className="cursor-pointer" />
                <div>Discord</div>
              </li>
              <li className="flex gap-5 items-center">
                <FaFacebook className="cursor-pointer" />
                <div>Facebook</div>
              </li>
              <li className="flex gap-5 items-center">
                <FaInstagram className="cursor-pointer" />
                <div>Instagram</div>
              </li>
              <li className="flex gap-5 items-center">
                <FaX className="cursor-pointer" />
                <div>Twitter</div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contattaci;
