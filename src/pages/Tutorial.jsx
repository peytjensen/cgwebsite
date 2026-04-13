import { useState } from 'react'
import { Link } from 'react-router-dom'

const steps = [
  {
    number: '01',
    title: 'Sign In with Your U of U Credentials',
    summary: 'One tap, no new account needed.',
    color: 'text-tan',
    borderColor: 'border-tan/40',
    bgColor: 'bg-tan/5',
    details: [
      'Open CommonGround and tap "Sign in with University of Utah".',
      'You\'ll be redirected to the official CAS (Central Authentication Service) login — the same portal you use for Canvas and other U of U apps.',
      'Enter your uNID and password. No separate account or email verification required.',
      'Verify with Duo when prompted to complete two-factor authentication.',
    ],
    tip: null,
    image: null,
  },
  {
    number: '02',
    title: 'Complete the Onboarding Survey',
    summary: 'A short questionnaire shapes your entire experience.',
    color: 'text-sienna',
    borderColor: 'border-sienna/40',
    bgColor: 'bg-sienna/5',
    details: [
      'First, you\'ll see the Behavior Survey — a brief set of questions about how you prefer to interact socially (e.g., group sizes, conversation styles).',
      'Next is the Interest Survey — pick topics and activities you care about, from hiking and gaming to engineering and music.',
      'These answers are used to recommend relevant people, events, and group chats.',
      'You can update your interests any time from your profile settings.',
    ],
    tip: 'Be honest — the more accurate your answers, the better your matches.',
    image: '/behav_tut.png',
  },
  {
    number: '03',
    title: 'Register Your Classes',
    summary: 'Your class roster becomes an instant connection point.',
    color: 'text-moss',
    borderColor: 'border-moss/40',
    bgColor: 'bg-moss/5',
    details: [
      'After filling out the surveys, you will be brought to the Classes tab.',
      'Search by course code (e.g., CS 3500) to find your section.',
      'Once added, you\'ll be placed into chat(s) with classmates who share the same or similar interests.',
      'You can add or drop classes any time, just like adjusting your actual schedule.',
    ],
    tip: null,
    image: '/classes.png',
  },
  {
    number: '04',
    title: 'Discover Events Near You',
    summary: 'Find what\'s happening on campus and RSVP with one tap.',
    color: 'text-forest',
    borderColor: 'border-forest/40',
    bgColor: 'bg-forest/5',
    details: [
      'The Events tab shows upcoming campus events from Campus Connect, student organizations, and individual postings.',
      'Each event shows the title, organizer, location, distance from you, and how many people are going.',
      'Tap an event to read the full description, then RSVP with a single tap.',
      'Some events will place you in a group chat when joining, if the owner of the event created one.',
    ],
    tip: null,
    image: '/events.png',
  },
  {
    number: '05',
    title: 'Connect Through Group Chats',
    summary: 'Everything clicks together in real-time conversations.',
    color: 'text-walnut',
    borderColor: 'border-walnut/40',
    bgColor: 'bg-walnut/5',
    details: [
      'You will have interest based chats related to your classes, DMs with friends, and event chats for events you\'ve signed up for and have had one created.',
      'Chats support up to 10 people for focused, meaningful conversations, not chaotic mass threads.',
      'All messages are moderated in real time to keep conversations respectful and safe.',
      'Tap any user\'s name to view their profile and see shared classes or interests.',
      'Notifications are grouped by chat so you can stay on top of what matters without being overwhelmed.',
    ],
    tip: null,
    image: '/chat.png',
  },
]

