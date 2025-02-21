export function Footer() {
  return (
    <footer className="w-full bg-neutral-900 text-neutral-100 py-6 px-8 md:px-12 lg:px-20 text-center">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm sm:text-base md:text-lg lg:text-xl">
          © {new Date().getFullYear()} Assembleia de Deus - AD Barreira. Todos os direitos reservados.
        </p>
        <p className="text-xs sm:text-sm md:text-base mt-2">
          Desenvolvido por Abner Goulart com fé e dedicação.
        </p>
        <div className="mt-4">
          <a 
            href="https://github.com/AbnerGoulart" 
            className="text-neutral-100 hover:text-neutral-300 mx-2" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/abner-gamaliel-6a9582304/" 
            className="text-neutral-100 hover:text-neutral-300 mx-2" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
