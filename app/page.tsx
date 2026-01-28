// LP Minha IA — Página de Venda Direta (Opção 1)
// V0 Free Safe Mode • Sem SSR • Pixel somente via layout
// by TetelPontocom

"use client";

import React from "react";

const CHECKOUT_URL = "https://pay.kiwify.com.br/Dbq6GHv";
const WHATSAPP_URL =
  "https://wa.me/5582999176900?text=Oi%20👋%20Vim%20pela%20página%20da%20Minha%20IA.%0A%0AGostei%20da%20proposta,%20mas%20queria%20tirar%20uma%20dúvida%20antes%20de%20decidir.";

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      {/* HERO */}
      <section className="bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-800 py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Video */}
            <div className="flex justify-center">
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
                    <source
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/minhaia-ponte-NElvAf2sdZKT7RuwxdRC3AwwWTH1hZ.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
            </div>

            {/* Copy */}
            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
                Antes de decidir qualquer coisa, respira um pouco.
              </h1>
              <p className="text-zinc-300 mb-5 max-w-2xl mx-auto md:mx-0">
                A Minha IA foi criada para te ajudar a pensar com mais clareza,
                organizar ideias e tomar decisões melhores — sem pressão, sem
                confusão e sem precisar entender de tecnologia.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-start justify-center">
                <a
                  href={CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-6 py-3 rounded-lg shadow text-center"
                >
                  Ativar Minha IA agora por R$27
                </a>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-zinc-700 hover:border-zinc-500 text-white font-semibold px-6 py-3 rounded-lg text-center"
                >
                  Prefiro tirar uma dúvida antes
                </a>
              </div>

              <p className="mt-3 text-xs text-zinc-400">
                Pagamento único • Acesso imediato • Garantia de 7 dias
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PARA QUEM É */}
      <section className="py-14 bg-zinc-900">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Para quem a Minha IA faz sentido?</h2>
          <p className="text-zinc-300 max-w-3xl mx-auto">
            Para quem sente que a tecnologia deveria ajudar, mas só confunde.
            Para quem quer usar IA no dia a dia sem fórmulas prontas, para
            organizar ideias, destravar decisões e ganhar clareza.
          </p>
          <p className="mt-4 text-zinc-400">
            Não é sobre ganhar dinheiro com IA. É sobre pensar melhor com IA.
          </p>
        </div>
      </section>

      {/* O QUE VOCÊ RECEBE */}
      <section className="py-14">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-6">O que você recebe ao ativar a Minha IA</h2>
          <ul className="grid md:grid-cols-2 gap-6 text-left max-w-4xl mx-auto">
            <li className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">Estrutura simples para conversar com IA de forma produtiva</li>
            <li className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">Orientação prática para aplicar IA no seu contexto real</li>
            <li className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">Apoio para decisões, organização e planejamento</li>
            <li className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">Método acessível, sem termos técnicos desnecessários</li>
          </ul>
        </div>
      </section>

      {/* AGENTES */}
      <section className="py-14 bg-zinc-900">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Você não começa do zero</h2>
          <p className="text-zinc-300 mb-6 max-w-3xl mx-auto">
            Ao acessar a Minha IA, você já encontra alguns agentes de apoio
            configurados para situações comuns do dia a dia.
          </p>
          <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto text-left">
            <div className="bg-zinc-800 p-5 rounded-lg">🧠 Organização de ideias e pensamentos</div>
            <div className="bg-zinc-800 p-5 rounded-lg">🧭 Apoio para decisões e clareza de caminho</div>
            <div className="bg-zinc-800 p-5 rounded-lg">🛠️ Destravamento de tarefas e próximos passos</div>
          </div>
          <p className="mt-6 text-zinc-400 max-w-3xl mx-auto">
            Esses agentes não te substituem. Eles te acompanham e ajudam a pensar
            melhor.
          </p>
        </div>
      </section>

      {/* VALOR */}
      <section className="py-14">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Por que custa apenas R$27?</h2>
          <p className="text-zinc-300 mb-4">
            Porque a Minha IA foi criada para ser porta de entrada, não pressão.
          </p>
          <p className="text-zinc-300">
            Se fizer sentido para você, vai ser muito bom te ter aqui com a gente.
            <br />
            E se ainda não for o seu momento, tudo bem também.
            <br />
            A Minha IA vai continuar aqui, pronta para quando fizer sentido para
            você, estar aqui com a gente.
          </p>
        </div>
      </section>

      {/* GARANTIA */}
      <section className="py-14 bg-green-900/20 border-t border-b border-green-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="font-semibold mb-2">Teste sem risco por 7 dias</h3>
          <p className="text-sm text-green-200">
            Se não fizer sentido para você, devolvemos 100% do valor.
          </p>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-16 text-center">
        <h2 className="text-2xl font-bold mb-6">Comece com clareza</h2>
        <a
          href={CHECKOUT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-4 rounded-lg shadow"
        >
          Ativar Minha IA agora por R$27
        </a>
        <div className="mt-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-zinc-300"
          >
            Prefiro conversar antes de decidir
          </a>
        </div>
      </section>

      <footer className="py-8 text-center text-sm text-zinc-500">
        Minha IA — by TetelPontocom
      </footer>
    </main>
  );
}
