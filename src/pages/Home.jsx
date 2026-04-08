import { useState } from 'react'
import { Link } from 'react-router-dom'

const WhyCard = ({ icon, title, body, delay, accent }) => (
  <div className={`fade-up fade-up-delay-${delay} group p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${accent}`}>
    <div className="text-3xl mb-5">{icon}</div>
    <h3 className="font-display text-xl font-medium text-bark mb-3">{title}</h3>
    <p className="font-body text-stone text-sm leading-relaxed">{body}</p>
  </div>
)

const StatBadge = ({ value, label }) => (
  <div className="text-center">
    <div className="font-display text-4xl font-medium text-walnut mb-1">{value}</div>
    <div className="font-body text-xs text-driftwood tracking-widest uppercase">{label}</div>
  </div>
)

const GALLERY_TABS = [
  {
    label: 'Onboarding',
    images: [
      { src: '/behav_tut.png', alt: 'Behavior tutorial' },
      { src: '/behav_survey_1.png', alt: 'Behavior survey' },
      { src: '/interest_tut.png', alt: 'Interest tutorial' },
      { src: '/interest_page.png', alt: 'Interest selection' },
    ],
  },
  {
    label: 'App',
    images: [
      { src: '/classes.png', alt: 'Classes' },
      { src: '/chat.png', alt: 'Chat' },
      { src: '/notifications.png', alt: 'Notifications' },
      { src: '/events.png', alt: 'Events' },
    ],
  },
]

const ALL_GALLERY_IMAGES = [
  { src: '/behav_tut.png', alt: 'Behavior tutorial' },
  { src: '/behav_survey_1.png', alt: 'Behavior survey' },
  { src: '/interest_tut.png', alt: 'Interest tutorial' },
  { src: '/interest_page.png', alt: 'Interest selection' },
  { src: '/classes.png', alt: 'Classes' },
  { src: '/chat.png', alt: 'Chat' },
  { src: '/notifications.png', alt: 'Notifications' },
  { src: '/events.png', alt: 'Events' },
]

