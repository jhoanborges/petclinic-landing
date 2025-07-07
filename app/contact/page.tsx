import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  Users,
  Heart,
} from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <div className="min-h-[40vh] w-full flex items-center justify-center bg-accent/50 border-b border-accent">
        <div className="max-w-(--breakpoint-xl) w-full flex flex-col items-center text-center mx-auto px-6 py-12">
          <Badge className="rounded-full py-1 border-none mb-6">
            Contáctanos
          </Badge>
          <h1 className="text-4xl xs:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Estamos aquí para ayudarte
          </h1>
          <p className="text-lg xs:text-xl text-muted-foreground max-w-2xl">
            Tienes preguntas sobre {process.env.NEXT_PUBLIC_APP_NAME}? Nuestro equipo está listo para brindarte 
            el mejor soporte para tu clínica veterinaria.
          </p>
        </div>
      </div>

      {/* Contact Content */}
      <div className="max-w-(--breakpoint-xl) mx-auto py-12 xs:py-20 px-6">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border rounded-xl shadow-none">
              <CardHeader>
                <CardTitle className="text-2xl font-bold tracking-tight">
                  Envíanos un mensaje
                </CardTitle>
                <CardDescription className="text-base">
                  Completa el formulario y nos pondremos en contacto contigo lo antes posible.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="nombre">Nombre *</Label>
                    <Input 
                      id="nombre" 
                      placeholder="Tu nombre completo"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input 
                      id="email" 
                      type="email"
                      placeholder="tu@email.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="telefono">Teléfono</Label>
                    <Input 
                      id="telefono" 
                      type="tel"
                      placeholder="+52 123 456 7890"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="clinica">Nombre de la Clínica</Label>
                    <Input 
                      id="clinica" 
                      placeholder="Clínica Veterinaria ABC"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="asunto">Asunto *</Label>
                  <Input 
                    id="asunto" 
                    placeholder="En qué podemos ayudarte?"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mensaje">Mensaje *</Label>
                  <Textarea 
                    id="mensaje" 
                    placeholder="Contanos más detalles sobre tu consulta..."
                    className="min-h-[120px]"
                    required
                  />
                </div>

                <Button size="lg" className="w-full rounded-full">
                  <Send className="h-4 w-4 mr-2" />
                  Enviar Mensaje
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Methods */}
            <Card className="border rounded-xl shadow-none">
              <CardHeader>
                <CardTitle className="text-xl font-bold tracking-tight">
                  Información de Contacto
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 mt-1 text-primary" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">
                      contacto@petclinic.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 mt-1 text-primary" />
                  <div>
                    <p className="font-medium">Teléfono</p>
                    <p className="text-sm text-muted-foreground">
                      +52 (55) 1234-5678
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 mt-1 text-primary" />
                  <div>
                    <p className="font-medium">Oficina</p>
                    <p className="text-sm text-muted-foreground">
                      Ciudad de M�xico, M�xico
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 mt-1 text-primary" />
                  <div>
                    <p className="font-medium">Horario de Atención</p>
                    <p className="text-sm text-muted-foreground">
                      Lun - Vie: 9:00 AM - 6:00 PM<br />
                      Sáb: 9:00 AM - 2:00 PM
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Support Options */}
            <Card className="border rounded-xl shadow-none">
              <CardHeader>
                <CardTitle className="text-xl font-bold tracking-tight">
                  Opciones de Soporte
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <MessageCircle className="h-5 w-5 mt-1 text-primary" />
                  <div>
                    <p className="font-medium">Chat en Vivo</p>
                    <p className="text-sm text-muted-foreground">
                      Disponible para clientes Gold
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 mt-1 text-primary" />
                  <div>
                    <p className="font-medium">Capacitación</p>
                    <p className="text-sm text-muted-foreground">
                      Sesiones personalizadas
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Heart className="h-5 w-5 mt-1 text-primary" />
                  <div>
                    <p className="font-medium">Soporte Técnico</p>
                    <p className="text-sm text-muted-foreground">
                      Ayuda especializada 24/7
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Separator className="my-12" />

        {/* FAQ Section */}
        <div className="text-center">
          <h2 className="text-2xl xs:text-3xl font-bold tracking-tight mb-4">
            Preguntas Frecuentes?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Revisa nuestra sección de preguntas frecuentes para encontrar respuestas rápidas 
            a las consultas más comunes sobre {process.env.NEXT_PUBLIC_APP_NAME}.
          </p>
          <Button variant="outline" size="lg" className="rounded-full">
            Ver Preguntas Frecuentes
          </Button>
        </div>
      </div>

      <Footer />
    </>
  );
}