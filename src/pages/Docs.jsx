import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Code2, Cpu, Plug, BookOpen } from "lucide-react";
import Tabs from "@/components/ui/tabs";

const Docs = () => {
  const tabsData = [
    {
      value: "connections",
      label: (
        <span className="flex items-center gap-2">
          <Plug className="h-4 w-4 text-primary" /> Conexões
        </span>
      ),
      content: (
        <Card className="bg-base-100 border border-base-300 shadow-sm">
          <CardContent className="p-6 flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-base-content">
              Esquema de Conexões
            </h2>
            <p className="text-base-content/70">
              Este diagrama ilustra como conectar os diversos componentes da
              plataforma.
            </p>

            <div className="bg-base-200 rounded-lg p-8 flex items-center justify-center min-h-[400px]">
              <div className="text-center space-y-4">
                <Plug className="h-16 w-16 text-primary mx-auto" />
                <p className="text-base-content/70">
                  Diagrama de conexões será exibido aqui
                </p>
                <p className="text-sm text-base-content/50">
                  Upload de imagem SVG/PNG do esquema de conexões
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold text-base-content">
                Componentes Principais:
              </h3>
              <ul className="space-y-2 text-base-content/70">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>
                    <strong>Módulo Central:</strong> Unidade de processamento
                    principal
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>
                    <strong>Sensores:</strong> Conectados via portas I/O
                    dedicadas
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>
                    <strong>Interface de Rede:</strong> Comunicação
                    WiFi/Ethernet
                  </span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      ),
    },
    {
      value: "hardware",
      label: (
        <span className="flex items-center gap-2">
          <Cpu className="h-4 w-4 text-secondary" /> Hardware
        </span>
      ),
      content: (
        <Card className="bg-base-100 border border-base-300 shadow-sm">
          <CardContent className="p-6 flex flex-col gap-8">
            <h2 className="text-2xl font-bold text-base-content">
              Diagrama de Hardware
            </h2>
            <p className="text-base-content/70">
              Representação técnica dos componentes físicos e suas
              especificações.
            </p>

            <div className="bg-base-200 rounded-lg p-10 flex items-center justify-center min-h-[400px]">
              <div className="text-center space-y-4">
                <Cpu className="h-16 w-16 text-secondary mx-auto" />
                <p className="text-base-content/70">
                  Diagrama de hardware será exibido aqui
                </p>
                <p className="text-sm text-base-content/50">
                  Upload de imagem SVG/PNG do diagrama técnico
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Processador", desc: "ARM Cortex-M4 @ 120MHz" },
                { title: "Memória", desc: "512KB Flash / 128KB RAM" },
                { title: "Conectividade", desc: "WiFi 802.11 b/g/n, Bluetooth 5.0" },
                { title: "Alimentação", desc: "5V DC via USB ou adaptador" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-base-200 rounded-lg flex flex-col justify-center"
                >
                  <h4 className="font-semibold mb-2 text-base-content">{item.title}</h4>
                  <p className="text-sm text-base-content/70">{item.desc}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ),
    },
    {
      value: "api",
      label: (
        <span className="flex items-center gap-2">
          <Code2 className="h-4 w-4 text-accent" /> APIs
        </span>
      ),
      content: (
        <Card className="bg-base-100 border border-base-300 shadow-sm">
          <CardContent className="p-6 flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-base-content">
              APIs e Integrações
            </h2>
            <p className="text-base-content/70">
              Endpoints disponíveis para integração com sistemas externos.
            </p>

            <div className="space-y-4">
              {[
                { method: "GET", endpoint: "/api/games", desc: "Lista todos os jogos disponíveis", color: "accent" },
                { method: "POST", endpoint: "/api/games/start", desc: "Inicia uma nova partida com os parâmetros fornecidos", color: "primary" },
                { method: "GET", endpoint: "/api/results/:gameId", desc: "Retorna os resultados de uma partida específica", color: "accent" },
              ].map((api, idx) => (
                <div key={idx} className="border rounded-lg p-4 border-base-300">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-2 py-1 bg-${api.color} text-${api.color}-content text-xs font-semibold rounded`}>
                      {api.method}
                    </span>
                    <code className="text-sm text-base-content">{api.endpoint}</code>
                  </div>
                  <p className="text-sm text-base-content/70">{api.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-base-200 rounded-lg">
              <h3 className="font-semibold text-base-content mb-2">Autenticação</h3>
              <p className="text-sm text-base-content/70">
                Todas as requisições devem incluir o header{" "}
                <code className="text-xs bg-base-300 px-1 py-0.5 rounded">
                  Authorization: Bearer YOUR_TOKEN
                </code>
              </p>
            </div>
          </CardContent>
        </Card>
      ),
    },
    {
      value: "notes",
      label: (
        <span className="flex items-center gap-2">
          <BookOpen className="h-4 w-4 text-primary" /> Notas
        </span>
      ),
      content: (
        <Card className="bg-base-100 border border-base-300 shadow-sm">
          <CardContent className="p-6 flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-base-content">Notas Técnicas</h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-base-content mb-2">
                  Requisitos Mínimos
                </h3>
                <ul className="space-y-2 text-base-content/70">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Navegador moderno com suporte a WebSocket (Chrome 90+, Firefox 88+, Safari 14+)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Conexão de internet com velocidade mínima de 5 Mbps</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Dispositivos com pelo menos 2GB de RAM</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-base-content mb-2">
                  Atualizações
                </h3>
                <p className="text-base-content/70 mb-3">
                  A plataforma é atualizada regularmente com novos recursos e
                  correções.
                </p>
                <div className="bg-base-200 rounded-lg p-4">
                  <p className="text-sm text-base-content">
                    <strong>Versão atual:</strong> 2.1.0
                  </p>
                  <p className="text-sm text-base-content/70 mt-1">Última atualização: Janeiro 2025</p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-base-content mb-2">
                  FAQ Técnico
                </h3>
                <div className="space-y-3">
                  <div className="border-l-2 border-primary pl-4">
                    <p className="font-medium mb-1">
                      Como configurar múltiplos sensores?
                    </p>
                    <p className="text-sm text-base-content/70">
                      Consulte a seção de esquema de conexões para ver o diagrama completo.
                    </p>
                  </div>
                  <div className="border-l-2 border-primary pl-4">
                    <p className="font-medium mb-1">
                      Qual a latência esperada?
                    </p>
                    <p className="text-sm text-base-content/70">
                      Em condições ideais, a latência varia entre 50-100ms.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ),
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-base-200">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-secondary/20 to-primary/10">
          <div className="container mx-auto px-4 text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-base-content">
              Documentação Técnica
            </h1>
            <p className="text-xl text-base-content/70">
              Informações detalhadas sobre hardware, conexões e integrações
            </p>
          </div>
        </section>

        {/* Tabs */}
        <section className="py-16 container mx-auto px-4 max-w-5xl">
          <Tabs defaultValue="connections" tabs={tabsData} />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Docs;
