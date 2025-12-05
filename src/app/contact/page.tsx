import { Header } from "@/components/landing/Header"
import { Footer } from "@/components/landing/Footer"
import { DetailedContact } from "@/components/contact/DetailedContact"

// Section Transition Component
function SectionTransition({
    id,
    from = "#030303",
    to = "#0a1628",
    height = "120px"
}: {
    id: string
    from?: string
    to?: string
    height?: string
}) {
    const gradientId = `gradient-${id}`

    return (
        <div
            className="w-full relative pointer-events-none"
            style={{ height, marginTop: '-1px' }}
        >
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

export default function ContactPage() {
    return (
        <div className="flex min-h-screen flex-col bg-[#030303]">
            {/* Subtle gradient background */}
            <div
                className="fixed inset-0 pointer-events-none"
                style={{
                    background: `
                        radial-gradient(ellipse 80% 50% at 50% -10%, rgba(59, 130, 246, 0.08), transparent 50%),
                        radial-gradient(ellipse 60% 40% at 20% 60%, rgba(6, 182, 212, 0.05), transparent 50%),
                        radial-gradient(ellipse 50% 30% at 80% 80%, rgba(59, 130, 246, 0.05), transparent 50%)
                    `
                }}
            />

            <Header />
            <main className="flex-1 pt-20 relative">
                <DetailedContact />

                {/* Transition to Footer */}
                <SectionTransition id="contact-to-footer" from="#030303" to="#0a0e1a" height="100px" />
            </main>
            <Footer />
        </div>
    )
}
