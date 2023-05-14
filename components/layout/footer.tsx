import { Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="p-10 footer footer-center bg-primary text-primary-content">
      <div>
        <Image
          src="/assets/images/logo-arqustik-300x206.png"
          width={150}
          height={103}
          alt="Arqustik Logo"
        />
        <p className="max-w-xs font-bold">
          Arqustik Vitruvio SAS.<br />
          Brindamos soluciones innovadoras para mejorar la vida de nuestros
          clientes.
        </p>
        <p>Copyright © 2023 - Todos los derechos reservados</p>
      </div>
      <div>
        <ul className="grid max-w-xs grid-flow-col gap-4">
          <li>
            <a>
              <Twitter size={30} />
            </a>
          </li>
          <li>
            <a>
              <Linkedin size={30} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
