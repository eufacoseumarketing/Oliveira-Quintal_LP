import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Oliveira Quintal Advocacia | Direito de Família e Sucessões · São Paulo",
  description:
    "Proteção patrimonial e jurídica com mais de 20 anos de experiência em Direito de Família e Sucessões em São Paulo.",
  openGraph: {
    title: "Oliveira Quintal Advocacia | Direito de Família e Sucessões",
    description:
      "Proteção patrimonial e jurídica com mais de 20 anos de experiência em Direito de Família e Sucessões em São Paulo.",
    url: "https://terezinhaquintal.adv.br",
    siteName: "Oliveira Quintal Advocacia",
    images: [
      {
        url: "https://terezinhaquintal.adv.br/og-image.png",
        width: 1200,
        height: 630,
        alt: "Oliveira Quintal Advocacia",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oliveira Quintal Advocacia | Direito de Família e Sucessões",
    description:
      "Proteção patrimonial e jurídica com mais de 20 anos de experiência em Direito de Família e Sucessões em São Paulo.",
    images: ["https://terezinhaquintal.adv.br/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <Script
          id="gtm-head"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-M866B8KK');`,
          }}
        />
      </head>
      <body className={`${cormorant.variable} ${montserrat.variable} font-sans antialiased`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M866B8KK"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
