import Image from "next/image";

const services = [
  {
    title: "Resin Tables",
    text: "Custom one-of-a-kind resin tables designed to become the centerpiece of any space.",
  },
  {
    title: "Calligraphy Art",
    text: "Arabic calligraphy artworks personalized with meaning, elegance, and artistic identity.",
  },
  {
    title: "Paintings & Wall Art",
    text: "Original paintings and wall pieces that bring depth, character, and warmth to interiors.",
  },
  {
    title: "Custom Décor Pieces",
    text: "Bespoke handmade décor pieces crafted to reflect your taste and elevate your space.",
  },
];

const process = [
  "Share Your Idea",
  "Design & Materials",
  "Craftsmanship",
  "Delivery & Installation",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7F2E8] text-[#111111]">
      <header className="sticky top-0 z-50 border-b border-[#C6A45D]/20 bg-[#F7F2E8]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center">
              <Image
                src="/images/lamasat-logo-black.png"
                alt="Lamasat Logo"
                width={64}
                height={64}
                className="h-16 w-auto object-contain"
                priority
              />
            </div>

            <div>
              <h1 className="font-serif text-2xl tracking-[0.22em]">
                LAMASAT
              </h1>
              <p className="text-xs tracking-[0.25em] text-[#A77D2F]">
                ART STUDIO · لمسات
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm md:flex">
            <a href="#about" className="transition hover:text-[#A77D2F]">
              About
            </a>
            <a href="#services" className="transition hover:text-[#A77D2F]">
              Services
            </a>
            <a href="#portfolio" className="transition hover:text-[#A77D2F]">
              Portfolio
            </a>
            <a href="#process" className="transition hover:text-[#A77D2F]">
              Process
            </a>
            <a href="#contact" className="transition hover:text-[#A77D2F]">
              Contact
            </a>
          </nav>

          <a
            href="#contact"
            className="hidden border border-[#A77D2F] px-5 py-3 text-sm text-[#A77D2F] transition hover:bg-[#A77D2F] hover:text-white md:inline-flex"
          >
            Request a Custom Piece
          </a>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:py-28">
        <div>
          <p className="mb-5 text-sm font-semibold tracking-[0.28em] text-[#A77D2F]">
            HANDMADE. CUSTOM. PREMIUM.
          </p>

          <h2 className="font-serif text-5xl leading-tight md:text-7xl">
            Artful Touches
            <br />
            for Timeless Spaces
          </h2>

          <p className="mt-5 text-xl text-[#A77D2F]">
            لمسات فنية تُحوّل المساحات
          </p>

          <p className="mt-7 max-w-xl text-lg leading-8 text-[#4B4035]">
            Custom resin tables, Arabic calligraphy, paintings, and handmade
            décor crafted to elevate homes and commercial spaces with a personal
            artistic signature.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#portfolio"
              className="bg-[#111111] px-7 py-4 text-sm text-white transition hover:bg-[#2A241F]"
            >
              View Our Work
            </a>
            <a
              href="#contact"
              className="border border-[#A77D2F] px-7 py-4 text-sm text-[#A77D2F] transition hover:bg-[#A77D2F] hover:text-white"
            >
              Get a Quote
            </a>
          </div>
        </div>

        <div className="relative min-h-[520px] overflow-hidden rounded-t-[180px] border border-[#C6A45D]/30 bg-[#1B1916] p-8 shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#C6A45D55,transparent_35%),linear-gradient(135deg,#1B1916,#3A2B1E)]" />

          <div className="relative flex h-full flex-col justify-end">
            <div className="mb-10 rounded-3xl border border-[#C6A45D]/30 bg-[#F7F2E8]/95 p-8 shadow-xl">
              <div className="mb-8 h-52 rounded-2xl bg-[linear-gradient(135deg,#5A3E2B,#111111_45%,#C6A45D_48%,#7B5733_55%,#1B1916)]" />
              <h3 className="font-serif text-3xl">
                Resin. Wood. Calligraphy.
              </h3>
              <p className="mt-3 leading-7 text-[#4B4035]">
                A visual identity inspired by handcrafted material, warm wood
                tones, black resin, and Arabic artistic heritage.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-y border-[#C6A45D]/20 bg-white/40">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2">
          <div className="min-h-[360px] rounded-3xl bg-[linear-gradient(135deg,#111111,#5A3E2B,#C6A45D)] p-8">
            <div className="h-full rounded-2xl border border-white/20 bg-black/20" />
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold tracking-[0.25em] text-[#A77D2F]">
              ABOUT LAMASAT
            </p>
            <h3 className="mt-4 font-serif text-4xl md:text-5xl">
              Handcrafted Art with Meaning
            </h3>
            <p className="mt-6 text-lg leading-8 text-[#4B4035]">
              Lamasat is a Lebanese art studio specializing in handcrafted resin
              tables, Arabic calligraphy, paintings, and bespoke décor. Every
              piece is crafted with passion and care, blending tradition with
              contemporary elegance.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-4">
              {["Handmade", "Custom", "Premium", "Artistic"].map((item) => (
                <div key={item} className="border-l border-[#C6A45D]/40 pl-4">
                  <p className="font-serif text-xl">{item}</p>
                  <p className="mt-1 text-sm text-[#7A6A58]">by nature</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center">
          <p className="text-sm font-semibold tracking-[0.25em] text-[#A77D2F]">
            WHAT WE DO
          </p>
          <h3 className="mt-3 font-serif text-5xl">Our Services</h3>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group border border-[#C6A45D]/25 bg-[#FFFDF8] p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-7 h-40 rounded-2xl bg-[linear-gradient(135deg,#111111,#5A3E2B,#C6A45D)]" />
              <h4 className="font-serif text-2xl">{service.title}</h4>
              <p className="mt-4 leading-7 text-[#4B4035]">{service.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="portfolio" className="bg-[#111111] px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-semibold tracking-[0.25em] text-[#C6A45D]">
              FEATURED WORK
            </p>
            <h3 className="mt-3 font-serif text-5xl">Portfolio</h3>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="h-72 rounded-2xl border border-[#C6A45D]/20 bg-[linear-gradient(135deg,#F7F2E8,#C6A45D,#5A3E2B,#111111)]"
              />
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center">
          <p className="text-sm font-semibold tracking-[0.25em] text-[#A77D2F]">
            OUR PROCESS
          </p>
          <h3 className="mt-3 font-serif text-5xl">
            From Concept to Creation
          </h3>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-4">
          {process.map((step, index) => (
            <div
              key={step}
              className="border border-[#C6A45D]/25 bg-white/50 p-8 text-center"
            >
              <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#111111] text-[#C6A45D]">
                {index + 1}
              </div>
              <h4 className="font-serif text-2xl">{step}</h4>
              <p className="mt-4 leading-7 text-[#4B4035]">
                Every project is handled with care, clarity, and artistic
                attention to detail.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-[#EDE2CF] px-6 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold tracking-[0.25em] text-[#A77D2F]">
              START YOUR CUSTOM PIECE
            </p>
            <h3 className="mt-3 font-serif text-5xl">
              Have a project in mind?
            </h3>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#4B4035]">
              Share your idea, preferred size, material, and inspiration. We
              will help turn it into a unique handmade piece for your space.
            </p>
          </div>

          <div className="rounded-3xl bg-[#111111] p-8 text-white">
            <h4 className="font-serif text-3xl">
              Request a Free Consultation
            </h4>
            <p className="mt-4 text-white/70">
              Contact Lamasat to discuss resin tables, calligraphy, paintings,
              and custom décor projects.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://wa.me/96100000000"
                className="bg-[#C6A45D] px-6 py-4 text-sm font-semibold text-[#111111]"
              >
                Chat on WhatsApp
              </a>
              <a
                href="mailto:hello@lamasat.studio"
                className="border border-[#C6A45D] px-6 py-4 text-sm text-[#C6A45D]"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#111111] px-6 py-10 text-white">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center">
              <Image
                src="/images/lamasat-logo-black.png"
                alt="Lamasat Logo"
                width={48}
                height={48}
                className="h-12 w-auto object-contain invert"
              />
            </div>

            <div>
              <p className="font-serif text-3xl tracking-[0.2em] text-[#C6A45D]">
                LAMASAT
              </p>
              <p className="mt-2 text-sm text-white/60">
                ART STUDIO · لمسات
              </p>
            </div>
          </div>

          <p className="text-sm text-white/50">
            © 2026 Lamasat Art Studio. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}