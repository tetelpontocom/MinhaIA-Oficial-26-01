"use client"
import { useEffect, useState, useRef } from "react"

const KIWI_MAIN = "https://pay.kiwify.com.br/Dbq6GHv"
const WHATSAPP_COMM =
  "https://wa.me/5582999176900?text=Oi%20%F0%9F%91%8B%20Vim%20pela%20p%C3%A1gina%20da%20Minha%20IA.%0A%0AQueria%20entender%20melhor%20como%20funciona%20e%20se%20faz%20sentido%20para%20mim."



declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
    __fbq_patched?: boolean
  }
}

function trackFBEvent(eventName: string, payload?: Record<string, unknown>) {
  if (eventName === "Purchase") return
  try {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", eventName, payload || {})
    }
  } catch {}
}

export default function LandingPrincipal() {
  const [showExitPopup, setShowExitPopup] = useState(false)
  const [exitShownOnce, setExitShownOnce] = useState(false)
  const [isFromTetel, setIsFromTetel] = useState(false)

  const mainCtaRef = useRef<HTMLAnchorElement | null>(null)
  const afterHeroAnchorRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      trackFBEvent("ViewContent", {
        content_name: "LP Minha IA - Principal",
        content_category: "landing",
        currency: "BRL",
      })
    }, 800)

    const el = mainCtaRef.current
    let observer: IntersectionObserver | null = null
    if (el && typeof window !== "undefined" && "IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              trackFBEvent("ViewContent", {
                content_name: "CTA Visivel - Minha IA Principal",
              })
            }
          })
        },
        { threshold: 0.3 },
      )
      observer.observe(el)
    }

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !exitShownOnce) {
        setShowExitPopup(true)
        setExitShownOnce(true)
        trackFBEvent("Lead", { reason: "exit_intent_popup" })
      }
    }

    document.addEventListener("mouseout", handleMouseLeave)

    return () => {
      clearTimeout(timer)
      document.removeEventListener("mouseout", handleMouseLeave)
      if (observer && el) observer.unobserve(el)
    }
  }, [exitShownOnce])

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search)
      const origem = params.get("origem")?.toLowerCase() ?? null
      const ref = document.referrer?.toLowerCase() ?? ""

      if (origem === "tetelpontocom" || ref.includes("tetelpontocom.tetel.online")) {
        sessionStorage.setItem("tetel_origem", "tetelpontocom")
        setIsFromTetel(true)
        return
      }

      const saved = sessionStorage.getItem("tetel_origem")
      if (saved === "tetelpontocom") setIsFromTetel(true)
    } catch {}
  }, [])

  const handleBuy = (value: number, label?: string, href: string = KIWI_MAIN) => {
    trackFBEvent("InitiateCheckout", {
      content_name: label || "Minha IA - Completa",
      content_ids: [href],
      value,
      currency: "BRL",
    })
    setTimeout(() => window.open(href, "_blank"), 200)
  }

  const scrollAfterHero = () => {
    try {
      afterHeroAnchorRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
      trackFBEvent("ViewContent", { content_name: "Scroll - Apos HERO (ponte)" })
    } catch {}
  }

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* HERO */}
      <section className="bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-800 py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Video do Avatar */}
            <div className="order-1 md:order-1 flex justify-center">
              <div className="rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 shadow w-full max-w-xs">
                <div className="relative aspect-[9/16] bg-zinc-900">
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    playsInline
                    loop
                    preload="auto"
                    controls
                  >
                    <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/minhaia-ponte-NElvAf2sdZKT7RuwxdRC3AwwWTH1hZ.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>

            {/* Texto */}
            <div className="order-2 md:order-2 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
                Antes de decidir qualquer coisa, respira um pouco.
              </h1>

              <p className="text-zinc-300 mb-5 max-w-2xl mx-auto md:mx-0">
                Essa pagina existe para te mostrar, com calma, o que e a Minha IA — e se ela realmente faz sentido para o
                seu momento.
              </p>

              <div className="bg-zinc-950/40 border border-zinc-800 rounded-2xl p-5 mb-5">
                <ul className="text-zinc-200 text-sm md:text-[15px] space-y-2">
                  <li>Voce nao precisa saber usar IA.</li>
                  <li>Voce nao precisa decidir nada agora.</li>
                  <li>Voce nao precisa mudar sua rotina hoje.</li>
                  <li>Voce nao esta atrasado.</li>
                </ul>
              </div>

              <p className="text-zinc-300 mb-6">
                A partir daqui, eu te explico como a Minha IA funciona — de forma pratica e sem pressao.
              </p>

              <button
                onClick={scrollAfterHero}
                className="inline-flex items-center justify-center rounded-lg border border-zinc-700 bg-zinc-900/60 hover:bg-zinc-900 px-5 py-3 text-sm font-semibold text-zinc-100"
              >
                Entender como funciona
              </button>

              <div className="mt-3 text-xs text-zinc-500">
                Sem promessas - Sem pressao - Voce segue no seu ritmo
              </div>
            </div>
          </div>
        </div>
      </section>

      <div ref={afterHeroAnchorRef} />

      {/* ANTES / DEPOIS */}
      <section className="py-14">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-8">
          <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
            <h3 className="text-xl font-semibold text-red-400 mb-3">Antes da Minha IA</h3>
            <ul className="text-zinc-300 space-y-2">
              <li>Confusao para usar o ChatGPT</li>
              <li>Ideias soltas que nao saem do papel</li>
              <li>Falta de organizacao e constancia</li>
              <li>Sensacao de estar sempre atrasado</li>
            </ul>
          </div>

          <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
            <h3 className="text-xl font-semibold text-green-400 mb-3">Depois da Minha IA</h3>
            <ul className="text-zinc-300 space-y-2">
              <li>Clareza sobre o que fazer</li>
              <li>Apoio diario para pensar e decidir</li>
              <li>Rotina mais organizada</li>
              <li>Uso pratico da IA no dia a dia</li>
            </ul>
          </div>
        </div>
      </section>

      {/* O QUE E */}
      <section className="py-14 bg-zinc-900">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">O que e a Minha IA?</h3>
          <p className="text-zinc-300 max-w-3xl mx-auto">
            A Minha IA e um sistema de apoio continuo. Ela conversa com voce, organiza ideias, sugere caminhos e te
            acompanha nas decisoes do dia a dia.
          </p>
        </div>
      </section>

      {/* GARANTIA */}
      <section className="py-14">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-green-900/20 border border-green-700 text-green-200 p-6 rounded-lg">
            <h4 className="font-semibold mb-2">Teste sem risco</h4>
            <p className="text-sm">
              Voce tem 7 dias para testar a Minha IA. Se nao fizer sentido para voce, devolvemos 100% do valor.
            </p>
          </div>

          <div className="mt-8">
            <a
              ref={mainCtaRef}
              onClick={(e) => {
                e.preventDefault()
                handleBuy(27, "Minha IA - Rodape")
              }}
              href={KIWI_MAIN}
              className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-6 py-3 rounded-lg shadow"
            >
              Quero comecar agora por R$27
            </a>

            <div className="mt-3">
              <a href="https://minhaiaessencial.tetel.online" className="text-sm text-zinc-300 underline">
                Prefiro comecar pela versao Essencial (R$19)
              </a>
            </div>

            <div className="mt-2 text-xs text-zinc-400">Pagamento seguro via Kiwify - 7 dias de garantia</div>
          </div>
        </div>
      </section>

      {/* EXIT INTENT */}
      {showExitPopup && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white text-black rounded-2xl p-6 max-w-md w-full mx-4">
            <h3 className="text-xl font-bold mb-2">Quer comecar de forma mais simples?</h3>
            <p className="text-sm mb-4">A versao Essencial custa apenas R$19 e ja resolve o basico.</p>
            <div className="flex gap-3">
              <button
                onClick={() => window.open("https://minhaiaessencial.tetel.online", "_blank")}
                className="bg-green-500 hover:bg-green-400 text-black font-semibold px-4 py-2 rounded-lg w-full text-sm"
              >
                Quero a Essencial
              </button>
              <button
                onClick={() => setShowExitPopup(false)}
                className="bg-zinc-200 hover:bg-zinc-300 px-4 py-2 rounded-lg w-full text-sm"
              >
                Agora nao
              </button>
            </div>
          </div>
        </div>
      )}

      {isFromTetel && (
        <section className="border-t border-zinc-800 bg-zinc-950 text-center py-8">
          <a
            href="https://tetelpontocom.tetel.online"
            className="inline-block bg-zinc-100 text-black px-6 py-3 rounded-lg font-semibold"
          >
            Voltar a TetelPontocom
          </a>
        </section>
      )}

      <footer className="py-8 text-center text-sm text-zinc-400">2025 Minha IA — by TetelPontocom</footer>

      {/* WhatsApp */}
      <a
        href={WHATSAPP_COMM}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-6 bottom-6 rounded-full w-14 h-14 flex items-center justify-center shadow-lg"
        style={{ backgroundColor: "#25D366", color: "white" }}
      >
        <span className="text-sm font-bold">Chat</span>
      </a>
    </div>
  )
}
