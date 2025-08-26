import Image from "next/image";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "400" });

type LinkItem = {
  label: string;
  href: string;
  icon: string;
  alt: string;
};

const links: LinkItem[] = [
  { label: "Website", href: "https://angrywhales.io", icon: "/aw-logo-round.jpg", alt: "Angry Whales" },
  { label: "Discord", href: "https://discord.gg/TxE38V4BpY", icon: "/discord.jpg", alt: "Discord" },
  { label: "X (Official)", href: "https://x.com/angrywhales__", icon: "/x-logo.jpg", alt: "X" },
  { label: "Layion (Founder)", href: "https://x.com/Gems_Finder22", icon: "/founder.jpg", alt: "Layion" },
];

export default function LinksPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[radial-gradient(ellipse_at_center,theme(colors.sky.100),theme(colors.sky.300)_45%,theme(colors.sky.500)_100%)] text-gray-900">
      <div className="w-full max-w-md mx-auto px-6 py-10 flex flex-col items-center">

        {/* Bloc logo + légende superposée */}
        <div className="relative w-[260px]">
          <Image
            src="/aw-logo-yellow.png"
            alt="Angry Whales"
            width={400}
            height={200}
            className="h-auto w-auto object-contain select-none pointer-events-none"
            priority
          />

          {/* Légende superposée, collée sous le motmark */}
          <p
            className={`${playfair.className} absolute left-1/2 -translate-x-1/2 bottom-[-10px] text-black text-sm text-center leading-tight tracking-wide`}
          >
            Angry Whales by Layion.<br />
            launching soon on Abstract.
          </p>
        </div>

        {/* Espace sous le bloc pour ne pas que la légende chevauche les boutons */}
        <div className="mt-8 w-full space-y-4">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-2xl bg-white/90 backdrop-blur border border-white/60 px-4 py-3 shadow hover:bg-yellow-100 transition"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full overflow-hidden border border-gray-300 bg-white flex items-center justify-center">
                  <Image
                    src={l.icon}
                    alt={l.alt}
                    width={40}
                    height={40}
                    className="h-10 w-10 object-contain"
                  />
                </div>
                <span className="font-semibold">{l.label}</span>
              </div>

              {/* Icône "ouvrir dans un nouvel onglet" */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-gray-500">
                <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z" />
                <path d="M5 5h6v2H7v10h10v-4h2v6H5z" />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
