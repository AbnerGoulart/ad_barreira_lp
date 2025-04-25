"use client"

import { churchLocation } from "../utils/churchLocation"
import { FaMapMarkedAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa"
import { motion } from "framer-motion"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"

export function ChurchLocation() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-16 bg-neutral-100 font-geist">
      <div className="max-w-6xl mx-auto">
        {/* Cabeçalho no mesmo estilo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-neutral-900">
            NOSSA LOCALIZAÇÃO
          </h2>
          <div className="mt-4 h-1 w-20 bg-neutral-900 mx-auto rounded-full"></div>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-neutral-600">
            Venha nos visitar e sinta-se em casa!
          </p>
        </motion.div>

        {/* Container principal */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-neutral-50 rounded-xl overflow-hidden shadow-lg border border-neutral-200"
        >
          <div className="flex flex-col md:flex-row">
            {/* Mapa - com animação sutil */}
            <motion.div
              className="w-full md:w-1/2 h-64 md:h-auto"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13067.737470289196!2d-45.252127871074876!3d-22.568029001553956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cca3b4a01f2aad%3A0x9d8d3b20b6bde21b!2sAD%20Barreira!5e1!3m2!1spt-BR!2sbr!4v1740447026033!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                className="border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>

            {/* Informações - com animação sutil */}
            <motion.div
              className="w-full md:w-1/2 p-6 md:p-8 space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3">
                <FaMapMarkedAlt className="text-xl text-neutral-900" />
                <h3 className="text-xl md:text-2xl font-bold text-neutral-900">
                  {churchLocation.name}
                </h3>
              </div>

              <div className="space-y-4 text-sm sm:text-base">
                <div>
                  <p className="text-neutral-700">
                    <strong className="text-neutral-900">Endereço: </strong>
                    {churchLocation.address}
                  </p>
                </div>

                <Separator className="bg-neutral-200" />

                <h4 className="text-lg font-semibold text-neutral-900">
                  Contato
                </h4>

                <div className="space-y-3">
                  <p className="flex items-center gap-3 text-neutral-700">
                    <FaPhoneAlt className="text-neutral-900" />
                    <span>
                      <strong className="text-neutral-900">Telefone: </strong>
                      {churchLocation.phone}
                    </span>
                  </p>

                  <p className="flex items-center gap-3 text-neutral-700">
                    <FaEnvelope className="text-neutral-900" />
                    <span>
                      <strong className="text-neutral-900">Email: </strong>
                      {churchLocation.email}
                    </span>
                  </p>
                </div>

                <Separator className="bg-neutral-200" />

                <div>
                  <h4 className="text-lg font-semibold flex items-center gap-3 text-neutral-900">
                    <FaClock />
                    Horários de Culto
                  </h4>
                  <ul className="mt-2 space-y-2 text-neutral-700">
                    <li className="flex justify-between">
                      <strong>Domingo:</strong>
                      <span>{churchLocation.serviceHours.sunday.join(" e ")}</span>
                    </li>
                    <li className="flex justify-between">
                      <strong>Terça:</strong>
                      <span>{churchLocation.serviceHours.tuesday}</span>
                    </li>
                    <li className="flex justify-between">
                      <strong>Quinta:</strong>
                      <span>{churchLocation.serviceHours.thursday}</span>
                    </li>
                    <li className="flex justify-between">
                      <strong>3º Sábado:</strong>
                      <span>{churchLocation.serviceHours.thirdSaturday}</span>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button
                    asChild
                    className="bg-neutral-900 hover:bg-neutral-800 text-white"
                  >
                    <a
                      href="https://www.google.com/maps/place/AD+Barreira/@-22.559162,-45.238871,6002m/data=!3m1!1e3!4m6!3m5!1s0x94cca3b4a01f2aad:0x9d8d3b20b6bde21b!8m2!3d-22.559162!4d-45.2388715!16s%2Fg%2F11v0d50why?hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDIyNC4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver no Maps
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    asChild
                    className="border-neutral-900 text-neutral-900 hover:bg-neutral-100"
                  >
                    <a href={`tel:${churchLocation.phone}`}>Ligar agora</a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}