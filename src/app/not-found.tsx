import Link from "next/link";

const backgroundIcons = [
  "/icons/multimeter.svg",
  "/icons/wires.svg",
  "/icons/bulb.svg",
  "/icons/socket.svg",
  "/icons/air-conditioner.svg",
  "/icons/cctv-camera.svg",
  "/icons/fire-extinguisher.svg",
];

const scatteredPositions: { left: number; top: number; icon: number }[] = [
  { left: 8, top: 10, icon: 0 },
  { left: 24, top: 20, icon: 5 },
  { left: 42, top: 8, icon: 2 },
  { left: 64, top: 16, icon: 6 },
  { left: 84, top: 12, icon: 4 },
  { left: 12, top: 48, icon: 3 },
  { left: 30, top: 66, icon: 1 },
  { left: 52, top: 58, icon: 0 },
  { left: 74, top: 46, icon: 5 },
  { left: 88, top: 70, icon: 2 },
  { left: 18, top: 84, icon: 6 },
  { left: 60, top: 86, icon: 4 },
];

const recoveryLinks = [
  { label: "Go Home", href: "/" },
  { label: "Our Services", href: "/#services" },
  { label: "Our Projects", href: "/#projects" },
];

export default function NotFound() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(240,124,33,0.22),_transparent_35%),radial-gradient(circle_at_bottom,_rgba(255,255,255,0.08),_transparent_30%)]" />
        {scatteredPositions.map((pos, i) => {
          const icon = backgroundIcons[pos.icon];
          return (
            <div
              key={i}
              className="absolute h-12 w-12 opacity-[0.10] md:h-16 md:w-16"
              style={{
                left: `${pos.left}%`,
                top: `${pos.top}%`,
                backgroundColor: "#F07C21",
                WebkitMaskImage: `url(${icon})`,
                WebkitMaskSize: "contain",
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
                maskImage: `url(${icon})`,
                maskSize: "contain",
                maskRepeat: "no-repeat",
                maskPosition: "center",
              }}
            />
          );
        })}
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-6xl items-center px-6 py-24">
        <div className="grid w-full gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <section>
            <div className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-[#F07C21]">
              Page Not Found
            </div>
            <p className="text-7xl font-semibold leading-none text-[#F07C21] md:text-9xl">
              404
            </p>
            <h1 className="mt-6 max-w-xl text-3xl font-semibold leading-tight text-white md:text-5xl">
              The page you&apos;re looking for isn&apos;t on this circuit.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/65 md:text-lg">
              The link may be outdated, the page may have moved, or the address may
              be incorrect. Use one of the routes below to get back to the main site.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {recoveryLinks.map((link, index) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={
                    index === 0
                      ? "inline-flex items-center justify-center rounded-full bg-[#F07C21] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:bg-[#d96d1b]"
                      : "inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/85 transition-colors duration-300 hover:border-[#F07C21] hover:text-[#F07C21]"
                  }
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </section>

          <aside className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm md:p-8">
            <div className="absolute inset-x-0 top-0 h-1 bg-[#F07C21]" />
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-white/40">
                  Recovery Panel
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-white">
                  Continue Browsing
                </h2>
              </div>
              <div className="rounded-full border border-[#F07C21]/30 bg-[#F07C21]/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-[#F07C21]">
                Online
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-[#0d0d0d] p-5">
                <p className="text-sm uppercase tracking-[0.2em] text-white/35">
                  Suggested Path
                </p>
                <p className="mt-3 text-xl font-medium text-white">
                  Return to the homepage and navigate from the main sections.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm uppercase tracking-[0.2em] text-white/35">
                    Services
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/65">
                    Explore electrical installations, safety systems, networking,
                    and power solutions.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm uppercase tracking-[0.2em] text-white/35">
                    Projects
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/65">
                    Review recent installations and completed work across Rwanda.
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
