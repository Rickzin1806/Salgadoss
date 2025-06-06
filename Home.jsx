import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FeatureCard } from "@/components/FeatureCard";
import heroBg from "@/assets/hero-bg.jpg";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <section
        className="h-screen flex items-center justify-center text-white text-center p-8 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-bold mb-4">Seu Site Incrível</h1>
          <p className="text-xl mb-6">Crie impacto com uma presença online profissional.</p>
          <Button className="text-lg px-6 py-3">Começar Agora</Button>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">Sobre Nós</h2>
          <p className="text-lg text-gray-600">
            Somos especialistas em criar experiências digitais modernas que impulsionam resultados reais.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-8 bg-gray-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {["Performance", "Design Responsivo", "Fácil de Usar"].map((title, i) => (
            <FeatureCard key={title} title={title} delay={i * 0.2} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        © 2025 Seu Nome. Todos os direitos reservados.
      </footer>
    </div>
  );
}
