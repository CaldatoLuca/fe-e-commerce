import {
  FaDiscord,
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-neutral-800 text-neutral-100 py-10">
      <div className="container pb-5 mx-auto px-5 flex justify-between border-b">
        {/* Links */}
        <div className="flex gap-28 ">
          {/* Account */}
          <ul>
            <li className="text-xl font-bold mb-5 uppercase">Account</li>
            <li className="mb-1 hover:text-neutral-200 transition">
              <Link to="/login">Accedi</Link>
            </li>
            <li className="hover:text-neutral-200 transition">
              <Link to="/login">Registrati</Link>
            </li>
          </ul>

          {/* Help */}
          <ul>
            <li className="text-xl font-bold mb-5 uppercase">Help</li>
            <li className="mb-1 hover:text-neutral-200 transition">
              <Link to="/help">FAQ</Link>
            </li>
            <li className="hover:text-neutral-200 transition">
              <Link to="/login">Contattaci</Link>
            </li>
          </ul>
        </div>

        <div className="flex items-end gap-3">
          <FaDiscord className="cursor-pointer" />
          <FaFacebook className="cursor-pointer" />
          <FaPinterest className="cursor-pointer" />
          <FaYoutube className="cursor-pointer" />
          <FaInstagram className="cursor-pointer" />
          <FaX className="cursor-pointer" />
          <FaTiktok className="cursor-pointer" />
        </div>
      </div>

      <div className="text-center pt-5 text-sm">
        © {new Date().getFullYear()} | GymWear Performance | Tutti i diritti
        riservati. | United We Sweat
        <br />
        Progettato da{" "}
        <Link
          to="https://nextjs-portfolio-luca-caldatos-projects.vercel.app/"
          target="_blank"
          className=" underline"
        >
          Luca Caldato
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
