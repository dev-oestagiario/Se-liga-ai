import { Link } from "react-router-dom";
import { BookOpen, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-base-200/50 backdrop-blur-md">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo e descrição */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="h-5 w-5 text-primary" />
              <span className="font-bold text-base-content">Plataforma Educacional</span>
            </div>
            <p className="text-sm text-base-content/70">
              Transformando o aprendizado em experiência interativa.
            </p>
          </div>

          {/* Links úteis */}
          <div>
            <h3 className="font-semibold mb-4 text-base-content">Links Úteis</h3>
            <div className="flex flex-col gap-2">
              <Link
                to="/manual"
                className="text-sm text-base-content/70 hover:text-primary transition-colors"
              >
                Manual do Professor
              </Link>
              <Link
                to="/tutoriais"
                className="text-sm text-base-content/70 hover:text-primary transition-colors"
              >
                Tutoriais
              </Link>
              <Link
                to="/docs"
                className="text-sm text-base-content/70 hover:text-primary transition-colors"
              >
                Documentação Técnica
              </Link>
            </div>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-semibold mb-4 text-base-content">Contato</h3>
            <a
              href="mailto:contato@plataforma.edu"
              className="flex items-center gap-2 text-sm text-base-content/70 hover:text-primary transition-colors"
            >
              <Mail className="h-4 w-4" />
              contato@plataforma.edu
            </a>
          </div>
        </div>

        {/* Direitos autorais */}
        <div className="mt-10 pt-6 border-t border-base-300 text-center text-sm text-base-content/50">
          &copy; {new Date().getFullYear()} Plataforma Educacional. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
