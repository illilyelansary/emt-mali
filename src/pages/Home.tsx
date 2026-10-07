import { FormEvent, useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Award,
  Building2,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Droplets,
  Globe2,
  HeartPulse,
  MapPin,
  Menu,
  PackageCheck,
  PawPrint,
  Phone,
  School,
  Send,
  ShieldCheck,
  Sprout,
  Warehouse,
  Waves,
  X,
} from "lucide-react";
import { COMPANY_INFO, FINANCIAL_PARTNERS, PARTNER_GROUPS, PARTNER_LOGOS, REALIZATION_SLIDES, REGIONS, SERVICES } from "../const";

const iconMap = {
  Droplets,
  Sprout,
  School,
  HeartPulse,
  Waves,
  PawPrint,
  Warehouse,
  PackageCheck,
};

const toneMap: Record<string, { icon: string; border: string; bg: string; text: string; badge: string }> = {
  cyan: { icon: "text-cyan-700", border: "border-cyan-200", bg: "bg-cyan-50", text: "text-cyan-800", badge: "bg-cyan-100 text-cyan-800" },
  emerald: { icon: "text-emerald-700", border: "border-emerald-200", bg: "bg-emerald-50", text: "text-emerald-800", badge: "bg-emerald-100 text-emerald-800" },
  amber: { icon: "text-amber-700", border: "border-amber-200", bg: "bg-amber-50", text: "text-amber-800", badge: "bg-amber-100 text-amber-800" },
  rose: { icon: "text-rose-700", border: "border-rose-200", bg: "bg-rose-50", text: "text-rose-800", badge: "bg-rose-100 text-rose-800" },
  blue: { icon: "text-blue-700", border: "border-blue-200", bg: "bg-blue-50", text: "text-blue-800", badge: "bg-blue-100 text-blue-800" },
  orange: { icon: "text-orange-700", border: "border-orange-200", bg: "bg-orange-50", text: "text-orange-800", badge: "bg-orange-100 text-orange-800" },
  violet: { icon: "text-violet-700", border: "border-violet-200", bg: "bg-violet-50", text: "text-violet-800", badge: "bg-violet-100 text-violet-800" },
  indigo: { icon: "text-indigo-700", border: "border-indigo-200", bg: "bg-indigo-50", text: "text-indigo-800", badge: "bg-indigo-100 text-indigo-800" },
};