function AppGallery() {
  const [activeTab, setActiveTab] = useState(0)
  const tabs = ['All', 'Onboarding', 'App']
  const images =
    activeTab === 0
      ? ALL_GALLERY_IMAGES
      : GALLERY_TABS[activeTab - 1].images

  return (
    <section className="py-24 bg-parchment">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block font-body text-xs text-sienna font-medium tracking-widest uppercase mb-4">Screenshots</span>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-bark mb-4">See it in action</h2>
          <p className="font-body text-stone text-lg max-w-xl mx-auto">
            A look inside the app, from first setup to daily campus life.
          </p>
        </div>

        {/* Tab bar */}
        <div className="flex justify-center gap-2 mb-10">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActiveTab(i)}
              className={`px-5 py-2 rounded-full font-body text-sm font-medium transition-all duration-200 ${
                activeTab === i
                  ? 'bg-bark text-cream shadow'
                  : 'bg-cream text-stone border border-sand hover:border-tan hover:text-walnut'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid — 2 columns */}
        <div className="grid grid-cols-2 gap-6">
          {images.map(({ src, alt }) => (
            <div key={src} className="rounded-2xl overflow-hidden border border-sand shadow-md bg-white flex items-center justify-center">
              <img src={src} alt={alt} className="w-full h-auto object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 bg-cream">
        {/* Warm radial bloom behind content */}
        <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute left-[-10%] top-[-10%] w-[600px] h-[600px] rounded-full bg-tan/10 blur-3xl" />
          <div className="absolute right-[-5%] bottom-[-10%] w-[500px] h-[500px] rounded-full bg-linen/60 blur-3xl" />
        </div>

        {/* Subtle top gradient */}
        <div aria-hidden className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-parchment/60 to-transparent pointer-events-none" />

        {/* Hero content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
          <div>
            {/* Eyebrow */}
            <div className="fade-up fade-up-delay-1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-tan/50 bg-tan/10 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-tan" />
              <span className="font-body text-xs text-walnut font-medium tracking-widest uppercase">University of Utah</span>
            </div>

            <h1 className="fade-up fade-up-delay-2 font-display text-5xl md:text-6xl lg:text-7xl font-medium text-bark leading-[1.08] tracking-tight mb-6">
              The Campus Social<br />
              Platform That<br />
              <em className="not-italic text-forest">Actually Connects</em><br />
              People.
            </h1>

            <p className="fade-up fade-up-delay-3 font-body text-stone text-lg leading-relaxed max-w-md mb-10">
              Every semester, many students share the same classes, events, and interests yet never meet. CommonGround closes that gap with one beautifully designed mobile app built for campus life.
            </p>

            <div className="fade-up fade-up-delay-4 flex flex-wrap items-center gap-4">
              <Link
                to="/download"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-bark text-cream font-body font-medium tracking-wide text-sm transition-all duration-200 hover:bg-walnut hover:shadow-lg hover:-translate-y-px"
              >
                Download the App
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </Link>
              <Link
                to="/features"
                className="inline-flex items-center gap-2 font-body text-sm font-medium text-driftwood hover:text-walnut transition-colors duration-200 group"
              >
                Explore features
                <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Hero visual — stats card */}
          <div className="fade-up fade-up-delay-3 hidden md:block">
            <div className="relative">
              {/* Main card */}
              <div className="rounded-3xl bg-linen border border-sand shadow-xl overflow-hidden">
                {/* Warm top stripe */}
                <div className="h-1.5 bg-gradient-to-r from-tan via-terracotta to-walnut" />
                <div className="p-10">
                  <div className="grid grid-cols-2 gap-8 mb-10">
                    <StatBadge value="Up to 10" label="Per Group Chat" />
                    <StatBadge value="Real" label="Campus Events" />
                    <StatBadge value="CAS" label="SSO Login" />
                    <StatBadge value="Live" label="Realtime Chat" />
                  </div>
                  <div className="h-px bg-gradient-to-r from-transparent via-sand to-transparent mb-8" />
                  <p className="font-display text-base italic text-stone/80 text-center leading-relaxed">
                    "A social operating system<br />for campus life."
                  </p>
                </div>
              </div>

              {/* Floating accents */}
              <div aria-hidden className="absolute -top-5 -right-5 w-28 h-28 rounded-full bg-tan/20 blur-2xl" />
              <div aria-hidden className="absolute -bottom-5 -left-5 w-36 h-36 rounded-full bg-terracotta/10 blur-2xl" />
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
          <span className="font-body text-xs text-stone tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-stone to-transparent" />
        </div>
      </section>

      <hr className="divider-warm" />

      {/* ── WHY COMMONGROUND ─────────────────────────────────── */}
      <section className="py-24 bg-parchment">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block font-body text-xs text-sienna font-medium tracking-widest uppercase mb-4">Why CommonGround</span>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-bark mb-4">
              Built around real campus life
            </h2>
            <p className="font-body text-stone text-lg max-w-xl mx-auto">
              Not another generic social feed. CommonGround is structured around the things that already connect you: your classes, interests, and events.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <WhyCard
              delay={1}
              icon="🌱"
              title="Organic Connections"
              body="Your enrolled courses and personal interests automatically surface the people and conversations most relevant to you. No algorithmic guessing."
              accent="bg-cream border-sand/60 hover:border-tan/60"
            />
            <WhyCard
              delay={2}
              icon="📍"
              title="Campus-Centric Events"
              body="Discover events happening around you with real-time GPS distance, easy RSVP, and automatic group chats that keep coordination in context."
              accent="bg-linen border-sand/60 hover:border-tan/60"
            />
            <WhyCard
              delay={3}
              icon="🔒"
              title="Safe by Design"
              body="Every message is screened in real time and every event goes through admin review before it goes live. CommonGround is a space you can actually trust."
              accent="bg-cream border-sand/60 hover:border-tan/60"
            />
          </div>
        </div>
      </section>

      <hr className="divider-warm" />

      {/* ── FEATURE PREVIEW ──────────────────────────────────── */}
      <section className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div>
              <span className="inline-block font-body text-xs text-moss font-medium tracking-widest uppercase mb-4">Tutorial</span>
              <h2 className="font-display text-4xl font-medium text-bark mb-6 leading-tight">
                From class roster to<br />
                <em className="not-italic text-forest">actual friendships</em>
              </h2>
              <div className="space-y-6 mb-8">
                {[
                  { step: '01', text: 'Sign in with your U of U credentials. One tap, no new account.' },
                  { step: '02', text: 'Complete a brief interest and behavior survey to shape your experience.' },
                  { step: '03', text: 'Register the classes you\'re enrolled in. They become instant connection points.' },
                  { step: '04', text: 'Discover events, join group chats, and meet people who share your world.' },
                ].map(({ step, text }) => (
                  <div key={step} className="flex items-start gap-5">
                    <span className="font-display text-sm font-medium text-tan mt-0.5 w-7 shrink-0">{step}</span>
                    <p className="font-body text-stone text-sm leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
              <Link
                to="/features"
                className="inline-flex items-center gap-2 font-body text-sm font-medium text-walnut hover:text-bark transition-colors duration-200 group border-b border-walnut/30 hover:border-bark pb-0.5"
              >
                See all features
                <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>

            {/* Phone screenshot */}
            <div className="relative flex justify-center">
              <div aria-hidden className="absolute inset-0 -z-10 flex items-center justify-center">
                <div className="w-48 h-64 rounded-full bg-tan/20 blur-3xl" />
              </div>
              <img
                src="/events.png"
                alt="CommonGround events screen"
                className="relative z-10 w-64 rounded-[2.5rem] shadow-2xl border-4 border-bark object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <hr className="divider-warm" />

      {/* ── APP GALLERY ──────────────────────────────────────── */}
      <AppGallery />

      {/* ── CTA BANNER ───────────────────────────────────────── */}
      <section className="py-20 bg-bark relative overflow-hidden">
        {/* Warm texture stripes */}
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage: 'repeating-linear-gradient(45deg, #B8926A 0px, #B8926A 1px, transparent 1px, transparent 40px)' }}
          />
          <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-walnut/30 blur-3xl" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-medium text-cream mb-6 leading-tight">
            Ready to find your<br />CommonGround?
          </h2>
          <p className="font-body text-cream/60 text-lg mb-10">
            Join University of Utah students already using CommonGround to discover events, connect through shared classes, and actually show up for campus life.
          </p>
          <Link
            to="/download"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-tan text-bark font-body font-medium tracking-wide text-sm transition-all duration-200 hover:bg-sand hover:shadow-xl hover:-translate-y-0.5"
          >
            Download CommonGround
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  )
}
