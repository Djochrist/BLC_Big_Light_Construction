import { Link } from "wouter";
import { Hammer, Phone, Mail, MapPin } from "lucide-react";
import { CONTACT_EMAIL } from "@shared/constants";

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-primary-foreground">
                <Hammer className="w-5 h-5" />
              </div>
              <span className="font-display font-bold text-xl">BLC</span>
            </div>
            <p className="text-secondary-foreground/70 max-w-sm">
              Big Light Construction (BLC) - Votre partenaire de confiance pour la rénovation, la peinture et la construction à Kinshasa.
            </p>
          </div>

          <div>
            <h3 className="font-display font-semibold text-lg mb-4 text-white">Liens Rapides</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-secondary-foreground/70 hover:text-primary transition-colors">Accueil</Link>
              </li>
              <li>
                <Link href="/services" className="text-secondary-foreground/70 hover:text-primary transition-colors">Nos Services</Link>
              </li>
              <li>
                <Link href="/about" className="text-secondary-foreground/70 hover:text-primary transition-colors">À propos</Link>
              </li>
              <li>
                <Link href="/contact" className="text-secondary-foreground/70 hover:text-primary transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-lg mb-4 text-white">Contactez-nous</h3>
            <ul className="space-y-4 text-secondary-foreground/70">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+243 974 367 258</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="hover:text-primary transition-colors"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>Kinshasa, RDC</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary shrink-0 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
                <a href="https://www.tiktok.com/@big_light_construction" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  @big_light_construction
                </a>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-secondary-foreground/50">
          <p>&copy; {new Date().getFullYear()} Big Light Construction (BLC). Tous droits réservés.</p>
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <p>Design & Rénovation avec passion.</p>
            <span className="hidden sm:inline">•</span>
            <a
              href="mailto:djochristkfreelance@gmail.com"
              className="hover:text-primary transition-colors"
            >
              contactez le developpeur
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