const navItems = [
  ["#accueil", "Accueil"],
  ["#expertises", "Expertises"],
  ["#realisations", "Réalisations"],
  ["#references", "Expérience"],
  ["#zones", "Zones"],
  ["#partenaires", "Partenaires"],
  ["#a-propos", "À propos"],
  ["#contact", "Contact"],
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [slideIndex, setSlideIndex] = useState(0);

  const currentSlide = REALIZATION_SLIDES[slideIndex];
  const goToSlide = (direction: number) => {
    setSlideIndex((value) => (value + direction + REALIZATION_SLIDES.length) % REALIZATION_SLIDES.length);
  };

  useEffect(() => {
    const timer = window.setInterval(() => {
      setSlideIndex((value) => (value + 1) % REALIZATION_SLIDES.length);
    }, 6000);
    return () => window.clearInterval(timer);
  }, []);

  const handleContact = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Demande de contact — ${form.name}`);
    const body = encodeURIComponent(`Nom : ${form.name}\nEmail : ${form.email}\nTéléphone : ${form.phone}\n\nMessage :\n${form.message}`);
    window.location.href = `mailto:${COMPANY_INFO.headquarters.email}?subject=${subject}&body=${body}`;
    setFormSent(true);
  };

  const getIcon = (iconName: string, className = "h-6 w-6") => {
    const Icon = iconMap[iconName as keyof typeof iconMap] || Building2;
    return <Icon className={className} />;
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800">
      {/* Topbar d’information sobre et lumineuse */}
      <div className="border-b border-slate-200 bg-white text-xs text-slate-600">
        <div className="container flex min-h-10 flex-wrap items-center justify-between gap-3 py-2">
          <span className="inline-flex items-center gap-2 font-medium">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Entreprise Malienne de Travaux — Infrastructures, eau et aménagements au Mali
          </span>
          <div className="flex items-center gap-5">
            <a href={`tel:${COMPANY_INFO.headquarters.phones[0].replace(/\s/g, "")}`} className="inline-flex items-center gap-1.5 font-semibold text-slate-700 transition hover:text-blue-700">
              <Phone className="h-3.5 w-3.5 text-blue-600" />
              {COMPANY_INFO.headquarters.phones[0]}
            </a>
            <span className="hidden text-slate-300 sm:inline">|</span>
            <span className="hidden font-medium text-slate-500 sm:inline">Tombouctou & Bamako</span>
          </div>
        </div>
      </div>

      {/* En-tête clair et lisible */}
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-md shadow-xs">
        <div className="container flex h-[78px] items-center justify-between gap-6">
          <a href="#accueil" className="flex items-center gap-3.5" onClick={() => setMobileMenuOpen(false)}>
            <div className="grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-xl bg-white p-1.5 border border-slate-200 shadow-xs">
              <img src="/images/logo-emt.png" alt="Logo EMT SARL" className="h-full w-full object-contain" />
            </div>
            <div>
              <p className="text-lg font-black tracking-tight text-slate-900 leading-tight">
                EMT <span className="text-blue-600">SARL</span>
              </p>
              <p className="hidden text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500 sm:block">
                Entreprise Malienne des Travaux
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-semibold text-slate-600 lg:flex">
            {navItems.map(([href, label]) => (
              <a key={href} href={href} className="transition-colors hover:text-blue-600">
                {label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-bold text-white shadow-sm shadow-blue-600/20 transition hover:bg-blue-700 hover:shadow-md">
              Nous contacter <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <button type="button" className="rounded-xl border border-slate-200 p-2 text-slate-700 hover:bg-slate-100 lg:hidden" onClick={() => setMobileMenuOpen((value) => !value)} aria-label="Menu principal">
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="border-t border-slate-200 bg-white px-5 py-5 lg:hidden shadow-lg">
            <div className="container space-y-2">
              {navItems.map(([href, label]) => (
                <a key={href} href={href} onClick={() => setMobileMenuOpen(false)} className="block rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 hover:text-blue-700">
                  {label}
                </a>
              ))}
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="mt-3 block rounded-xl bg-blue-600 px-4 py-3 text-center text-sm font-bold text-white shadow-sm">
                Nous contacter
              </a>
            </div>
          </nav>
        )}
      </header>

      <main>
        {/* Hero lumineux avec le logo EMT en filigrane */}
        <section id="accueil" className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-blue-50/70 via-white to-slate-50">
          <div className="pointer-events-none absolute right-[-5%] top-1/2 hidden -translate-y-1/2 opacity-[0.08] lg:block">
            <img src="/images/logo-emt.png" alt="" aria-hidden="true" className="h-[620px] w-[620px] object-contain" />
          </div>

          <div className="container relative grid min-h-[640px] items-center py-20 lg:grid-cols-[1.1fr_.9fr] lg:gap-14">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-800 shadow-xs">
                <Award className="h-4 w-4 text-blue-600" /> Présent sur le terrain depuis 2015
              </div>
              <h1 className="text-4xl font-black leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                BTP, Forages hydrauliques & <span className="text-blue-600">Aménagements</span> au Mali.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                EMT SARL met son expertise technique au service des communautés, des institutions, des collectivités et des partenaires humanitaires et de développement dans <strong className="text-slate-900">toutes les régions du Mali</strong>, pour des infrastructures utiles, durables et adaptées aux réalités locales.
              </p>

              <div className="mt-6 flex max-w-2xl flex-wrap gap-2">
                {COMPANY_INFO.activities.map((activity) => (
                  <span key={activity} className="rounded-lg border border-slate-200 bg-white/80 px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-2xs">
                    {activity}
                  </span>
                ))}
              </div>

              <div className="mt-9 flex flex-wrap gap-3.5">
                <a href="#realisations" className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-md shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700">
                  Découvrir les réalisations <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#expertises" className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3.5 text-sm font-bold text-slate-700 shadow-xs transition hover:border-slate-400 hover:bg-slate-50">
                  Nos 8 domaines d'action <ChevronDown className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-12 grid max-w-xl grid-cols-2 gap-4 border-t border-slate-200 pt-7 sm:grid-cols-4">
                {[
                  [COMPANY_INFO.referenceCount, "références"],
                  ["Toutes", "les régions"],
                  [`${COMPANY_INFO.partnerCount}+`, "partenaires"],
                  [COMPANY_INFO.domainCount, "domaines"],
                ].map(([value, label]) => (
                  <div key={label}>
                    <p className="text-3xl font-black text-slate-900">{value}</p>
                    <p className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-500">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="ml-auto max-w-md rounded-3xl border border-slate-200 bg-white p-7 shadow-xl shadow-slate-200/50">
                <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-widest text-blue-600">Identité institutionnelle</p>
                    <p className="mt-1 text-2xl font-black text-slate-900">EMT en un coup d'œil</p>
                  </div>
                  <ShieldCheck className="h-9 w-9 text-blue-600" />
                </div>
                <div className="space-y-4 py-6 text-sm leading-7 text-slate-600">
                  <p className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-600" />
                    <span><strong>Ancrage solide et déploiement national</strong> à Tombouctou, Bamako et dans toutes les régions du pays.</span>
                  </p>
                  <p className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-600" />
                    <span><strong>Parc matériel et équipes qualifiées</strong> pour le forage, le génie civil et les aménagements.</span>
                  </p>
                  <p className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-600" />
                    <span><strong>Plus de 25 partenaires</strong> institutionnels, agences des Nations Unies, ONG et collectivités.</span>
                  </p>
                </div>
                <div className="rounded-2xl bg-blue-50/80 border border-blue-100 p-4 text-xs font-semibold text-blue-900">
                  « {COMPANY_INFO.officialSlogan} »
                  <br />
                  <span className="font-normal text-blue-700">Des infrastructures pensées pour durer au service des populations.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8 Domaines avec cartes claires et aérées */}
        <section id="expertises" className="bg-white py-24 border-b border-slate-200">
          <div className="container">
            <div className="flex flex-col justify-between gap-5 border-b border-slate-100 pb-8 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-blue-600">Une offre pluridisciplinaire</p>
                <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                  8 domaines pour répondre aux besoins essentiels.
                </h2>
              </div>
              <p className="max-w-md text-sm leading-7 text-slate-600">
                EMT mobilise ses ressources humaines et techniques pour concevoir, réaliser et équiper des projets concrets et durables.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {SERVICES.map((service) => {
                const tone = toneMap[service.accent] || toneMap.blue;
                return (
                  <article key={service.id} className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xs transition duration-300 hover:-translate-y-1.5 hover:border-blue-400 hover:shadow-xl">
                    <div>
                      <div className="relative h-48 overflow-hidden bg-slate-100">
                        <img src={service.imageUrl} alt={service.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                        <div className={`absolute left-3.5 top-3.5 grid h-10 w-10 place-items-center rounded-xl bg-white/95 backdrop-blur-xs shadow-md ${tone.icon}`}>
                          {getIcon(service.iconName, "h-5 w-5")}
                        </div>
                      </div>
                      <div className="p-6">
                        <p className={`text-[11px] font-extrabold uppercase tracking-wider ${tone.text}`}>{service.kicker}</p>
                        <h3 className="mt-2 text-lg font-extrabold leading-snug text-slate-900">{service.title}</h3>
                        <p className="mt-3 text-sm leading-relaxed text-slate-600">{service.description}</p>
                      </div>
                    </div>
                    <div className="border-t border-slate-100 px-6 py-4 bg-slate-50/50">
                      <a href="#realisations" className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 transition hover:text-blue-800">
                        Voir les réalisations <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section Diaporama Réalisations terrain sur fond clair moderne */}
        <section id="realisations" className="border-b border-slate-200 bg-slate-50/80 py-24">
          <div className="container">
            <div className="flex flex-col justify-between gap-6 border-b border-slate-200 pb-8 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-blue-600">Réalisations terrain</p>
                <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                  Des chantiers concrets racontés par les équipes EMT.
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  Sélection photographique documentée : forages, pompage solaire, bâtiments scolaires et sanitaires, surcreusement de chenaux et aménagements pastoraux.
                </p>
              </div>
              <a href="#contact" className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-bold text-slate-700 shadow-xs transition hover:bg-slate-50 hover:text-blue-700">
                Échanger sur un projet <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-xl shadow-slate-200/40">
              <div className="grid lg:grid-cols-[1.18fr_.82fr]">
                <div className="relative min-h-[420px] overflow-hidden bg-slate-950 sm:min-h-[500px]">
                  <img key={currentSlide.id} src={currentSlide.imageUrl} alt={currentSlide.title} className="absolute inset-0 h-full w-full object-cover transition duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9">
                    <span className="inline-flex rounded-full bg-white/95 backdrop-blur-xs px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-slate-900 shadow-md">
                      {currentSlide.label}
                    </span>
                    <p className="mt-2.5 text-xs font-bold uppercase tracking-wider text-blue-200">{currentSlide.domain}</p>
                    <h3 className="mt-1.5 max-w-xl text-2xl font-black text-white sm:text-3xl">{currentSlide.title}</h3>
                  </div>
                  <div className="absolute right-5 top-5 flex gap-2">
                    <button type="button" onClick={() => goToSlide(-1)} aria-label="Précédent" className="grid h-11 w-11 place-items-center rounded-full bg-white/95 text-slate-900 shadow-lg backdrop-blur transition hover:bg-white hover:text-blue-600">
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button type="button" onClick={() => goToSlide(1)} aria-label="Suivant" className="grid h-11 w-11 place-items-center rounded-full bg-white/95 text-slate-900 shadow-lg backdrop-blur transition hover:bg-white hover:text-blue-600">
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                <div className="flex flex-col justify-between p-6 sm:p-10">
                  <div>
                    <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-4">
                      <span className="text-xs font-extrabold uppercase tracking-widest text-slate-400">
                        Diapositive {slideIndex + 1} sur {REALIZATION_SLIDES.length}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700">
                        <MapPin className="h-3.5 w-3.5" /> {currentSlide.location}
                      </span>
                    </div>

                    <p className="mt-6 text-lg leading-8 text-slate-700">{currentSlide.description}</p>

                    <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                      <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                        <p className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">Domaine d'intervention</p>
                        <p className="mt-1 text-sm font-bold text-slate-900">{currentSlide.domain}</p>
                      </div>
                      <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                        <p className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">Méthode de déploiement</p>
                        <p className="mt-1 text-sm font-bold text-slate-900">Étude, travaux, équipement et remise d'ouvrage</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-10">
                    <div className="flex flex-wrap gap-2" role="tablist" aria-label="Choisir une photo">
                      {REALIZATION_SLIDES.map((slide, index) => (
                        <button
                          key={slide.id}
                          type="button"
                          role="tab"
                          aria-selected={index === slideIndex}
                          aria-label={`Photo ${index + 1}: ${slide.title}`}
                          onClick={() => setSlideIndex(index)}
                          className={`h-2.5 rounded-full transition-all ${index === slideIndex ? "w-10 bg-blue-600" : "w-2.5 bg-slate-300 hover:bg-slate-400"}`}
                        />
                      ))}
                    </div>
                    <p className="mt-4 text-xs text-slate-500">
                      Toutes les photographies de ce diaporama proviennent directement des chantiers réalisés par EMT SARL au Mali.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
                <p className="text-3xl font-black text-blue-600">{REALIZATION_SLIDES.filter((slide) => slide.domain.includes("Hydraulique")).length}</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-500">séquences hydrauliques & solaires</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
                <p className="text-3xl font-black text-slate-900">3</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-500">infrastructures scolaires & santé</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
                <p className="text-3xl font-black text-emerald-600">100%</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-500">photos authentiques de chantiers</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section Expérience générale : un paragraphe sobre et impactant */}
        <section id="references" className="bg-white py-24 border-b border-slate-200">
          <div className="container">
            <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200/90 bg-gradient-to-br from-white via-slate-50 to-blue-50/40 p-8 sm:p-14 shadow-lg shadow-slate-200/50">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-blue-700">
                <Award className="h-4 w-4 text-blue-600" /> Expérience & Références
              </div>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                Une expérience solide et éprouvée sur le terrain.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg">
                Depuis sa création en 2015, l’Entreprise Malienne des Travaux (EMT SARL) s’est forgée une solide expérience dans la conduite et la livraison de chantiers d’envergure à travers l'ensemble du territoire malien. Qu’il s’agisse de forages hydrauliques, de systèmes d’adduction d’eau potable à énergie solaire, de constructions et réhabilitations de bâtiments scolaires ou de centres de santé, de travaux d’aménagements hydro-agricoles ou encore d’infrastructures pastorales, l’entreprise mobilise l’ensemble de ses compétences techniques, de ses équipements adaptés et de ses équipes de proximité pour garantir des réalisations pérennes, conformes aux exigences des communautés locales et des bailleurs de fonds.
              </p>
            </div>
          </div>
        </section>

        {/* Zones d’intervention */}
        <section id="zones" className="bg-slate-50/60 py-24 border-b border-slate-200">
          <div className="container">
            <div className="max-w-2xl">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-blue-600">Un maillage territorial national</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                Une présence active dans toutes les régions du Mali.
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Grâce à son siège historique à Tombouctou, sa représentation stratégique à Bamako et la flexibilité de ses équipes mobiles, EMT SARL intervient efficacement sur l'ensemble du territoire national malien.
              </p>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {REGIONS.map((region) => {
                const tone = toneMap[region.tone] || toneMap.blue;
                return (
                  <article key={region.name} className="flex items-center gap-3.5 rounded-2xl border border-slate-200/90 bg-white p-4 shadow-xs transition duration-200 hover:-translate-y-0.5 hover:border-blue-400 hover:shadow-sm">
                    <div className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${tone.bg} ${tone.icon}`}>
                      <Globe2 className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <span className="block text-[10px] font-extrabold uppercase tracking-wider text-slate-400">Zone</span>
                      <h3 className="text-base font-extrabold text-slate-900 truncate">{region.name}</h3>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Partenaires */}
        <section id="partenaires" className="bg-white py-24 border-b border-slate-200">
          <div className="container">
            <div className="flex flex-col justify-between gap-5 border-b border-slate-100 pb-8 md:flex-row md:items-end">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-blue-600">Un réseau d'organisations partenaires</p>
                <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                  Plus de 25 partenaires de référence.
                </h2>
              </div>
              <p className="max-w-lg text-sm leading-7 text-slate-600">
                Organisations internationales, agences des Nations Unies, ONG humanitaires, ministères, projets sectoriels et collectivités territoriales.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_.95fr]">
              <article className="rounded-3xl border border-slate-200 bg-slate-50/70 p-6 shadow-sm sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-widest text-blue-600">Partenaires de mise en œuvre</p>
                    <h3 className="mt-2 text-2xl font-black text-slate-900">Un réseau institutionnel engagé</h3>
                  </div>
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white text-blue-700 shadow-sm"><ShieldCheck className="h-5 w-5" /></div>
                </div>
                <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {PARTNER_LOGOS.organisations.map((logo) => (
                    <div key={logo.name} className="flex min-h-24 flex-col items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white p-3 text-center shadow-2xs">
                      <img src={logo.src} alt={`Logo ${logo.name}`} className="h-10 w-16 object-contain" />
                      <span className="text-[10px] font-extrabold uppercase tracking-wide text-slate-600">{logo.name}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {PARTNER_GROUPS.flatMap((group) => group.partners).slice(0, 12).map((partner) => (
                    <span key={partner} className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 shadow-2xs">{partner}</span>
                  ))}
                </div>
              </article>

              <article className="rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-6 shadow-sm sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-widest text-blue-600">Bailleurs & partenaires financiers</p>
                    <h3 className="mt-2 text-2xl font-black text-slate-900">Des projets soutenus durablement</h3>
                  </div>
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white text-blue-700 shadow-sm"><Building2 className="h-5 w-5" /></div>
                </div>
                <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-5">
                  {PARTNER_LOGOS.bailleurs.map((logo) => (
                    <div key={logo.name} className="flex min-h-24 flex-col items-center justify-center gap-2 rounded-2xl border border-blue-100 bg-white p-3 text-center shadow-2xs">
                      <img src={logo.src} alt={`Logo ${logo.name}`} className="h-10 w-16 object-contain" />
                      <span className="text-[10px] font-extrabold uppercase tracking-wide text-slate-600">{logo.name}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {FINANCIAL_PARTNERS.slice(0, 9).map((partner) => (
                    <span key={partner} className="rounded-lg border border-blue-100 bg-white px-3 py-1.5 text-xs font-semibold text-blue-900 shadow-2xs">{partner}</span>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* À propos & Documentations */}
        <section id="a-propos" className="bg-slate-50/80 py-24 border-b border-slate-200">
          <div className="container grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
            <div className="overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-xl shadow-slate-200/40">
              <div className="relative h-[380px] sm:h-[480px] overflow-hidden bg-slate-900">
                <img src="/images/realisation-forage-mft-termine.jpeg" alt="Réalisation de forage EMT" className="h-full w-full object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <span className="inline-flex rounded-full bg-blue-600/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider">Sur le terrain</span>
                  <p className="mt-1 text-sm font-bold">Chantier d'adduction d'eau et forage technique au Mali</p>
                </div>
              </div>
              <div className="flex items-center justify-between border-t border-slate-100 bg-white px-6 py-4 text-xs">
                <span className="font-bold text-slate-700">Documents officiels vérifiés</span>
                <a href="/images/rc-emt-2.pdf" className="inline-flex items-center gap-1 font-bold text-blue-700 hover:text-blue-800">
                  Consulter la fiche institutionnelle <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-blue-600">L'entreprise</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                Un ancrage historique au cœur du territoire malien.
              </h2>
              <p className="mt-6 text-base leading-8 text-slate-600">
                Depuis 2015, l’Entreprise Malienne de Travaux répond aux appels d’offres et aux consultations pour des projets d’infrastructures de premier plan, avec des équipes techniques et des moyens adaptés aux contextes de toutes les régions du Mali.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {["Équipe technique qualifiée", "Matériels et ateliers mobiles", "Respect strict des délais", "Sécurité et rigueur d'exécution"].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-800 shadow-2xs">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border-l-4 border-blue-600 bg-white p-5 shadow-xs text-sm leading-7 text-slate-700">
                « {COMPANY_INFO.slogan} »
                <br />
                <span className="text-xs font-bold not-italic text-blue-700">— EMT SARL</span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact direct et clair */}
        <section id="contact" className="bg-white py-24">
          <div className="container grid gap-12 lg:grid-cols-[.85fr_1.15fr]">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-blue-600">Contact & devis</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                Parlons de votre prochain projet.
              </h2>
              <p className="mt-5 text-sm leading-7 text-slate-600">
                Nos équipes techniques basées à Tombouctou et Bamako sont à votre disposition pour analyser vos termes de référence, appels d'offres ou consultations.
              </p>

              <div className="mt-8 space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm">
                <a href={`tel:${COMPANY_INFO.headquarters.phones[0].replace(/\s/g, "")}`} className="flex items-center gap-3 font-semibold text-slate-800 hover:text-blue-700">
                  <Phone className="h-5 w-5 text-blue-600 shrink-0" />
                  {COMPANY_INFO.headquarters.phones[0]} / {COMPANY_INFO.headquarters.phones[1]}
                </a>
                <a href={`mailto:${COMPANY_INFO.headquarters.email}`} className="flex items-center gap-3 font-semibold text-slate-800 hover:text-blue-700">
                  <Send className="h-5 w-5 text-blue-600 shrink-0" />
                  {COMPANY_INFO.headquarters.email}
                </a>
                <a href={`mailto:${COMPANY_INFO.headquarters.recruitmentEmail}`} className="flex items-center gap-3 rounded-xl border border-blue-100 bg-blue-50/70 px-3 py-2.5 font-semibold text-blue-900 hover:border-blue-300 hover:bg-blue-50">
                  <Send className="h-5 w-5 text-blue-600 shrink-0" />
                  <span><span className="block text-[10px] font-extrabold uppercase tracking-wider text-blue-600">Postuler</span>{COMPANY_INFO.headquarters.recruitmentEmail}</span>
                </a>
                <div className="flex items-start gap-3 text-slate-600 pt-2 border-t border-slate-200">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                  <div>
                    <strong className="text-slate-800">Siège social :</strong> Tombouctou, {COMPANY_INFO.headquarters.address}
                    <br />
                    <strong className="text-slate-800">Représentation :</strong> Bamako, {COMPANY_INFO.representation.address}
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-lg">
              <h3 className="text-xl font-black text-slate-900">Envoyer un message à la direction</h3>
              {formSent ? (
                <div className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-center">
                  <CheckCircle2 className="mx-auto h-10 w-10 text-emerald-600" />
                  <p className="mt-3 font-bold text-slate-900">Votre client de messagerie va s’ouvrir.</p>
                  <p className="mt-2 text-sm text-slate-600">Si nécessaire, écrivez directement à {COMPANY_INFO.headquarters.email}.</p>
                </div>
              ) : (
                <form onSubmit={handleContact} className="mt-6 space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input
                      required
                      placeholder="Nom / Organisation *"
                      value={form.name}
                      onChange={(event) => setForm({ ...form, name: event.target.value })}
                      className="rounded-xl border border-slate-300 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-600 focus:bg-white"
                    />
                    <input
                      required
                      type="tel"
                      placeholder="Téléphone *"
                      value={form.phone}
                      onChange={(event) => setForm({ ...form, phone: event.target.value })}
                      className="rounded-xl border border-slate-300 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-600 focus:bg-white"
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Adresse email"
                    value={form.email}
                    onChange={(event) => setForm({ ...form, email: event.target.value })}
                    className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-600 focus:bg-white"
                  />
                  <textarea
                    required
                    rows={4}
                    placeholder="Précisez votre demande ou votre projet *"
                    value={form.message}
                    onChange={(event) => setForm({ ...form, message: event.target.value })}
                    className="w-full resize-none rounded-xl border border-slate-300 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-600 focus:bg-white"
                  />
                  <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-md shadow-blue-600/20 transition hover:bg-blue-700">
                    <Send className="h-4 w-4" /> Envoyer ma demande
                  </button>
                  <p className="text-center text-xs text-slate-500">
                    Ce formulaire prépare votre courriel à destination de la direction d’EMT SARL.
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* Pied de page clair, élégant et structuré */}
      <footer className="border-t border-slate-200 bg-slate-50 py-14 text-slate-600">
        <div className="container grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-lg bg-white p-1 border border-slate-200 shadow-2xs">
                <img src="/images/logo-emt.png" alt="Logo EMT SARL" className="h-full w-full object-contain" />
              </div>
              <div className="text-lg font-black text-slate-900">
                EMT <span className="text-blue-600">SARL</span>
              </div>
            </div>
            <p className="mt-4 text-xs leading-6 text-slate-500">
              {COMPANY_INFO.name}. Des ouvrages utiles, durables et proches des territoires maliens.
            </p>
          </div>

          <div>
            <p className="text-xs font-extrabold uppercase tracking-wider text-slate-900">Navigation</p>
            <div className="mt-4 grid gap-2.5 text-xs font-semibold text-slate-600">
              {navItems.map(([href, label]) => (
                <a key={href} href={href} className="transition hover:text-blue-700">
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-extrabold uppercase tracking-wider text-slate-900">Siège social</p>
            <p className="mt-4 text-xs leading-6 text-slate-500">
              {COMPANY_INFO.headquarters.address}
              <br />
              Tombouctou — Mali
            </p>
          </div>

          <div>
            <p className="text-xs font-extrabold uppercase tracking-wider text-slate-900">Contact direct</p>
            <p className="mt-4 text-xs leading-6 text-slate-500">
              {COMPANY_INFO.headquarters.phones[0]}
              <br />
              {COMPANY_INFO.headquarters.phones[1]}
              <br />
              {COMPANY_INFO.headquarters.email}
            </p>
          </div>
        </div>

        <div className="container mt-12 flex flex-col justify-between gap-3 border-t border-slate-200 pt-7 text-xs text-slate-500 sm:flex-row">
          <span>© {new Date().getFullYear()} EMT SARL. Tous droits réservés.</span>
          <span>{COMPANY_INFO.officialSlogan}</span>
        </div>
      </footer>
    </div>
  );
}
