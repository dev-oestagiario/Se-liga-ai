import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Download, PlayCircle, Settings, BarChart } from "lucide-react";

const Manual = () => {
  const gamePhases = [
    {
      phase: "Fase 1",
      title: "Preparação",
      description:
        "Configure o ambiente, defina os objetivos de aprendizagem e organize os grupos de alunos.",
      icon: Settings,
    },
    {
      phase: "Fase 2",
      title: "Execução",
      description:
        "Inicie a partida, acompanhe o progresso em tempo real e forneça suporte quando necessário.",
      icon: PlayCircle,
    },
    {
      phase: "Fase 3",
      title: "Avaliação",
      description:
        "Analise os resultados, identifique pontos de melhoria e celebre os sucessos alcançados.",
      icon: BarChart,
    },
  ];

  const detailedInstructions = [
    {
      title: "Como Iniciar Partidas",
      description:
        "Acesse o painel de controle, selecione 'Nova Partida' e escolha o tipo de atividade. Configure os parâmetros como tempo limite, número de questões e nível de dificuldade. Compartilhe o código da sala com seus alunos.",
    },
    {
      title: "Como Configurar Jogadores",
      description:
        "Os alunos podem entrar na partida usando o código fornecido. Organize-os em times ou deixe-os competir individualmente. Você pode ajustar as equipes em tempo real antes de iniciar o jogo.",
    },
    {
      title: "Como Avaliar Resultados",
      description:
        "Após a conclusão da partida, acesse o relatório detalhado com métricas de desempenho, tempo de resposta, taxa de acerto e engajamento. Exporte os dados para análise posterior ou compartilhe feedbacks individualizados.",
    },
  ];

  const useCases = [
    {
      title: "Jogo de Lógica para Matemática",
      description:
        "Aplique conceitos matemáticos em desafios práticos onde os alunos competem resolvendo problemas progressivamente mais complexos.",
    },
    {
      title: "Desafio de Engenharia com Sensores",
      description:
        "Utilize sensores e dispositivos físicos para criar experiências hands-on que integram teoria e prática.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-base-100">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-base-100">
          <div className="container mx-auto px-4 text-center max-w-3xl space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-base-content">
              Manual do Professor
            </h1>
            <p className="text-xl text-base-content/70">
              Entenda as etapas do jogo e como aplicá-lo em sala de aula
            </p>
            <Button size="lg" className="gap-2 py-3 px-5">
              <Download className="h-5 w-5" />
              Baixar Manual Completo (PDF)
            </Button>
          </div>
        </section>

        {/* Introdução */}
        <section className="py-16 bg-base-200">
          <div className="container mx-auto px-4 max-w-3xl">
            <Card className="bg-base-100 border border-base-300 shadow-md">
              <CardContent className="flex flex-col gap-4">
                <h2 className="text-2xl font-bold text-base-content">Introdução</h2>
                <p className="text-base-content/70 text-lg leading-relaxed">
                  Este manual foi desenvolvido para auxiliar professores a
                  utilizarem a plataforma educacional de forma efetiva. Aqui
                  você encontrará instruções detalhadas sobre cada etapa do
                  jogo, desde a configuração inicial até a análise dos
                  resultados. A metodologia proposta visa tornar o aprendizado
                  mais engajador e mensurável.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Etapas do Jogo */}
        <section className="py-16 bg-base-100">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12 text-base-content">
              Etapas do Jogo
            </h2>
            <div className="space-y-6">
              {gamePhases.map((phase, index) => {
                const Icon = phase.icon;
                return (
                  <Card
                    key={index}
                    className="bg-base-100 border border-base-300 shadow-md"
                  >
                    <CardContent className="flex flex-row items-center gap-6">
                      {/* Ícone */}
                      <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-primary/20 flex items-center justify-center">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>

                      {/* Conteúdo */}
                      <div className="flex flex-col gap-2">
                        <div className="flex flex-col md:flex-row md:items-center gap-2">
                          <span className="text-sm font-semibold text-primary">{phase.phase}</span>
                          <span className="text-xl font-bold text-base-content">{phase.title}</span>
                        </div>
                        <p className="text-base-content/70 text-lg">{phase.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Instruções Detalhadas */}
        <section className="py-16 bg-base-200">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold text-center mb-8 text-base-content">
              Instruções Detalhadas
            </h2>
            <div className="space-y-6">
              {detailedInstructions.map((item, idx) => (
                <Card
                  key={idx}
                  className="bg-base-100 border border-base-300 shadow-md"
                >
                  <CardContent className="flex flex-col gap-3">
                    <h3 className="text-xl font-semibold text-base-content">{item.title}</h3>
                    <p className="text-base-content/70 text-lg">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Casos de Uso */}
        <section className="py-16 bg-base-100">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold text-center mb-12 text-base-content">
              Casos de Uso
            </h2>
            <div className="space-y-6">
              {useCases.map((useCase, index) => (
                <Card
                  key={index}
                  className="bg-base-100 border border-base-300 shadow-md"
                >
                  <CardContent className="flex flex-col gap-3">
                    <h3 className="text-xl font-semibold text-base-content">{useCase.title}</h3>
                    <p className="text-base-content/70 text-lg">{useCase.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Manual;
