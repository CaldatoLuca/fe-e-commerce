import manImg from "../assets/img/man.avif";
import womanImg from "../assets/img/woman.avif";
import accessories from "../assets/img/accessories.webp";

function Categories() {
  return (
    <section id="categories" className="py-10 text-neutral-700 bg-neutral-100">
      <div className="container mx-auto">
        <div className="flex gap-5">
          {/* Uomo */}
          <div className="flex-1 border w-1/3 relative">
            <img src={manImg} alt="man" className=" img-fluid w-full h-full" />
            <button className="absolute font-medium bottom-5 left-5 bg-neutral-100 hover:bg-neutral-200 transition text-neutral-800 rounded-3xl px-4 py-2">
              Compra Uomo
            </button>
          </div>

          {/* Donna */}
          <div className="flex-1 border w-1/3 relative">
            <img
              src={womanImg}
              alt="woman"
              className=" img-fluid w-full h-full"
            />

            <button className="absolute font-medium bottom-5 left-5 bg-neutral-100 hover:bg-neutral-200 transition text-neutral-800 rounded-3xl px-4 py-2">
              Compra Donna
            </button>
          </div>

          {/* Accessori */}
          <div className="flex-1 border w-1/3 relative">
            <img
              src={accessories}
              alt="accessories"
              className=" img-fluid w-full h-full"
            />

            <button className="absolute font-medium bottom-5 left-5 bg-neutral-100 hover:bg-neutral-200 transition text-neutral-800 rounded-3xl px-4 py-2">
              Compra Accessori
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Categories;
