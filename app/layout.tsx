import React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import { Suspense } from "react"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Minha IA — Base para usar IA com clareza",
  description:
    "Uma introdução segura e prática para você usar inteligência artificial com clareza, organização e autonomia — no seu ritmo.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/images/s-c3-admbolo-tetelpontocom.png",
        type: "image/png",
      },
    ],
    apple: "/images/s-c3-admbolo-tetelpontocom.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" type="image/png" href="/images/s-c3-admbolo-tetelpontocom.png" />
        <link rel="apple-touch-icon" href="/images/s-c3-admbolo-tetelpontocom.png" />

        {/* Facebook Pixel — bootstrap apenas (eventos ficam no page.tsx) */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1305167264321996');
          `}
        </Script>

        {/* Noscript padrão */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1305167264321996&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>

      <body className={`font-sans antialiased`}>
        <Suspense fallback={<div>Loading.</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