function StepCard({ step, index, isOpen, onToggle }) {
  return (
    <div
      className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
        isOpen ? `${step.borderColor} shadow-md` : 'border-sand/60'
      } bg-white`}
    >
      {/* Header — always visible */}
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-5 p-6 text-left group"
      >
        <span className={`font-display text-3xl font-medium ${step.color} w-12 shrink-0 leading-none`}>
          {step.number}
        </span>
        <div className="flex-1 min-w-0">
          <h3 className="font-display text-lg font-medium text-bark leading-snug">{step.title}</h3>
          <p className="font-body text-sm text-stone mt-0.5">{step.summary}</p>
        </div>
        <svg
          className={`w-5 h-5 text-driftwood shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Expanded content */}
      <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[900px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
        <div className={`px-6 pb-6 ${step.bgColor} border-t border-sand/40`}>
          <div className={`pt-6 grid ${step.image ? 'md:grid-cols-2' : 'grid-cols-1'} gap-8 items-start`}>
            {/* Steps list */}
            <div>
              <ol className={`space-y-4 ${step.tip ? 'mb-6' : ''}`}>
                {step.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-medium font-body text-cream ${step.color.replace('text-', 'bg-')}`}>
                      {i + 1}
                    </span>
                    <p className="font-body text-sm text-stone leading-relaxed">{detail}</p>
                  </li>
                ))}
              </ol>
              {/* Tip */}
              {step.tip && (
                <div className={`flex items-start gap-3 px-4 py-3 rounded-xl border ${step.borderColor} bg-white/70`}>
                  <span className="text-base shrink-0 mt-0.5">💡</span>
                  <p className="font-body text-xs text-driftwood leading-relaxed">{step.tip}</p>
                </div>
              )}
            </div>

            {/* Screenshot */}
            {step.image && (
              <div className="flex justify-center">
                <div className="relative">
                  <div aria-hidden className="absolute inset-0 -z-10 flex items-center justify-center">
                    <div className="w-32 h-48 rounded-full bg-tan/20 blur-3xl" />
                  </div>
                  <img
                    src={step.image}
                    alt={step.title}
                    className="relative z-10 w-48 rounded-[2rem] shadow-xl border-4 border-bark object-contain"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Tutorial() {
  const [openIndex, setOpenIndex] = useState(0)

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="overflow-hidden">
      {/* ── HEADER ───────────────────────────────────────────── */}
      <section className="pt-32 pb-16 bg-parchment relative">
        <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute left-[-5%] top-[-5%] w-[500px] h-[500px] rounded-full bg-tan/10 blur-3xl" />
          <div className="absolute right-[-5%] bottom-0 w-[400px] h-[400px] rounded-full bg-linen/60 blur-3xl" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <span className="inline-block font-body text-xs text-moss font-medium tracking-widest uppercase mb-4">Getting Started</span>
          <h1 className="font-display text-5xl md:text-6xl font-medium text-bark mb-5 leading-tight">
            How to use<br />
            <em className="not-italic text-forest">CommonGround</em>
          </h1>
          <p className="font-body text-stone text-lg leading-relaxed max-w-xl mx-auto">
            From first login to your first real campus connection — here's everything you need to know, step by step.
          </p>
        </div>
      </section>

      <hr className="divider-warm" />

      {/* ── STEPS ────────────────────────────────────────────── */}
      <section className="py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-6">

          <div className="space-y-4">
            {steps.map((step, i) => (
              <StepCard
                key={i}
                step={step}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => handleToggle(i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-20 bg-bark relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage: 'repeating-linear-gradient(45deg, #B8926A 0px, #B8926A 1px, transparent 1px, transparent 40px)' }}
          />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-medium text-cream mb-5 leading-tight">
            Ready to get started?
          </h2>
          <p className="font-body text-cream/60 text-base mb-8">
            Download CommonGround and follow along with this guide. You'll be connected with your campus in minutes.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/download"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-tan text-bark font-body font-medium tracking-wide text-sm transition-all duration-200 hover:bg-sand hover:shadow-xl hover:-translate-y-0.5"
            >
              Download CommonGround
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </Link>
            <Link
              to="/features"
              className="inline-flex items-center gap-2 font-body text-sm font-medium text-cream/70 hover:text-cream transition-colors duration-200"
            >
              Explore all features →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
