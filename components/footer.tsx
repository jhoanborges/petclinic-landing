import { Separator } from "@/components/ui/separator";
import {
  DribbbleIcon,
  GithubIcon,
  TwitchIcon,
  TwitterIcon,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const footerSections = [
  {
    title: "Producto",
    links: [
      {
        title: "Funciones",
        href: "/features",
      },
      {
        title: "Soluciones",
        href: "/features",
      },
      {
        title: "Tutoriales",
        href: "/features",
      },
      {
        title: "Precios",
        href: "/pricing",
      },
      {
        title: "Actualizaciones",
        href: "/pricing",
      },
    ],
  },
  {
    title: "Empresa",
    links: [
      {
        title: "Acerca de nosotros",
        href: "/about",
      },
      {
        title: "Carreras",
        href: "/about",
      },
      {
        title: "Noticias",
        href: "/about",
      },
      {
        title: "Contacto",
        href: "/contact",
      },
    ],
  },
  {
    title: "Recursos",
    links: [
      {
        title: "Blog",
        href: "#",
      },
      {
        title: "Boletín",
        href: "#",
      },
      {
        title: "Eventos",
        href: "#",
      },
      {
        title: "Centro de ayuda",
        href: "#",
      },
      {
        title: "Tutoriales",
        href: "#",
      },
      {
        title: "Soporte",
        href: "#",
      },
    ],
  },
  {
    title: "Social",
    links: [
      {
        title: "Twitter",
        href: "#",
      },
      {
        title: "LinkedIn",
        href: "#",
      },
      {
        title: "Facebook",
        href: "#",
      },
      {
        title: "GitHub",
        href: "#",
      },
      {
        title: "Instagram",
        href: "#",
      },
      {
        title: "YouTube",
        href: "#",
      },
    ],
  },
  {
    title: "Legal",
    links: [
      {
        title: "Términos",
        href: "#",
      },
      {
        title: "Privacidad",
        href: "#",
      },
      {
        title: "Cookies",
        href: "#",
      },
      {
        title: "Licencias",
        href: "#",
      },
      {
        title: "Configuración",
        href: "#",
      },
      {
        title: "Contacto",
        href: "#",
      },
    ],
  },
];

const FooterLogo = () => {
  return (
    <Image 
      src="/loho-horizontal-white.svg" 
      alt="petClinic Logo"
      width="124"
      height="32"
    />
  );
};

const Footer = () => {
  return (
    <footer className="mt-12 xs:mt-20 dark bg-background border-t">
      <div className="max-w-(--breakpoint-xl) mx-auto py-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-x-8 gap-y-10 px-6">
        <div className="col-span-full xl:col-span-2">
          {/* Logo */}
          <FooterLogo />

          <p className="mt-4 text-muted-foreground">
            Sistema integral de administración veterinaria que crea experiencias digitales increíbles para el cuidado de mascotas.
          </p>
        </div>

        {footerSections.map(({ title, links }) => (
          <div key={title} className="xl:justify-self-end">
            <h6 className="font-semibold text-foreground">{title}</h6>
            <ul className="mt-6 space-y-4">
              {links.map(({ title, href }) => (
                <li key={title}>
                  <Link
                    href={href}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Separator />
      <div className="max-w-(--breakpoint-xl) mx-auto py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6">
        {/* Copyright */}
        <span className="text-muted-foreground text-center xs:text-start">
          &copy; {new Date().getFullYear()}{" "}
          <Link href={process.env.NEXT_PUBLIC_BASE_URL || "#"} target="_blank">
            {process.env.NEXT_PUBLIC_APP_NAME}
          </Link>
          . Todos los derechos reservados.
        </span>

        <div className="flex items-center gap-5 text-muted-foreground">
          <Link href="#" target="_blank">
            <TwitterIcon className="h-5 w-5" />
          </Link>
          <Link href="#" target="_blank">
            <DribbbleIcon className="h-5 w-5" />
          </Link>
          <Link href="#" target="_blank">
            <TwitchIcon className="h-5 w-5" />
          </Link>
          <Link href="#" target="_blank">
            <GithubIcon className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;