import { Link } from "wouter";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { ArrowRight, CheckCircle2, Shield, Clock } from "lucide-react";
import AppLayout from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <AppLayout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 pb-24">
        <div className="absolute inset-0 z-0">
          {/* landing page hero construction worker renovating site */}
          <img 
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80&fit=crop" 
            alt="Hero Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-secondary/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/30 mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-semibold tracking-wide uppercase">Big Light Construction</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-6 drop-shadow-lg">
              Rénover et réparer vos surfaces avec <span className="text-primary">BLC</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl leading-relaxed drop-shadow-md font-light">
              BLC offre des services professionnels de peinture et de staff, tant pour l'intérieur que l'extérieur, ainsi que la pose de pavés et de carrelages pour les maisons, bureaux et autres espaces.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/services">
                <Button size="lg" className="h-14 px-8 text-lg font-semibold shadow-xl shadow-primary/20 hover:scale-105 transition-transform w-full sm:w-auto">
                  Découvrir nos services
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-semibold bg-white/10 text-white border-white/30 hover:bg-white/20 hover:text-white backdrop-blur-md w-full sm:w-auto">
                  Nous contacter <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background relative md:-mt-20 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border p-8 rounded-2xl shadow-xl shadow-black/5 flex flex-col items-center text-center hover-elevate"
            >
              <div className="text-5xl font-display font-bold text-primary mb-2">
                <CountUp end={40} duration={2.5} suffix="+" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Projets Réalisés</h3>
              <p className="text-muted-foreground mt-2">Maisons, bureaux et commerces rénovés avec succès.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card border border-border p-8 rounded-2xl shadow-xl shadow-black/5 flex flex-col items-center text-center hover-elevate"
            >
              <div className="text-5xl font-display font-bold text-primary mb-2">
                <CountUp end={3} duration={2.5} />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Types de Prestations</h3>
              <p className="text-muted-foreground mt-2">Peinture, Staff, et Pose de revêtements (carrelage/pavés).</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card border border-border p-8 rounded-2xl shadow-xl shadow-black/5 flex flex-col items-center text-center hover-elevate"
            >
              <div className="text-5xl font-display font-bold text-primary mb-2">
                <CountUp end={100} duration={2.5} suffix="%" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Clients Satisfaits</h3>
              <p className="text-muted-foreground mt-2">La qualité et votre satisfaction sont notre priorité.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Pourquoi choisir BLC ?</h2>
            <p className="text-muted-foreground text-lg">
              Nous combinons savoir-faire technique et matériaux de qualité pour garantir la durabilité de tous nos ouvrages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <CheckCircle2 className="w-8 h-8 text-primary" />,
                title: "Qualité Supérieure",
                desc: "Finitions impeccables et attention aux détails pour chaque projet."
              },
              {
                icon: <Shield className="w-8 h-8 text-primary" />,
                title: "Matériaux Durables",
                desc: "Nous sélectionnons uniquement des matériaux reconnus pour leur résistance."
              },
              {
                icon: <Clock className="w-8 h-8 text-primary" />,
                title: "Respect des Délais",
                desc: "Nous nous engageons à livrer votre chantier dans les temps impartis."
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center p-6"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-24 bg-secondary text-secondary-foreground relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-blue-500/20 blur-3xl" />
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-white">
            Prêt à transformer votre espace ?
          </h2>
          <p className="text-xl text-secondary-foreground/80 mb-10">
            Contactez-nous aujourd'hui pour obtenir un devis gratuit et discuter de votre projet avec nos experts.
          </p>
          <Link href="/contact">
            <Button size="lg" className="h-14 px-10 text-lg font-bold shadow-xl shadow-primary/20">
              Demander un devis
            </Button>
          </Link>
        </div>
      </section>
    </AppLayout>
  );
}
