import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { CircleCheck } from "lucide-react";

const plans = [
  {
    name: "FREE",
    price: 0,
    currency: "MXN",
    period: "por siempre",
    description:
      "Plan básico ideal para veterinarios independientes que están comenzando su práctica.",
    features: [
      "Hasta 50 clientes y mascotas",
      "Registro de citas básico",
      "Acceso limitado al POS",
      "Soporte por email básico",
      "Almacenamiento de 1GB",
    ],
    buttonText: "Comenzar Gratis",
  },
  {
    name: "STANDARD",
    price: 1499,
    currency: "MXN",
    period: "por mes",
    isRecommended: true,
    description:
      "Plan completo con todas las funciones principales para clínicas veterinarias medianas.",
    features: [
      "Clientes y mascotas ilimitados",
      "Sistema kanban completo para citas",
      "POS avanzado con inventario",
      "Gestión completa de inventario",
      "Reportes básicos",
      "Soporte por email prioritario",
      "Almacenamiento de 50GB",
    ],
    buttonText: "Elegir Standard",
    isPopular: true,
  },
  {
    name: "GOLD",
    price: 2500,
    currency: "MXN",
    period: "por mes",
    description:
      "Plan premium con funciones avanzadas y soporte prioritario para clínicas grandes.",
    features: [
      "Todo lo incluido en Standard",
      "Reportes avanzados y analytics",
      "Módulos de facturación automática",
      "Integración con sistemas externos",
      "API completa para desarrolladores",
      "Soporte telefónico prioritario",
      "Capacitación personalizada",
      "Almacenamiento ilimitado",
      "Respaldos automáticos diarios",
    ],
    buttonText: "Elegir Gold",
  },
];

const Pricing = () => {
  return (
    <div id="pricing" className="max-w-(--breakpoint-lg) mx-auto py-12 xs:py-20 px-6">
      <h1 className="text-4xl xs:text-5xl font-bold text-center tracking-tight">
        Planes y Precios
      </h1>
      <p className="mt-4 text-center text-lg text-muted-foreground max-w-2xl mx-auto">
        Elige el plan que mejor se adapte a las necesidades de tu clínica veterinaria
      </p>
      <div className="mt-8 xs:mt-14 grid grid-cols-1 lg:grid-cols-3 items-center gap-8 lg:gap-0">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={cn(
              "relative bg-accent/50 border p-7 rounded-xl lg:rounded-none lg:first:rounded-l-xl lg:last:rounded-r-xl",
              {
                "bg-background border-[2px] border-primary py-12 rounded-xl!":
                  plan.isPopular,
              }
            )}
          >
            {plan.isPopular && (
              <Badge className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2">
                Más Popular
              </Badge>
            )}
            <h3 className="text-lg font-medium">{plan.name}</h3>
            <div className="mt-2 flex items-baseline gap-1">
              <span className="text-4xl font-bold">
                ${plan.price.toLocaleString()}
              </span>
              <span className="text-lg text-muted-foreground">{plan.currency}</span>
            </div>
            <p className="text-sm text-muted-foreground">{plan.period}</p>
            <p className="mt-4 font-medium text-muted-foreground">
              {plan.description}
            </p>
            <Separator className="my-6" />
            <ul className="space-y-2">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <CircleCheck className="h-4 w-4 mt-1 text-green-600" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            <Button
              variant={plan.isPopular ? "default" : "outline"}
              size="lg"
              className="w-full mt-6 rounded-full"
            >
              {plan.buttonText}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;