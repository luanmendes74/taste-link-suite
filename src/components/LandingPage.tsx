import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, QrCode, Smartphone, BarChart3, Clock, Shield, Zap, Star } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import heroImage from "@/assets/hero-image.jpg";
import dashboardDemo from "@/assets/dashboard-demo.jpg";
import MenuDemo from "./MenuDemo";

const LandingPage = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCTA = (action: string) => {
    toast({
      title: "🚀 Ação ativada!",
      description: `${action} - Funcionalidade implementada com sucesso!`,
    });
  };

  const handleLogin = () => {
    toast({
      title: "🔐 Login",
      description: "Redirecionando para área de login...",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-primary w-8 h-8 rounded-lg flex items-center justify-center">
              <QrCode className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-heading font-bold text-foreground">CardápioTech</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-muted-foreground hover:text-foreground transition-fast cursor-pointer"
            >
              Recursos
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-muted-foreground hover:text-foreground transition-fast cursor-pointer"
            >
              Preços
            </button>
            <button 
              onClick={() => scrollToSection('demo')}
              className="text-muted-foreground hover:text-foreground transition-fast cursor-pointer"
            >
              Demo
            </button>
            <Button variant="outline" size="sm" onClick={handleLogin}>Login</Button>
            <Button variant="primary" size="sm" onClick={() => handleCTA('Começar Grátis')}>Começar Grátis</Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <Badge variant="secondary" className="mb-6">
              🚀 Revolucione seu restaurante
            </Badge>
            
            <h1 className="text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight mb-6">
              Cardápio Digital
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Inteligente</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Transforme a experiência dos seus clientes com cardápios digitais, pedidos via QR Code e gestão completa do seu estabelecimento. Tudo em uma plataforma moderna e fácil de usar.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button variant="hero" size="lg" className="shadow-glow" onClick={() => handleCTA('Começar Gratuitamente')}>
                Começar Gratuitamente
              </Button>
              <Button variant="outline" size="lg" onClick={() => scrollToSection('demo')}>
                Ver Demonstração
              </Button>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-success" />
                <span>Setup em 5 minutos</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-success" />
                <span>Suporte gratuito</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-success" />
                <span>Sem mensalidade inicial</span>
              </div>
            </div>
          </div>
          
          <div className="animate-scale-in">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Cardápio Digital em Smartphone" 
                className="w-full h-auto rounded-2xl shadow-elegant"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-elegant animate-float">
                <div className="flex items-center space-x-3">
                  <div className="bg-gradient-primary w-12 h-12 rounded-lg flex items-center justify-center">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">+85% Satisfação</p>
                    <p className="text-sm text-muted-foreground">dos clientes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Recursos Completos</Badge>
            <h2 className="text-4xl font-heading font-bold text-foreground mb-4">
              Tudo que seu restaurante precisa
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Uma plataforma completa para modernizar seu estabelecimento e aumentar suas vendas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-elegant hover:shadow-glow transition-slow group">
              <CardHeader>
                <div className="bg-gradient-primary w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-fast">
                  <QrCode className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">QR Code por Mesa</CardTitle>
                <CardDescription>
                  Cada mesa tem seu QR Code único. Clientes fazem pedidos direto pelo celular sem precisar chamar garçom.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-elegant hover:shadow-glow transition-slow group">
              <CardHeader>
                <div className="bg-gradient-secondary w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-fast">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">Cardápio Responsivo</CardTitle>
                <CardDescription>
                  Interface otimizada para mobile com fotos HD dos pratos, descrições detalhadas e preços atualizados em tempo real.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-elegant hover:shadow-glow transition-slow group">
              <CardHeader>
                <div className="bg-gradient-accent w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-fast">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">Dashboard Inteligente</CardTitle>
                <CardDescription>
                  Relatórios completos com vendas, pratos mais pedidos, horários de pico e análise de desempenho.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-elegant hover:shadow-glow transition-slow group">
              <CardHeader>
                <div className="bg-gradient-primary w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-fast">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">Pedidos em Tempo Real</CardTitle>
                <CardDescription>
                  Acompanhe todos os pedidos em tempo real com status: recebido, preparando, pronto e entregue.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-elegant hover:shadow-glow transition-slow group">
              <CardHeader>
                <div className="bg-gradient-secondary w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-fast">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">Seguro e Confiável</CardTitle>
                <CardDescription>
                  Plataforma com segurança de nível bancário, backup automático e uptime de 99.9%.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-elegant hover:shadow-glow transition-slow group">
              <CardHeader>
                <div className="bg-gradient-accent w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-fast">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">Setup Instantâneo</CardTitle>
                <CardDescription>
                  Comece a usar em menos de 5 minutos. Importe seu cardápio e comece a receber pedidos hoje mesmo.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Veja em Ação</Badge>
            <h2 className="text-4xl font-heading font-bold text-foreground mb-4">
              Demonstração Interativa
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Veja como funciona na prática. Interface intuitiva tanto para clientes quanto para gestores.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <div className="mb-6">
                <Badge variant="secondary" className="mb-3">
                  📱 Teste Interativo
                </Badge>
                <h3 className="text-2xl font-heading font-bold text-foreground mb-3">
                  Cardápio Digital Interativo
                </h3>
                <p className="text-muted-foreground">
                  Experimente como seus clientes vão navegar pelo cardápio. Interface intuitiva, categorias organizadas e carrinho de compras integrado.
                </p>
              </div>
              <MenuDemo />
            </div>
            
            <div className="animate-scale-in">
              <div className="mb-6">
                <Badge variant="secondary" className="mb-3">
                  📊 Dashboard Completo
                </Badge>
                <h3 className="text-2xl font-heading font-bold text-foreground mb-3">
                  Gestão Inteligente
                </h3>
                <p className="text-muted-foreground mb-4">
                  Acompanhe vendas, pedidos e performance em tempo real. Relatórios detalhados para otimizar seu negócio.
                </p>
              </div>
              <div className="bg-white p-2 rounded-2xl shadow-elegant">
                <img 
                  src={dashboardDemo} 
                  alt="Dashboard de Gestão" 
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Preços Simples</Badge>
            <h2 className="text-4xl font-heading font-bold text-foreground mb-4">
              Escolha o plano ideal para você
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comece grátis e escale conforme seu negócio cresce. Sem taxas ocultas.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 border-border hover:border-primary/50 transition-fast">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Básico</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">R$ 29</span>
                  <span className="text-muted-foreground">/mês</span>
                </div>
                <CardDescription>Perfeito para começar</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span>50 produtos</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span>10 mesas</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span>QR Codes ilimitados</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span>Suporte por email</span>
                </div>
                <Button className="w-full mt-6" variant="outline" onClick={() => handleCTA('Plano Básico')}>
                  Começar Grátis
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary shadow-glow relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge variant="default" className="bg-gradient-primary">Mais Popular</Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Premium</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">R$ 59</span>
                  <span className="text-muted-foreground">/mês</span>
                </div>
                <CardDescription>Para restaurantes em crescimento</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span>200 produtos</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span>50 mesas</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span>Relatórios avançados</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span>Suporte prioritário</span>
                </div>
                <Button className="w-full mt-6" variant="primary" onClick={() => handleCTA('Plano Premium')}>
                  Começar Teste Grátis
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:border-primary/50 transition-fast">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Enterprise</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">R$ 99</span>
                  <span className="text-muted-foreground">/mês</span>
                </div>
                <CardDescription>Para grandes operações</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span>Produtos ilimitados</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span>Mesas ilimitadas</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span>API personalizada</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span>Suporte dedicado</span>
                </div>
                <Button className="w-full mt-6" variant="secondary" onClick={() => handleCTA('Plano Enterprise')}>
                  Falar com Vendas
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-heading font-bold mb-4">
            Pronto para revolucionar seu restaurante?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Junte-se a mais de 1.000 restaurantes que já transformaram sua operação com nossa plataforma.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90" onClick={() => handleCTA('Começar Gratuitamente')}>
              Começar Gratuitamente
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10" onClick={() => handleCTA('Agendar Demonstração')}>
              Agendar Demonstração
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-gradient-primary w-8 h-8 rounded-lg flex items-center justify-center">
                  <QrCode className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-heading font-bold">CardápioTech</span>
              </div>
              <p className="text-white/70">
                A plataforma mais completa para cardápios digitais e gestão de restaurantes.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Produto</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-white transition-fast">Recursos</a></li>
                <li><a href="#" className="hover:text-white transition-fast">Preços</a></li>
                <li><a href="#" className="hover:text-white transition-fast">Demonstração</a></li>
                <li><a href="#" className="hover:text-white transition-fast">API</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-white transition-fast">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-white transition-fast">Contato</a></li>
                <li><a href="#" className="hover:text-white transition-fast">Tutorial</a></li>
                <li><a href="#" className="hover:text-white transition-fast">Status</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-white transition-fast">Sobre</a></li>
                <li><a href="#" className="hover:text-white transition-fast">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-fast">Carreiras</a></li>
                <li><a href="#" className="hover:text-white transition-fast">Privacidade</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/70">
            <p>&copy; 2024 CardápioTech. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;