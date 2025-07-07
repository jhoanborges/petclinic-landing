import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Calendar,
  Users,
  ShoppingCart,
  Package,
  Heart,
  BarChart3,
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Gestión de Clientes y Mascotas",
    description:
      "Administra fácilmente la información de clientes y sus mascotas, incluyendo historiales médicos completos y datos de contacto.",
  },
  {
    icon: Calendar,
    title: "Citas con Kanban",
    description:
      "Organiza y gestiona citas veterinarias con un sistema kanban visual intuitivo, optimizando el flujo de trabajo diario.",
  },
  {
    icon: ShoppingCart,
    title: "Punto de Venta (POS)",
    description:
      "Sistema POS integrado para procesar ventas de medicamentos, alimentos y productos veterinarios de manera eficiente.",
  },
  {
    icon: Package,
    title: "Gestión de Inventario",
    description:
      "Control completo del inventario con seguimiento de entradas y salidas de mercancía, niveles de stock y alertas automáticas.",
  },
  {
    icon: Heart,
    title: "Atención Veterinaria Integral",
    description:
      "Herramientas especializadas para el cuidado de mascotas, incluyendo registro de tratamientos y seguimiento médico.",
  },
  {
    icon: BarChart3,
    title: "Reportes y Análisis",
    description:
      "Genera reportes detallados sobre ventas, inventario, citas y rendimiento de la clínica para tomar decisiones informadas.",
  },
];

const Features = () => {
  return (
    <div
      id="features"
      className="max-w-(--breakpoint-xl) mx-auto w-full py-12 xs:py-20 px-6"
    >
      <h2 className="text-3xl xs:text-4xl md:text-5xl md:leading-[3.5rem] font-bold tracking-tight sm:max-w-xl sm:text-center sm:mx-auto">
        Potencia tu Clínica Veterinaria con Funciones Inteligentes
      </h2>
      <div className="mt-8 xs:mt-14 w-full mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
        {features.map((feature) => (
          <Card
            key={feature.title}
            className="flex flex-col border rounded-xl overflow-hidden shadow-none"
          >
            <CardHeader>
              <feature.icon />
              <h4 className="mt-3! text-xl font-bold tracking-tight">
                {feature.title}
              </h4>
              <p className="mt-1 text-muted-foreground text-sm xs:text-[17px]">
                {feature.description}
              </p>
            </CardHeader>
            <CardContent className="mt-auto px-0 pb-0">
              <div className="bg-muted h-52 ml-6 rounded-tl-xl" />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Features;
