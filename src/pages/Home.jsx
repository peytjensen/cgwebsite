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
              <span className="inline-block font-body text-xs text-moss font-medium tracking-widest uppercase mb-4">How It Works</span>
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

            {/* Feature chips */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: '🎓', label: 'CAS SSO Login', bg: 'bg-linen' },
                { icon: '📅', label: 'Campus Events', bg: 'bg-cream' },
                { icon: '💬', label: 'Group Chats', bg: 'bg-linen' },
                { icon: '🧊', label: 'Icebreaker Gates', bg: 'bg-cream' },
                { icon: '🗓️', label: 'Hangouts', bg: 'bg-linen' },
                { icon: '🔔', label: 'Push Notifications', bg: 'bg-cream' },
                { icon: '🧑‍🤝‍🧑', label: 'Friend System', bg: 'bg-linen' },
                { icon: '🛡️', label: 'AI Moderation', bg: 'bg-cream' },
              ].map(({ icon, label, bg }) => (
                <div
                  key={label}
                  className={`flex items-center gap-3 px-4 py-4 rounded-xl ${bg} border border-sand hover:border-tan/60 hover:shadow-sm transition-all duration-200`}
                >
                  <span className="text-xl">{icon}</span>
                  <span className="font-body text-sm text-bark font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

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
