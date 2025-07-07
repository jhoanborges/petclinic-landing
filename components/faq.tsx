import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { PlusIcon } from "lucide-react";

const faq = [
  {
    question: "¿Cuáles son los planes de precios disponibles?",
    answer:
      "Tenemos tres planes: FREE ($0 MXN) con funciones básicas, STANDARD ($1,499 MXN/mes) con todas las funciones principales, y GOLD ($2,500 MXN/mes) con funciones avanzadas y soporte premium para clínicas veterinarias grandes.",
  },
  {
    question: "¿Qué incluye el plan FREE?",
    answer:
      "El plan FREE incluye gestión básica de hasta 50 clientes y mascotas, registro de citas básico, y acceso limitado al sistema POS. Ideal para veterinarios independientes que están empezando.",
  },
  {
    question: "¿En qué se diferencia el plan STANDARD del FREE?",
    answer:
      "El plan STANDARD ($1,499 MXN/mes) incluye clientes ilimitados, sistema kanban completo para citas, POS avanzado, gestión completa de inventario, reportes básicos y soporte por email.",
  },
  {
    question: "¿Qué beneficios adicionales tiene el plan GOLD?",
    answer:
      "El plan GOLD ($2,500 MXN/mes) incluye todo lo del plan Standard más: reportes avanzados y analytics, módulos de facturación automática, integración con sistemas externos, soporte telefónico prioritario y capacitación personalizada.",
  },
  {
    question: "¿Puedo cambiar de plan en cualquier momento?",
    answer:
      "Sí, puedes actualizar o cambiar tu plan en cualquier momento desde tu panel de administración. Los cambios se aplicarán inmediatamente y se prorratearán en tu siguiente factura.",
  },
  {
    question: "¿Cómo funciona el sistema de inventario?",
    answer:
      "El sistema de inventario permite registrar entradas y salidas de productos, controlar stock en tiempo real, generar alertas de productos bajos, y gestionar proveedores. Está integrado con el POS para actualizaciones automáticas.",
  },
  {
    question: "¿El sistema incluye soporte técnico?",
    answer:
      "Sí, todos los planes incluyen soporte técnico. El plan FREE tiene soporte por email básico, STANDARD incluye soporte por email prioritario, y GOLD incluye soporte telefónico y chat en vivo.",
  },
  {
    question: "¿Mis datos están seguros en la plataforma?",
    answer:
      "Absolutamente. Utilizamos encriptación de datos, respaldos automáticos diarios, y cumplimos con las normas de protección de datos. Tu información de clientes y mascotas está completamente protegida.",
  },
];

const FAQ = () => {
  return (
    <div
      id="faq"
      className="w-full max-w-(--breakpoint-xl) mx-auto py-8 xs:py-16 px-6"
    >
      <h2 className="md:text-center text-3xl xs:text-4xl md:text-5xl leading-[1.15]! font-bold tracking-tighter">
        Preguntas Frecuentes
      </h2>
      <p className="mt-1.5 md:text-center xs:text-lg text-muted-foreground">
        Respuestas rápidas a preguntas comunes sobre nuestro sistema de gestión veterinaria.
      </p>

      <div className="min-h-[550px] md:min-h-[320px] xl:min-h-[300px]">
        <Accordion
          type="single"
          collapsible
          className="mt-8 space-y-4 md:columns-2 gap-4"
        >
          {faq.map(({ question, answer }, index) => (
            <AccordionItem
              key={question}
              value={`question-${index}`}
              className="bg-accent py-1 px-4 rounded-xl border-none mt-0! mb-4! break-inside-avoid"
            >
              <AccordionPrimitive.Header className="flex">
                <AccordionPrimitive.Trigger
                  className={cn(
                    "flex flex-1 items-center justify-between py-4 font-semibold tracking-tight transition-all hover:underline [&[data-state=open]>svg]:rotate-45",
                    "text-start text-lg"
                  )}
                >
                  {question}
                  <PlusIcon className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200" />
                </AccordionPrimitive.Trigger>
              </AccordionPrimitive.Header>
              <AccordionContent className="text-[15px]">
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;