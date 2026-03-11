import { motion } from "framer-motion";
import { Paintbrush, Ruler, Grid3X3, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import AppLayout from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "peinture",
    title: "Peinture",
    icon: <Paintbrush className="w-10 h-10" />,
    description: "Travaux de peinture intérieure et extérieure avec des finitions de haute qualité. Nous utilisons des peintures durables adaptées à chaque type de surface.",
    features: ["Peinture intérieure", "Peinture extérieure", "Finitions décoratives", "Traitements anti-humidité"]
  },
  {
    id: "staff",
    title: "Staff & Décoration",
    icon: <Ruler className="w-10 h-10" />,
    description: "Conception et installation d'éléments en staff. Des plafonds design aux moulures élégantes, nous donnons du caractère à vos espaces.",
    features: ["Plafonds design", "Moulures et corniches", "Éclairage intégré", "Rosaces et ornements"]
  },
  {
    id: "revetement",
    title: "Pose de Pavés et Carrelages",
    icon: <Grid3X3 className="w-10 h-10" />,
    description: "Installation professionnelle de carrelages et pavés pour maisons, bureaux et espaces commerciaux. Un travail de précision pour une durabilité maximale.",
    features: ["Carrelage sol et mural", "Pavés extérieurs", "Espaces commerciaux", "Matériaux durables"]
  }
];

export default function Services() {
  return (
    <AppLayout>
      {/* Page Header */}
      <div className="bg-secondary text-secondary-foreground pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold mb-6 text-white"
          >
            Nos <span className="text-primary">Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-secondary-foreground/80 max-w-2xl mx-auto"
          >
            Des solutions complètes pour tous vos besoins en rénovation et construction, réalisées par des professionnels qualifiés.
          </motion.p>
        </div>
      </div>

      {/* Services List */}
      <div className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-6"
            >
              <div className="w-full space-y-6">
                <div className="w-16 h-16 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  {service.icon}
                </div>
                <h2 className="text-3xl font-display font-bold text-foreground">{service.title}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3 pt-4">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="font-medium text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-6">
                  <Link href="/contact">
                    <Button variant="outline" className="group">
                      Demander un devis 
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
