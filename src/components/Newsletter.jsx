function Newsletter() {
  return (
    <section id="newsletter" className="bg-neutral-100 text-neutral-800 py-20">
      <div className="container mx-auto px-5 flex justify-center items-center text-center">
        <div className="w-1/2">
          <h3 className="text-3xl font-bold mb-5">
            Entra nella nostra Newsletter
          </h3>
          <p className="mt-4 text-lg mb-5">
            Non perderti le ultime novità, offerte esclusive e aggiornamenti
            speciali! Iscriviti alla nostra newsletter per ricevere direttamente
            nella tua casella di posta elettronica tutte le informazioni di cui
            hai bisogno.
          </p>

          {/* Invio mail */}
          <form action="#" method="post" className={`flex flex-col gap-5 `}>
            {/* Email */}
            <div className="flex-col flex">
              <label htmlFor="newsletter-email">Inserisci Email</label>
              <input
                type="text"
                name="email"
                id="newsletter-email"
                className="p-1 border bg-neutral-50 text-center  hover:border-emerald-600 rounded-md cursor-pointer outline-none group-hover:bg-neutral-100 transition"
              />
            </div>

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
  );
}

export default Newsletter;
