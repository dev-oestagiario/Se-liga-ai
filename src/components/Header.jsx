import { Link } from "react-router-dom";
import { BookOpen, Download } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-base-100/70 backdrop-blur-md shadow-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 transition-opacity hover:opacity-80"
        >
          <BookOpen className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold text-base-content">
            Plataforma Educacional
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {["Início", "Manual", "Tutoriais", "Documentação"].map((item) => {
            const route =
              item === "Início"
                ? "/"
                : item === "Documentação"
                ? "/docs"
                : `/${item.toLowerCase()}`;

            return (
              <Link
                key={item}
                to={route}
                className="text-sm font-medium text-base-content/80 hover:text-base-content transition-colors"
              >
                {item}
              </Link>
            );
          })}
        </nav>

        {/* Download Button */}
        <a
          href="/pdfs/manual-professor.pdf"
          download
          className="btn btn-primary btn-sm gap-2 flex items-center hover:scale-105 transition-transform duration-200"
        >
          <Download className="h-4 w-4" />
          <span className="hidden sm:inline">Baixar Manual</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
