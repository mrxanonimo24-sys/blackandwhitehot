import { motion } from 'motion/react';
import { ChevronRight, Lock, EyeOff, TrendingUp, ShieldCheck, Zap, Smartphone, CheckCircle2, Star } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-red-600 selection:text-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{ backgroundImage: "url('https://i.ibb.co/qLP1LTWS/Whats-App-Image-2026-03-28-at-17-26-54.jpg')" }}
        />
        {/* Gradient Overlays for Readability and Blending */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/80 to-black" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96 bg-red-600/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-lg">
              O SEGREDO MAIS <span className="text-red-600">LUCRATIVO</span> DA INTERNET.
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light drop-shadow-md">
              Descubra o método exato para gerar renda diária usando modelos criadas por Inteligência Artificial. Sem aparecer, sem estoque e direto no seu PIX.
            </p>

            <motion.button
              animate={{ boxShadow: ['0px 0px 20px rgba(220,38,38,0.4)', '0px 0px 45px rgba(220,38,38,0.8)', '0px 0px 20px rgba(220,38,38,0.4)'] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-bold text-lg py-4 px-8 rounded-lg transition-all flex items-center justify-center mx-auto gap-2 uppercase tracking-wide"
            >
              Quero Destravar Meu Acesso <ChevronRight className="w-5 h-5" />
            </motion.button>
            
            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-400 drop-shadow-sm">
              <Lock className="w-4 h-4" /> Compra 100% Segura e Privada
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-white/5">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">O MÉTODO <span className="text-red-600">HOT BLACK &amp; WHITE</span></h2>
          <p className="text-gray-400">Baseado em 3 pilares inquebráveis para imprimir dinheiro online.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "1. CRIAR",
              desc: "Gere modelos hiper-realistas com IA em poucos cliques. Sem precisar de equipamentos ou estúdio.",
              icon: <Zap className="w-8 h-8 text-red-600 mb-4" />
            },
            {
              title: "2. CONSTRUIR",
              desc: "Crie uma audiência magnética no Instagram usando conteúdo viral e estratégico.",
              icon: <Smartphone className="w-8 h-8 text-red-600 mb-4" />
            },
            {
              title: "3. MONETIZAR",
              desc: "Converta seguidores em pagamentos diários via WhatsApp. Uma máquina de PIX.",
              icon: <TrendingUp className="w-8 h-8 text-red-600 mb-4" />
            }
          ].map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-red-600/50 transition-colors"
            >
              {pillar.icon}
              <h3 className="text-xl font-bold mb-3">{pillar.title}</h3>
              <p className="text-gray-400 leading-relaxed">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 leading-tight">
              Por que este é o <span className="text-red-600">melhor modelo</span> de negócio atual?
            </h2>
            <div className="space-y-6">
              {[
                { title: "100% Anônimo", desc: "Você nunca precisará mostrar o seu rosto ou gravar vídeos.", icon: <EyeOff className="w-6 h-6 text-red-600" /> },
                { title: "Comece do Zero", desc: "Não exige conhecimento técnico ou experiência prévia.", icon: <TrendingUp className="w-6 h-6 text-red-600" /> },
                { title: "Privacidade Total", desc: "Ninguém saberá que você está por trás da operação.", icon: <ShieldCheck className="w-6 h-6 text-red-600" /> },
                { title: "Estrutura Simples", desc: "Tudo o que você precisa é de um celular e conexão com a internet.", icon: <Smartphone className="w-6 h-6 text-red-600" /> }
              ].map((benefit, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1">{benefit.icon}</div>
                  <div>
                    <h4 className="font-bold text-lg">{benefit.title}</h4>
                    <p className="text-gray-400 text-sm">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-red-600/20 blur-[50px] rounded-full" />
            <div className="relative bg-zinc-900 border border-zinc-800 p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-6 text-center">O Passo a Passo</h3>
              <ul className="space-y-4">
                {["Criação da Modelo IA", "Produção de Conteúdo", "Tráfego no Instagram", "Conversão no WhatsApp", "Recebimento via PIX"].map((step, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <div className="w-6 h-6 rounded-full bg-red-600/20 text-red-500 flex items-center justify-center text-xs font-bold border border-red-600/30">
                      {i + 1}
                    </div>
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto text-center border-t border-white/5 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-red-600/5 blur-[120px] pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative bg-zinc-950 border border-red-600/30 p-8 sm:p-12 rounded-3xl shadow-[0_0_50px_rgba(220,38,38,0.15)]"
        >
          <div className="inline-block py-1 px-3 rounded-full bg-red-600/20 text-red-500 text-sm font-bold tracking-widest uppercase mb-6">
            Acesso Imediato
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            O Método Completo
          </h2>
          <p className="text-gray-400 mb-8">
            Um conteúdo privado e pouco conhecido. A simplicidade aliada à execução perfeita.
          </p>

          <div className="mb-8">
            <span className="text-gray-500 line-through text-lg">De R$ 49,90</span>
            <div className="flex items-center justify-center gap-2 mt-2">
              <span className="text-2xl font-medium text-gray-400">Por apenas</span>
              <span className="text-5xl sm:text-6xl font-black text-red-600">R$ 14,90</span>
            </div>
            <p className="text-sm text-gray-500 mt-2">O preço de um café para aprender a lucrar na internet.</p>
          </div>

          <ul className="text-left space-y-3 mb-10 max-w-sm mx-auto">
            {["Acesso instantâneo ao eBook", "Estratégia completa de IA", "Scripts de conversão WhatsApp", "Suporte VIP"].map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-gray-300">
                <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <motion.button
            animate={{ boxShadow: ['0px 0px 30px rgba(220,38,38,0.5)', '0px 0px 60px rgba(220,38,38,0.9)', '0px 0px 30px rgba(220,38,38,0.5)'] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-black text-xl py-5 px-8 rounded-xl transition-all uppercase tracking-wider"
          >
            ADQUIRIR AGORA
          </motion.button>

          <p className="mt-6 text-xs text-red-500/80 font-medium uppercase tracking-widest">
            Atenção: Esta página pode sair do ar a qualquer momento.
          </p>
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-white/5">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">O QUE ESTÃO <span className="text-red-600">FALANDO</span></h2>
          <p className="text-gray-400">Resultados reais de quem já aplicou o método.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "RAMIRES HOT",
              text: "Apliquei o método e no terceiro dia já estava recebendo notificações de PIX. A parte de não precisar aparecer foi o que mais me chamou atenção. Bizarro de simples.",
              image: "https://picsum.photos/seed/ramires/100/100"
            },
            {
              name: "DUDU ESPARTANO",
              text: "Já tentei dropshipping e afiliados, mas nada deu retorno tão rápido quanto criar essas modelos de IA. O script de WhatsApp que vem junto vale ouro.",
              image: "https://picsum.photos/seed/dudu/100/100"
            },
            {
              name: "RICK 13K",
              text: "Paguei R$14,90 achando que era só mais um e-book, mas o conteúdo é absurdo. Estrutura enxuta, sem complicação. Já bati meus primeiros 10k no mês.",
              image: "https://picsum.photos/seed/rick/100/100"
            }
          ].map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-zinc-900/50 border border-white/10 p-8 rounded-2xl relative hover:border-red-600/30 transition-colors"
            >
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-14 h-14 rounded-full object-cover border-2 border-red-600/50 grayscale"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <div className="flex gap-1 mt-1">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-red-600 text-red-600" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-400 italic leading-relaxed">"{testimonial.text}"</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-white/5 text-gray-600 text-sm">
        <p>&copy; 2026 Método Hot Black &amp; White. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
