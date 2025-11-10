import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap, TrendingUp, Brain, Rocket, DollarSign, Users, Smartphone, BarChart3, Shield, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import AnalysisFormModal from "@/components/AnalysisFormModal";

const Index = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <div className="min-h-screen bg-dark-bg text-foreground font-space overflow-x-hidden">
      {/* Navbar */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full z-50 bg-dark-bg/80 backdrop-blur-xl border-b border-border/50"
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-neon glow-neon">Creator Systems</div>
          <Button 
            variant="outline" 
            className="border-neon text-neon hover:bg-neon hover:text-dark-bg hover-glow"
            onClick={() => setModalOpen(true)}
          >
            Começar Agora
          </Button>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-neon/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-neon/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <motion.div 
          className="relative z-10 text-center max-w-5xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={fadeInUp} className="mb-6 inline-block">
            <span className="px-4 py-2 bg-neon/10 border border-neon/30 rounded-full text-neon text-sm font-medium">
              <Sparkles className="inline w-4 h-4 mr-2" />
              Zero Custo Inicial
            </span>
          </motion.div>

          <motion.h1 
            variants={fadeInUp}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          >
            Transforme sua influência em um{" "}
            <span className="text-neon glow-neon">sistema que gera renda recorrente</span>
          </motion.h1>

          <motion.p 
            variants={fadeInUp}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto"
          >
            Nós criamos seu app ou sistema gratuitamente. Você só paga quando vende.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
            <Button 
              size="lg" 
              className="bg-neon text-dark-bg hover:bg-neon-glow hover-glow text-lg px-8 py-6 h-auto group"
              onClick={() => setModalOpen(true)}
            >
              QUERO MEU APP GRATUITO
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          <motion.p variants={fadeInUp} className="text-sm text-muted-foreground">
            Sem custo de desenvolvimento. Sem risco. 100% performance.
          </motion.p>
        </motion.div>
      </section>

      {/* Market Change Section */}
      <section className="py-32 px-4 relative">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              O mercado mudou. E quem não mudar,{" "}
              <span className="text-neon">vai ficar pra trás.</span>
            </h2>
            <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
              <p>Os cursos online e infoprodutos tiveram seu auge.</p>
              <p>Mas a atenção mudou — as pessoas querem experiência, interação e recorrência.</p>
              <p className="text-foreground font-semibold">O futuro está em ter o seu próprio sistema.</p>
              <p className="text-neon text-2xl font-bold glow-neon">Quem tem um app, tem um negócio real.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-32 px-4 bg-gradient-to-b from-dark-bg to-card-bg">
        <div className="container mx-auto max-w-6xl">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Como funciona
          </motion.h2>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { icon: Users, title: "Você tem uma audiência", description: "Seguidores, lista de email ou comunidade engajada" },
              { icon: Rocket, title: "Nós criamos seu sistema", description: "App personalizado com sua marca e identidade" },
              { icon: TrendingUp, title: "Você lucra. Nós também.", description: "Modelo de sucesso compartilhado, zero risco inicial" }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <Card className="p-8 bg-card-bg border-border hover:border-neon/50 transition-all hover-glow h-full">
                  <item.icon className="w-12 h-12 text-neon mb-4" />
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button 
              variant="outline" 
              size="lg" 
              className="border-neon text-neon hover:bg-neon hover:text-dark-bg hover-glow"
              onClick={() => setModalOpen(true)}
            >
              QUERO SABER COMO FUNCIONA
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Why Now */}
      <section className="py-32 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Por que criar o seu sistema <span className="text-neon">agora</span>
          </motion.h2>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { icon: DollarSign, title: "Renda recorrente", description: "Receita previsível todo mês" },
              { icon: Zap, title: "Engajamento real", description: "Conexão direta com sua audiência" },
              { icon: Brain, title: "Mais autoridade", description: "Posicionamento como referência" },
              { icon: Star, title: "Zero custo inicial", description: "Sem investimento para começar" }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <Card className="p-6 bg-card-bg border-border hover:border-neon/50 transition-all hover-glow h-full text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 bg-neon/10 rounded-full flex items-center justify-center group-hover:bg-neon/20 transition-colors">
                    <item.icon className="w-8 h-8 text-neon" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-32 px-4 bg-gradient-to-b from-dark-bg to-card-bg">
        <div className="container mx-auto max-w-6xl">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            O que você vai ter
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="w-64 h-96 mx-auto bg-gradient-to-br from-neon/20 to-neon-glow/10 rounded-3xl border border-neon/30 flex items-center justify-center">
                  <Smartphone className="w-24 h-24 text-neon" />
                </div>
                <div className="absolute -right-4 top-1/2 w-48 h-32 bg-card-bg border border-neon/30 rounded-lg p-4 transform -translate-y-1/2">
                  <BarChart3 className="w-8 h-8 text-neon mb-2" />
                  <p className="text-xs text-muted-foreground">Painel admin completo</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {[
                "App com sua identidade visual",
                "Painel de controle completo",
                "Sistema de pagamentos integrado",
                "Área de membros e automações",
                "Suporte e atualizações"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-neon/20 flex items-center justify-center flex-shrink-0">
                    <div className="w-3 h-3 rounded-full bg-neon"></div>
                  </div>
                  <p className="text-lg">{item}</p>
                </div>
              ))}

              <Button 
                size="lg" 
                className="bg-neon text-dark-bg hover:bg-neon-glow hover-glow w-full mt-8"
                onClick={() => setModalOpen(true)}
              >
                QUERO MEU SISTEMA AGORA
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-32 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Shield className="w-16 h-16 text-neon mx-auto mb-8" />
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Quem está por trás</h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-4">
              Somos uma empresa especializada em SaaS e aplicativos para creators.
            </p>
            <p className="text-xl text-muted-foreground leading-relaxed mb-4">
              Ajudamos influenciadores a transformar seguidores em negócios reais e lucrativos.
            </p>
            <p className="text-2xl font-bold text-neon glow-neon">
              Agora, é sua vez.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-4 bg-gradient-to-b from-dark-bg to-card-bg">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-neon/5 blur-3xl"></div>
            <div className="relative bg-card-bg border border-neon/30 rounded-3xl p-12 md:p-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Você já tem a audiência.
              </h2>
              <p className="text-2xl md:text-3xl text-muted-foreground mb-4">
                Agora precisa da tecnologia.
              </p>
              <p className="text-xl md:text-2xl text-neon font-bold mb-12 glow-neon">
                Nós construímos. Você lucra. Simples assim.
              </p>
              
              <Button 
                size="lg" 
                className="bg-neon text-dark-bg hover:bg-neon-glow hover-glow text-xl px-12 py-8 h-auto group"
                onClick={() => setModalOpen(true)}
              >
                COMEÇAR AGORA — QUERO MEU APP GRATUITO
                <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border/50">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2025 Creator Systems. Transformando influenciadores em empresários digitais.</p>
        </div>
      </footer>

      {/* Modal */}
      <AnalysisFormModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default Index;
