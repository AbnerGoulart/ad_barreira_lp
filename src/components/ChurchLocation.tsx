export function ChurchLocation() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-center text-2xl font-semibold mb-6">LOCALIZAÇÃO</h2>

      <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
        {/* Dados da igreja */}
        <div className="w-full lg:w-1/2 space-y-4 text-center lg:text-left">
          <h3 className="text-xl font-medium">Assembleia de Deus - AD Barreira</h3>
          <p className="text-gray-700">Rodovia Itajubá Lorena, km 207 - Barreira, Delfim Moreira - MG, 37514-000</p>
        </div>

        {/* Mapa via iframe */}
        <div className="w-full lg:w-1/2 rounded-lg border-2 border-gray-500">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13067.737470289196!2d-45.252127871074876!3d-22.568029001553956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cca3b4a01f2aad%3A0x9d8d3b20b6bde21b!2sAD%20Barreira!5e1!3m2!1spt-BR!2sbr!4v1740447026033!5m2!1spt-BR!2sbr"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
