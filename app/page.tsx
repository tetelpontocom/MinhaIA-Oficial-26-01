"use client"

import { useEffect, useState } from "react"

const KIWI_MAIN = "https://pay.kiwify.com.br/Dbq6GHv"
const ESSENCIAL_URL = "https://minhaiaessencial.tetel.online"
const WHATSAPP_COMM =
  "https://wa.me/5582999176900?text=Oi%20%F0%9F%91%8B%20Vim%20pela%20p%C3%A1gina%20da%20Minha%20IA.%0A%0AQueria%20entender%20melhor%20como%20funciona%20e%20se%20faz%20sentido%20para%20mim."

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
  }
}

function trackFB(eventName: string, payload?: Record<string, unknown>) {
  try {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", eventName, payload || {})
    }
  } catch {}
}

export default function LandingPrincipal() {
  const [isFromTetel, setIsFromTetel] = useState(false)

  // Baseline canônica: PageView + 1x ViewContent (e acabou)
  useEffect(() => {
    trackFB("PageView")

    const timer = setTimeout(() => {
      trackFB("ViewContent", {
        content_name: "LP Minha IA — Principal (Baseline)",
        content_category: "landing",
        currency: "BRL",
      })
    }, 800)

    return () => clearTimeout(timer)
  }, [])

  // Regra de retorno ao ecossistema (V0 Free Safe Mode)
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
                  <video className="w-full h-full object-cover" autoPlay muted playsInline loop preload="auto" controls>
                    <source
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/minhaia-ponte-NElvAf2sdZKT7RuwxdRC3AwwWTH1hZ.mp4"
                      type="video/mp4"
                    />
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
                Essa página existe para te mostrar, com calma, o que é a Minha IA — e se ela realmente faz sentido para o seu momento.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-start justify-center">
                <a
                  href={KIWI_MAIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-6 py-3 rounded-lg shadow text-center"
                >
                  Seguir para a ativação
                </a>

                <a
                  href={WHATSAPP_COMM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-zinc-700 hover:border-zinc-500 text-white font-semibold px-6 py-3 rounded-lg text-center"
                >
                  Tirar dúvida no WhatsApp
                </a>
              </div>

              {/* Caminho paralelo (sem chamar de downsell; sem preço; sem pressão) */}
              <div className="mt-4 text-sm text-zinc-300">
                <a href={ESSENCIAL_URL} target="_blank" rel="noopener noreferrer" className="underline">
                  Prefiro começar com calma (Essencial)
                </a>
              </div>

              <p className="mt-3 text-xs text-zinc-400">Pagamento seguro via Kiwify • 7 dias de garantia</p>
            </div>
          </div>
        </div>
      </section>

      {/* O QUE É */}
      <section className="py-14 bg-zinc-900">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">O que é a Minha IA?</h3>
          <p className="text-zinc-300 max-w-3xl mx-auto">
            A Minha IA é um sistema de apoio contínuo. Ela conversa com você, organiza ideias, sugere caminhos e te acompanha nas decisões do dia a dia.
          </p>
        </div>
      </section>

      {/* GARANTIA */}
      <section className="py-14">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-green-900/20 border border-green-700 text-green-200 p-6 rounded-lg">
            <h4 className="font-semibold mb-2">Teste sem risco</h4>
            <p className="text-sm">Você tem 7 dias para testar a Minha IA. Se não fizer sentido, devolvemos 100% do valor.</p>
          </div>
        </div>
      </section>

      {/* Retorno institucional */}
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

      {/* WhatsApp fixo */}
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
