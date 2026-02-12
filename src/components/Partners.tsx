import Image from "next/image";

const PARTNERS = [
  { name: "Woox", logo: "/logos/woox.svg" },
  { name: "Exodus", logo: "/logos/exodus.svg" },
  { name: "BitGo", logo: "/logos/bitgo.svg" },
  { name: "Ankr", logo: "/logos/ankr.svg" },
  { name: "MetaMask", logo: "/logos/metamask.svg" },
];

export default function Partners() {
  return (
    <div className="relative z-10 max-w-5xl mx-auto px-4">
      {/* This -mt-10 (negative margin top) pulls the bar into the hero section */}
      <div className="bg-white rounded-2xl shadow-xl py-8 px-6 flex flex-wrap justify-around items-center gap-8 -mt-12 md:-mt-16">
        {PARTNERS.map((partner) => (
          <div key={partner.name} className="grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
             {/* Replace with your actual logo paths */}
            <span className="font-bold text-xl text-gray-800 uppercase tracking-tighter">
                {partner.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}