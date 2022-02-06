import {
  SupplementIcon,
  FireIcon,
  SportIcon,
  HealthIcon,
  BlogIcon,
  CosmeticIcon,
} from "images";

export const navRoutes = [
  {
    title: "Tienda",
    path: "/store",
  },
  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "Contacto",
    path: "/contact",
  },
  {
    title: "Nosotros",
    path: "/about",
  },
];

export const sidebarRoutes = [
  {
    path: "/toys",
    name: "Jugueteria",
    icon: <FireIcon className="h-6 w-6" />,
  },
  {
    path: "/cosmetics",
    name: "Cosmetica",
    icon: <CosmeticIcon className="h-6 w-6" />,
  },
  {
    path: "/health",
    name: "Salud",
    icon: <HealthIcon className="h-6 w-6" />,
  },

  {
    path: "/supplements",
    name: "Suplementos",
    icon: <SupplementIcon className="h-8 w-8" />,
  },
  {
    path: "/sports",
    name: "Deporte",
    icon: <SportIcon className="h-8 w-8" />,
  },
  {
    path: "/blog",
    name: "Blog",
    icon: <BlogIcon className="h-6 w-6" />,
  },
];