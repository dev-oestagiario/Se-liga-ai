import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PlayCircle, FileText, ChevronRight } from "lucide-react";

const Tutoriais = () => {
  const tutorials = [
    {
      title: "Como configurar o ambiente",
      description:
        "Aprenda a preparar o sistema para começar a criar suas primeiras atividades",
      type: "video",
      duration: "8 min",
    },
    {
      title: "Como criar um novo jogo",
      description:
        "Passo a passo completo desde a concepção até a publicação de uma atividade",
      type: "text",
      duration: "12 min",
    },
    {
      title: "Como integrar com o painel do professor",
      description:
        "Configure as conexões necessárias para acompanhar o progresso dos alunos",
      type: "video",
      duration: "10 min",
    },
    {
      title: "Gerenciando turmas e alunos",
      description:
        "Organize suas turmas, adicione alunos e gerencie permissões",
      type: "text",
      duration: "6 min",
    },
    {
      title: "Exportando relatórios de desempenho",
      description:
        "Extraia dados e gere relatórios personalizados de suas atividades",
      type: "video",
      duration: "7 min",
    },
    {
      title: "Personalizando desafios",
      description:
        "Ajuste níveis de dificuldade e crie variações para diferentes turmas",
      type: "text",
      duration: "9 min",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-base-200">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/20 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-up">
              <h1 className="text-4xl md:text-5xl font-bold text-base-content">
                Tutoriais
              </h1>
              <p className="text-xl text-base-content/70">
                Aprenda a usar todos os recursos da plataforma com nossos guias
                passo a passo
              </p>
            </div>
          </div>
        </section>

        {/* Tutorials Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tutorials.map((tutorial, index) => (
                <Card
                  key={index}
                  className="group bg-base-100 border border-base-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <CardContent className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <div
                        className={`p-2 rounded-lg flex items-center justify-center ${
                          tutorial.type === "video"
                            ? "bg-primary/20 text-primary-content"
                            : "bg-secondary/20 text-secondary-content"
                        }`}
                      >
                        {tutorial.type === "video" ? (
                          <PlayCircle className="h-5 w-5 text-primary-content" />
                        ) : (
                          <FileText className="h-5 w-5 text-secondary-content" />
                        )}
                      </div>
                      <span className="text-sm text-base-content/60">
                        {tutorial.duration}
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors text-base-content">
                      {tutorial.title}
                    </h3>
                    <p className="text-base-content/70">{tutorial.description}</p>

                    <Button
                      variant="ghost"
                      className="w-full justify-between text-base-content group-hover:text-primary"
                    >
                      Ver passo a passo
                      <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Tips Section */}
        <section className="py-16 bg-base-200">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold text-center mb-8 text-base-content">
              Dicas Rápidas
            </h2>

            <Card className="bg-base-100 border border-base-300">
              <CardContent className="flex flex-col gap-4">
                {[
                  {
                    number: 1,
                    title: "Comece pelos tutoriais básicos",
                    description:
                      "Recomendamos começar pela configuração do ambiente antes de criar jogos complexos.",
                  },
                  {
                    number: 2,
                    title: "Pratique com exemplos reais",
                    description:
                      "Cada tutorial inclui exemplos práticos que você pode adaptar para suas necessidades.",
                  },
                  {
                    number: 3,
                    title: "Consulte a documentação técnica",
                    description:
                      "Para detalhes avançados, visite nossa seção de documentação técnica.",
                  },
                ].map((tip) => (
                  <div key={tip.number} className="flex gap-3 items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-content flex items-center justify-center text-sm font-semibold">
                      {tip.number}
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-base-content">
                        {tip.title}
                      </h4>
                      <p className="text-base-content/70 text-sm">
                        {tip.description}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Tutoriais;
