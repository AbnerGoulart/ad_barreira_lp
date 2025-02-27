import { churchLocation } from "../utils/churchLocation";
import { FaMapMarkedAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export function ChurchLocation() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-8 md:py-12">
      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-2 text-neutral-900">
        LOCALIZAÇÃO
      </h2>
      <p className="text-center text-base sm:text-lg md:text-xl text-neutral-900 mb-6">
        Venha nos visitar e sinta-se em casa!
      </p>

      <div className="flex flex-col lg:flex-row gap-6 md:gap-8 items-center lg:items-start">
        {/* Dados da igreja */}
        <Card className="w-full lg:w-1/2 bg-white/70 backdrop-blur-lg shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg sm:text-xl font-semibold">
              <FaMapMarkedAlt className="text-neutral-900" /> {churchLocation.name}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm sm:text-base md:text-lg">
            <p className="text-gray-700">{churchLocation.address}</p>

            <Separator />

            <p className="flex items-center gap-2 text-gray-700">
              <FaPhoneAlt className="text-neutral-900" /> <strong>Telefone:</strong> {churchLocation.phone}
            </p>

            <p className="flex items-center gap-2 text-gray-700">
              <FaEnvelope className="text-neutral-900" /> <strong>Email:</strong> {churchLocation.email}
            </p>

            <Separator />

            <div>
              <h4 className="text-base sm:text-lg font-medium flex items-center gap-2">
                <FaClock className="text-neutral-900" /> Horários de Culto:
              </h4>
              <ul className="text-gray-700 space-y-1">
                <li><strong>Domingo:</strong> {churchLocation.serviceHours.sunday.join(" e ")}</li>
                <li><strong>Terça:</strong> {churchLocation.serviceHours.tuesday}</li>
                <li><strong>Quinta:</strong> {churchLocation.serviceHours.thursday}</li>
                <li><strong>3º Sábado:</strong> {churchLocation.serviceHours.thirdSaturday}</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button variant="default" asChild className="text-sm sm:text-base">
                <a href="https://www.google.com/maps/place/AD+Barreira/@-22.559162,-45.238871,6002m/data=!3m1!1e3!4m6!3m5!1s0x94cca3b4a01f2aad:0x9d8d3b20b6bde21b!8m2!3d-22.559162!4d-45.2388715!16s%2Fg%2F11v0d50why?hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDIyNC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
                  Ver no Google Maps
                </a>
              </Button>
              <Button variant="outline" asChild className="text-sm sm:text-base">
                <a href={`tel:${churchLocation.phone}`}>Ligar agora</a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Mapa animado */}
        <motion.div
          className="w-full lg:w-1/2 rounded-lg border border-gray-300 shadow-xl overflow-hidden"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13067.737470289196!2d-45.252127871074876!3d-22.568029001553956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cca3b4a01f2aad%3A0x9d8d3b20b6bde21b!2sAD%20Barreira!5e1!3m2!1spt-BR!2sbr!4v1740447026033!5m2!1spt-BR!2sbr"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
}

