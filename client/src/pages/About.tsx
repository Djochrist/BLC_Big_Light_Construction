import { motion } from "framer-motion";
import AppLayout from "@/components/layout/AppLayout";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <AppLayout>
      {/* Header */}
      <div className="bg-secondary text-secondary-foreground pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold mb-6 text-white"
          >
            À propos de <span className="text-primary">BLC</span>
          </motion.h1>
        </div>
      </div>

      <div className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                Notre Histoire & Notre Mission
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">Big Light Construction (BLC)</strong> est une entreprise spécialisée dans les travaux de rénovation et de construction basée à Kinshasa, en République Démocratique du Congo.
                </p>
                <p>
                  Notre mission est de fournir des services de qualité supérieure tout en restant compétitifs sur le marché. Nous croyons que chaque espace mérite d'être mis en valeur avec des finitions impeccables et des matériaux durables.
                </p>
                <p>
                  Nous combinons savoir-faire, professionnalisme et créativité pour transformer vos espaces selon vos attentes. Que ce soit pour une simple retouche de peinture, la création d'un plafond en staff design, ou la pose complète de revêtements de sol, notre équipe d'experts est dédiée à la réussite de votre projet.
                </p>
              </div>
              
              <div className="pt-8">
                <Link href="/contact">
                  <Button size="lg" className="font-semibold shadow-lg shadow-primary/20">
                    Travaillons ensemble
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-primary/10 rounded-3xl transform rotate-3 z-0" />
              {/* BLC team in action */}
              <video
                src="/blc.mp4"
                className="relative z-10 rounded-2xl shadow-xl w-full object-cover h-[500px]"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="L'équipe BLC en action"
              />
              <div className="absolute bottom-6 right-6 z-20 bg-white p-6 rounded-xl shadow-xl border border-border">
                <div className="text-4xl font-display font-bold text-primary mb-1">100%</div>
                <div className="font-medium text-foreground">Engagement Qualité</div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </AppLayout>
  );
}
