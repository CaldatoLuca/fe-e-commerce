function Partner() {
  return (
    <main className="mt-36">
      <section id="partner" className=" bg-green-600 text-neutral-100">
        <div className="container text-center md:text-start mx-auto px-5 py-28 flex flex-col md:flex-row gap-10 justify-between items-center">
          <div className="w-full  md:w-1/2">
            <h3 className="text-3xl font-bold mb-5">
              Diventa Partner GymWear Performance
            </h3>
            <p className="mt-4 text-lg mb-5">
              Se sei appassionato di fitness e moda, diventare partner con
              Gymwear Performance potrebbe essere l'opportunità perfetta per te!
              Collaboriamo con individui e aziende che condividono la nostra
              passione per lo stile e le prestazioni nel mondo del fitness.
            </p>
            <p className="mb-5">
              Come partner, avrai accesso a una vasta gamma di vantaggi, tra
              cui:
            </p>

            {/* Vantaggi */}
            <div className="mb-4">
              <h4 className="text-2xl font-bold text-neutral-800">
                Prodotti di Alta Qualità
              </h4>
              <p>
                {" "}
                I nostri capi sono progettati con materiali premium per
                garantire comfort e prestazioni ottimali durante l'allenamento.
              </p>
            </div>

            <div className="mb-4">
              <h4 className="text-2xl font-bold text-neutral-800">
                Esclusivi Sconti e Offerte
              </h4>
              <p>
                {" "}
                Ricevi sconti speciali e offerte esclusive sui nostri prodotti
                per te e i tuoi follower.
              </p>
            </div>

            <div className="mb-4">
              <h4 className="text-2xl font-bold text-neutral-800">
                Collaborazioni Promozionali
              </h4>
              <p>
                {" "}
                Opportunità per collaborazioni promozionali attraverso i tuoi
                canali online e social media.
              </p>
            </div>

            <div className="mb-4">
              <h4 className="text-2xl font-bold text-neutral-800">
                Supporto Personalizzato
              </h4>
              <p>
                {" "}
                Il nostro team dedicato sarà disponibile per supportarti e
                fornirti assistenza personalizzata.
              </p>
            </div>

            <div className="mb-4">
              <h4 className="text-2xl font-bold text-neutral-800">
                Opportunità di Crescita
              </h4>
              <p>
                {" "}
                Partecipa a eventi esclusivi e accedi a nuove opportunità di
                crescita professionale nel settore del fitness e della moda.
              </p>
            </div>

            <p className="font-bold">
              Unisciti a noi nel promuovere uno stile di vita attivo e alla moda
              con Gymwear Performance!
            </p>
          </div>

          {/* Form */}
          <div className="w-full md:w-1/3 ">
            <p className="mb-10 text-center font-medium">
              Per diventare partner con Gymwear Performance, inviaci una email
              compilando il modulo sottostante. Saremo lieti di valutare la tua
              richiesta e discutere delle possibilità di collaborazione.
            </p>

            {/* Invio mail */}
            <form
              action="/partner"
              method="post"
              className={`flex flex-col gap-5 `}
            >
              {/* Email */}
              <label htmlFor="partner-email">Inserisci Email</label>
              <input
                type="text"
                name="email"
                id="partner-email"
                className="p-1 border bg-neutral-50 text-center  hover:border-emerald-600 rounded-md cursor-pointer outline-none group-hover:bg-neutral-100 transition"
              />

              {/* testo */}
              <label htmlFor="text">Inserisci testo</label>
              <textarea
                name="text"
                id="partner-text"
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
        </div>
      </section>
    </main>
  );
}

export default Partner;
