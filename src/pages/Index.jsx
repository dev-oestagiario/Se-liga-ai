import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeatureCard from "@/components/FeatureCard";
import {
  Gamepad2,
  FlaskConical,
  BarChart3,
  Download,
  BookOpen,
  FileCode,
  GraduationCap,
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-base-100 to-secondary/10" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-up">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Domine o jogo da{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  aprendizagem interativa
                </span>
              </h1>
              <p className="text-xl text-base-content/70">
                Descubra como professores e alunos estão usando nossa plataforma
                para transformar o aprendizado em experiência.
              </p>

              <div className="flex flex-row flex-wrap gap-4 justify-center items-center">
                <Button size="lg" asChild className="text-base">
                  <Link to="/manual">Começar agora</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="text-base"
                >
                  <a
                    href="/pdfs/manual-professor.pdf"
                    download
                    className="flex items-center gap-2"
                  >
                    <Download className="h-5 w-5" />
                    <span>Baixar o Manual do Professor</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Description Section */}
        <section className="py-16 bg-base-200">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h2 className="text-3xl font-bold text-base-content">
                Uma plataforma completa para educação interativa
              </h2>
              <p className="text-lg text-base-content/70">
                Use para criar jogos educativos, desafios em sala ou simulações
                práticas. Ideal para ensino médio, técnico e superior.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-base-content">
                Exemplos de Usabilidade
              </h2>
              <p className="text-base-content/70 max-w-2xl mx-auto">
                Conheça as principais funcionalidades que tornam nossa
                plataforma única
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <FeatureCard
                icon={Gamepad2}
                title="Modo Jogo"
                description="Interação entre turmas com desafios e competições educativas em tempo real."
                color="primary"
              />
              <FeatureCard
                icon={FlaskConical}
                title="Laboratório Virtual"
                description="Experiências práticas e desafios que simulam ambientes reais de aprendizagem."
                color="secondary"
              />
              <FeatureCard
                icon={BarChart3}
                title="Painel do Professor"
                description="Acompanhamento detalhado de métricas e progresso dos alunos."
                color="accent"
              />
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="py-20 bg-base-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-base-content">
                Links Úteis
              </h2>
              <p className="text-base-content/70">
                Acesse rapidamente os recursos que você precisa
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Link to="/manual" className="group">
                <div className="h-full p-6 rounded-lg border border-base-300 bg-base-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-3">
                    <BookOpen className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      Manual do Professor
                    </h3>
                  </div>
                  <p className="text-base-content/70">
                    Guia completo passo a passo para usar a plataforma
                  </p>
                </div>
              </Link>

              <Link to="/tutoriais" className="group">
                <div className="h-full p-6 rounded-lg border border-base-300 bg-base-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-3">
                    <GraduationCap className="h-6 w-6 text-secondary" />
                    <h3 className="text-xl font-semibold group-hover:text-secondary transition-colors">
                      Tutoriais
                    </h3>
                  </div>
                  <p className="text-base-content/70">
                    Vídeos e guias práticos para começar rapidamente
                  </p>
                </div>
              </Link>

              <Link to="/docs" className="group">
                <div className="h-full p-6 rounded-lg border border-base-300 bg-base-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-3">
                    <FileCode className="h-6 w-6 text-accent" />
                    <h3 className="text-xl font-semibold group-hover:text-accent transition-colors">
                      Documentação Técnica
                    </h3>
                  </div>
                  <p className="text-base-content/70">
                    Detalhes técnicos, diagramas e especificações
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
