import Jumbo from "../components/Jumbo";
import Carousel from "../components/Carousel";
import JumboImg from "../assets/img/jumbo.avif";
import Categories from "../components/Categories";
import Newsletter from "../components/Newsletter";

function Home() {
  const newReleases = [
    {
      nome: "Maglietta senza cuciture",
      tipo: "Maglietta",
      materiale: "Tessuto traspirante",
      colore: "Nero",
      taglia: "M",
      prezzo: 35.99,
      img: { JumboImg },
    },
    {
      nome: "Pantaloni da allenamento aderenti",
      tipo: "Pantaloni",
      materiale: "Leggero e flessibile",
      colore: "Grigio",
      taglia: "S",
      prezzo: 45.99,
      img: { JumboImg },
    },
    {
      nome: "Reggiseno sportivo ad alte prestazioni",
      tipo: "Reggiseno",
      materiale: "Compressione",
      colore: "Blu",
      taglia: "L",
      prezzo: 29.99,
      img: { JumboImg },
    },
    {
      nome: "Calze da corsa traspiranti",
      tipo: "Calze",
      materiale: "Tessuto tecnico",
      colore: "Bianco",
      taglia: "Unica",
      prezzo: 12.99,
      img: { JumboImg },
    },
    {
      nome: "Calze da corsa traspiranti",
      tipo: "Calze",
      materiale: "Tessuto tecnico",
      colore: "Bianco",
      taglia: "Unica",
      prezzo: 12.99,
      img: { JumboImg },
    },
    {
      nome: "Calze da corsa traspiranti",
      tipo: "Calze",
      materiale: "Tessuto tecnico",
      colore: "Bianco",
      taglia: "Unica",
      prezzo: 12.99,
      img: { JumboImg },
    },
  ];

  return (
    <main className="mt-36">
      <Jumbo />
      <Categories />
      <Carousel
        sectionId="new-releases"
        title="Nuove Uscite"
        description="Scopri di più"
        url="/search"
        array={newReleases}
        dark={true}
      />
      <Newsletter />
    </main>
  );
}

export default Home;
