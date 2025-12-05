"use client"

import { FileText, Clock, Bot, Users, Briefcase, Calculator, Database, Calendar, Zap, Shield, Lock, ArrowRight, Check, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { useRef } from "react"

// Feature modules data
const modules = [
    {
        id: "candidates",
        title: "Module Candidats",
        subtitle: "ATS Intelligent",
        description: "Centralisez et gérez efficacement votre vivier de talents avec notre système de suivi des candidatures propulsé par l'IA.",
        icon: Users,
        color: "blue",
        features: [
            "Parsing automatique des CVs",
            "Base de données centralisée",
            "Calendrier de disponibilités",
            "Recherche multi-critères",
            "Historique & évaluations"
        ],
        stats: { value: "80%", label: "Temps gagné sur le sourcing" }
    },
    {
        id: "crm",
        title: "CRM Client",
        subtitle: "Gestion Commerciale",
        description: "Pilotez votre relation client et vos missions avec une vue 360° sur votre activité commerciale.",
        icon: Briefcase,
        color: "indigo",
        features: [
            "Fiches clients complètes",
            "Gestion des commandes",
            "Calcul automatique des marges",
            "Suivi des coefficients",
            "Dashboard commercial"
        ],
        stats: { value: "2x", label: "Productivité commerciale" }
    },
    {
        id: "admin",
        title: "Admin & Légal",
        subtitle: "Conformité Automatisée",
        description: "Automatisez la génération de contrats et les déclarations légales en toute conformité.",
        icon: FileText,
        color: "emerald",
        features: [
            "Contrats CMD/CM automatiques",
            "Signature électronique eIDAS",
            "DPAE vers URSSAF",
            "Alertes de conformité",
            "Archivage sécurisé"
        ],
        stats: { value: "0", label: "Erreur administrative" },
        secure: true
    },
    {
        id: "time",
        title: "Gestion du Temps",
        subtitle: "Workflow Optimisé",
        description: "Suivez précisément les heures travaillées avec validation automatique et export vers la paie.",
        icon: Clock,
        color: "amber",
        features: [
            "Saisie des heures intuitive",
            "Heures supplémentaires",
            "Workflow de validation",
            "Gestion des absences",
            "Export automatisé"
        ],
        stats: { value: "95%", label: "Taux de validation auto" }
    },
    {
        id: "payroll",
        title: "Paie & Facturation",
        subtitle: "Finance Automatisée",
        description: "De la pré-paie à la facturation client, automatisez l'ensemble de votre chaîne financière.",
        icon: Calculator,
        color: "rose",
        features: [
            "Calcul IFM et CP",
            "Variables de paie",
            "Gestion des acomptes",
            "Facturation automatique",
            "Suivi des paiements"
        ],
        stats: { value: "100%", label: "Précision des calculs" },
        secure: true
    },
    {
        id: "ai",
        title: "IA & Innovation",
        subtitle: "Intelligence Artificielle",
        description: "Exploitez la puissance de l'IA pour le matching, la rédaction et l'analyse prédictive.",
        icon: Bot,
        color: "violet",
        features: [
            "Matching prédictif",
            "Rédaction d'annonces IA",
            "Parsing intelligent",
            "Chatbot WhatsApp/SMS",
            "Analyse prédictive"
        ],
        stats: { value: "3x", label: "Taux de placement" }
    }
]

const colorVariants: Record<string, { gradient: string; border: string; bg: string; text: string; iconBg: string }> = {
    blue: {
        gradient: "from-blue-500/20 via-cyan-500/10 to-transparent",
        border: "border-blue-500/20 hover:border-blue-400/40",
        bg: "bg-blue-500/10",
        text: "text-blue-400",
        iconBg: "from-blue-500/20 to-cyan-500/20"
    },
    indigo: {
        gradient: "from-indigo-500/20 via-purple-500/10 to-transparent",
        border: "border-indigo-500/20 hover:border-indigo-400/40",
        bg: "bg-indigo-500/10",
        text: "text-indigo-400",
        iconBg: "from-indigo-500/20 to-purple-500/20"
    },
    emerald: {
        gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
        border: "border-emerald-500/20 hover:border-emerald-400/40",
        bg: "bg-emerald-500/10",
        text: "text-emerald-400",
        iconBg: "from-emerald-500/20 to-teal-500/20"
    },
    amber: {
        gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
        border: "border-amber-500/20 hover:border-amber-400/40",
        bg: "bg-amber-500/10",
        text: "text-amber-400",
        iconBg: "from-amber-500/20 to-orange-500/20"
    },
    rose: {
        gradient: "from-rose-500/20 via-pink-500/10 to-transparent",
        border: "border-rose-500/20 hover:border-rose-400/40",
        bg: "bg-rose-500/10",
        text: "text-rose-400",
        iconBg: "from-rose-500/20 to-pink-500/20"
    },
    violet: {
        gradient: "from-violet-500/20 via-fuchsia-500/10 to-transparent",
        border: "border-violet-500/20 hover:border-violet-400/40",
        bg: "bg-violet-500/10",
        text: "text-violet-400",
        iconBg: "from-violet-500/20 to-fuchsia-500/20"
    }
}

export function DetailedFeatures() {
    return (
        <div className="relative">
            {/* Hero Section */}
            <section className="relative py-20 md:py-32">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto text-center space-y-8"
                    >
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                            <Sparkles className="w-4 h-4 text-blue-400" />
                            <span className="text-sm text-white/70">6 modules intégrés</span>
                        </div>

                        {/* Title */}
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                            <span className="text-white">Une suite complète pour </span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">
                                votre agence
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed">
                            De la gestion des candidats à la facturation, chaque module est conçu pour s'intégrer parfaitement à votre workflow quotidien.
                        </p>

                        {/* Quick Stats */}
                        <div className="flex flex-wrap items-center justify-center gap-8 pt-8">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-white">6</div>
                                <div className="text-sm text-white/40">Modules</div>
                            </div>
                            <div className="w-px h-10 bg-white/10" />
                            <div className="text-center">
                                <div className="text-3xl font-bold text-white">100%</div>
                                <div className="text-sm text-white/40">Open Source</div>
                            </div>
                            <div className="w-px h-10 bg-white/10" />
                            <div className="text-center">
                                <div className="text-3xl font-bold text-white">RGPD</div>
                                <div className="text-sm text-white/40">Compliant</div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Gradient Orb */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
            </section>

            {/* Modules Grid - Bento Style */}
            <section className="relative py-16 md:py-24">
                <div className="container">
                    {/* First Row - 2 large cards */}
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                        {modules.slice(0, 2).map((module, index) => (
                            <ModuleCard key={module.id} module={module} index={index} size="large" />
                        ))}
                    </div>

                    {/* Second Row - 3 medium cards */}
                    <div className="grid md:grid-cols-3 gap-6 mb-6">
                        {modules.slice(2, 5).map((module, index) => (
                            <ModuleCard key={module.id} module={module} index={index + 2} size="medium" />
                        ))}
                    </div>

                    {/* Third Row - 1 wide card (AI) */}
                    <div className="grid md:grid-cols-1 gap-6">
                        <ModuleCard module={modules[5]} index={5} size="wide" />
                    </div>
                </div>
            </section>

            {/* Integration Section */}
            <section className="relative py-16 md:py-24 border-t border-white/5">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto text-center space-y-8"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                            Tous les modules fonctionnent ensemble
                        </h2>
                        <p className="text-white/50 text-lg max-w-2xl mx-auto">
                            Une donnée saisie une seule fois circule automatiquement dans tous les modules.
                            Du candidat à la facture, en passant par le contrat et les heures.
                        </p>

                        {/* Integration Flow Visual */}
                        <div className="relative py-12">
                            <div className="flex flex-wrap items-center justify-center gap-4">
                                {modules.map((module, index) => {
                                    const colors = colorVariants[module.color]
                                    return (
                                        <motion.div
                                            key={module.id}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            className={cn(
                                                "flex items-center gap-2 px-4 py-2 rounded-full border",
                                                colors.border,
                                                colors.bg
                                            )}
                                        >
                                            <module.icon className={cn("w-4 h-4", colors.text)} />
                                            <span className="text-sm text-white/80">{module.title}</span>
                                        </motion.div>
                                    )
                                })}
                            </div>

                            {/* Connection Lines - Decorative */}
                            <div className="absolute inset-0 pointer-events-none">
                                <svg className="w-full h-full" viewBox="0 0 800 100" preserveAspectRatio="none">
                                    <defs>
                                        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="rgba(59, 130, 246, 0)" />
                                            <stop offset="50%" stopColor="rgba(59, 130, 246, 0.3)" />
                                            <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
                                        </linearGradient>
                                    </defs>
                                    <path
                                        d="M0,50 Q200,30 400,50 T800,50"
                                        stroke="url(#lineGradient)"
                                        strokeWidth="1"
                                        fill="none"
                                    />
                                </svg>
                            </div>
                        </div>

                        {/* CTA */}
                        <motion.a
                            href="/roadmap"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-medium transition-all duration-200 group"
                        >
                            Voir la roadmap
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </motion.a>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

function ModuleCard({
    module,
    index,
    size
}: {
    module: typeof modules[0]
    index: number
    size: "large" | "medium" | "wide"
}) {
    const colors = colorVariants[module.color]

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={cn(
                "group relative rounded-2xl border bg-white/[0.02] backdrop-blur-sm transition-all duration-500",
                colors.border,
                size === "large" && "p-8 md:p-10",
                size === "medium" && "p-6 md:p-8",
                size === "wide" && "p-8 md:p-10"
            )}
        >
            {/* Gradient Background on Hover */}
            <div className={cn(
                "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none",
                `bg-gradient-to-br ${colors.gradient}`
            )} />

            {/* Content */}
            <div className={cn(
                "relative z-10",
                size === "wide" && "md:flex md:items-start md:gap-12"
            )}>
                {/* Left Part */}
                <div className={cn(
                    "space-y-4",
                    size === "wide" && "md:flex-1"
                )}>
                    {/* Icon & Title */}
                    <div className="flex items-start gap-4">
                        <div className={cn(
                            "w-12 h-12 rounded-xl flex items-center justify-center border border-white/10",
                            `bg-gradient-to-br ${colors.iconBg}`
                        )}>
                            <module.icon className={cn("w-6 h-6", colors.text)} />
                        </div>
                        <div>
                            <p className={cn("text-sm font-medium", colors.text)}>{module.subtitle}</p>
                            <h3 className="text-xl md:text-2xl font-bold text-white">{module.title}</h3>
                        </div>
                    </div>

                    {/* Description */}
                    <p className="text-white/50 leading-relaxed">
                        {module.description}
                    </p>

                    {/* Stats */}
                    <div className={cn(
                        "inline-flex items-center gap-3 px-4 py-2 rounded-lg border border-white/5 bg-white/[0.02]",
                        size === "wide" && "mt-4"
                    )}>
                        <span className={cn("text-2xl font-bold", colors.text)}>{module.stats.value}</span>
                        <span className="text-sm text-white/40">{module.stats.label}</span>
                    </div>
                </div>

                {/* Features List */}
                <div className={cn(
                    "mt-6 space-y-2",
                    size === "wide" && "md:mt-0 md:w-80"
                )}>
                    {module.features.map((feature, idx) => (
                        <div
                            key={idx}
                            className="flex items-center gap-3 text-sm text-white/60 group-hover:text-white/80 transition-colors"
                        >
                            <div className={cn(
                                "w-5 h-5 rounded-full flex items-center justify-center shrink-0",
                                colors.bg
                            )}>
                                <Check className={cn("w-3 h-3", colors.text)} />
                            </div>
                            <span>{feature}</span>
                            {module.secure && idx >= 1 && (
                                <Lock className="w-3 h-3 text-emerald-400/50 ml-auto" />
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Secure Badge */}
            {module.secure && (
                <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                    <Shield className="w-3 h-3 text-emerald-400" />
                    <span className="text-xs text-emerald-400 font-medium">Sécurisé</span>
                </div>
            )}
        </motion.div>
    )
}
