import { Header } from "@/components/landing/Header"
import { HeroGeometric } from "@/components/ui/shadcn-io/shape-landing-hero"
import { Footer } from "@/components/landing/Footer"
import { Features } from "@/components/landing/Features"
import { RoadmapCalculator } from "@/components/landing/RoadmapCalculator"
import { Pricing } from "@/components/landing/Pricing"
import Link from "next/link"
import { ArrowRight, MessageCircle } from "lucide-react"

// Section Transition Component - creates smooth gradient transitions between sections
function SectionTransition({
  id,
  from = "#030303",
  to = "#0f172a",
  height = "200px",
}: {
  id: string;
  from?: string;
  to?: string;
  height?: string;
}) {
  const gradientId = `gradient-${id}`

  return (
    <div
      className="w-full relative pointer-events-none"
      style={{ height, marginTop: '-1px' }}
    >
      {/* Wave SVG for organic transition */}
      <svg
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
        viewBox="0 0 1440 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={from} />
            <stop offset="100%" stopColor={to} />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${gradientId})`} />
        {/* Multiple wave layers for organic feel */}
        <path
          d="M0,80 C360,120 540,40 900,80 C1260,120 1380,40 1440,80 L1440,200 L0,200 Z"
          fill={to}
          opacity="0.4"
        />
        <path
          d="M0,100 C320,150 420,50 720,100 C1020,150 1120,50 1440,100 L1440,200 L0,200 Z"
          fill={to}
          opacity="0.6"
        />
        <path
          d="M0,120 C280,170 380,70 680,120 C980,170 1080,70 1440,120 L1440,200 L0,200 Z"
          fill={to}
          opacity="0.8"
        />
        <path
          d="M0,140 C240,190 340,90 640,140 C940,190 1040,90 1440,140 L1440,200 L0,200 Z"
          fill={to}
        />
      </svg>
    </div>
  )
}

// Simple CTA Section for Contact
function ContactCTA() {
  return (
    <section className="py-24 px-6 bg-[#0a0e1a] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent pointer-events-none" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
          <MessageCircle className="w-4 h-4 text-blue-400" />
          <span className="text-sm text-blue-400 font-medium">Nous sommes à votre écoute</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Des questions ?
        </h2>
        <p className="text-lg text-white/50 max-w-xl mx-auto mb-8">
          Notre équipe de fondateurs est disponible pour vous expliquer la vision
          en détail et répondre à toutes vos questions.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold transition-all group"
        >
          Nous contacter
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col relative bg-[#030303]">
      {/* Organic Background Transition */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle at 50% 100%, #0f172a, #020617 40%, #000000 100%)",
          opacity: 0.8
        }}
      />

      <div className="relative z-10">
        <Header />
        <main className="flex-1">
          <HeroGeometric
            badge="Campagne de Crowdfunding active • Phase 1"
            title1="L'intérim réinventé."
            title2="Open Source & IA."
            description="La première plateforme de gestion d'intérim construite par la communauté, pour la communauté. 100% Transparent. 100% Automatisé."
          />

          {/* Transition from Hero to Features */}
          <SectionTransition id="hero-to-features" from="#030303" to="#0a1628" height="150px" />

          {/* Features Section with dark blue background */}
          <div className="bg-[#0a1628] relative">
            <Features showLink={true} />
          </div>

          {/* Transition from Features to Roadmap */}
          <SectionTransition id="features-to-roadmap" from="#0a1628" to="#050d1a" height="120px" />

          <div className="bg-[#050d1a] relative">
            <RoadmapCalculator showLink={true} />
          </div>

          {/* Transition to Pricing - with gradient wrapper */}
          <SectionTransition id="roadmap-to-pricing" from="#050d1a" to="#0a1629" height="120px" />

          {/* Pricing Section with gradient background */}
          <div className="relative overflow-hidden">
            {/* Gradient background for Pricing */}
            <div
              className="absolute inset-0"
              style={{
                background: `
                  linear-gradient(180deg, 
                    #0c1629 0%, 
                    #001942c1 25%,
                    rgba(13, 26, 45, 0.78) 50%,
                    rgba(8, 18, 34, 0.85) 75%,
                    rgba(10, 15, 28, 0.85) 100%
                  )
                `
              }}
            />
            {/* Subtle radial glow */}
            <div
              className="absolute inset-0 opacity-40"
              style={{
                background: "radial-gradient(ellipse 80% 50% at 50% 50%, #1e3a5f 0%, transparent 60%)"
              }}
            />
            <div className="relative z-10">
              <Pricing />
            </div>
          </div>

          <ContactCTA />

          {/* Transition to Footer */}
          <SectionTransition id="contact-to-footer" from="#0a0e1a" to="#0a0e1a" height="100px" />
        </main>
        <Footer />
      </div>
    </div>
  )
}

