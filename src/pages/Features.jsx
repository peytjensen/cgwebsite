const SectionHeader = ({ eyebrow, title, subtitle, eyebrowColor = 'text-moss' }) => (
  <div className="mb-12">
    {eyebrow && (
      <span className={`inline-block font-body text-xs font-medium tracking-widest uppercase mb-3 ${eyebrowColor}`}>{eyebrow}</span>
    )}
    <h2 className="font-display text-3xl md:text-4xl font-medium text-bark mb-4 leading-tight">{title}</h2>
    {subtitle && <p className="font-body text-stone text-base leading-relaxed max-w-xl">{subtitle}</p>}
  </div>
)

const FeatureItem = ({ icon, title, body }) => (
  <div className="flex gap-4 group">
    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-tan/15 border border-tan/20 flex items-center justify-center text-lg transition-colors duration-200 group-hover:bg-tan/25">
      {icon}
    </div>
    <div>
      <h4 className="font-body text-sm font-semibold text-bark mb-1">{title}</h4>
      <p className="font-body text-stone text-sm leading-relaxed">{body}</p>
    </div>
  </div>
)

const FeatureSection = ({ id, eyebrow, eyebrowColor, title, subtitle, features, bg = 'bg-cream' }) => (
  <section id={id} className={`py-20 ${bg}`}>
    <div className="max-w-6xl mx-auto px-6">
      <SectionHeader eyebrow={eyebrow} eyebrowColor={eyebrowColor} title={title} subtitle={subtitle} />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map((f) => (
          <div
            key={f.title}
            className="p-6 rounded-2xl bg-cream border-l-2 border-l-tan/50 border border-sand/60 hover:border-l-tan hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
          >
            <FeatureItem {...f} />
          </div>
        ))}
      </div>
    </div>
  </section>
)

const techStack = [
  { layer: 'Framework', tech: 'React Native + Expo SDK 54', detail: 'New architecture enabled' },
  { layer: 'Language', tech: 'TypeScript 5.9', detail: 'Strict mode' },
  { layer: 'Navigation', tech: 'Expo Router 6', detail: 'File-based, typed routes' },
  { layer: 'UI Library', tech: 'Gluestack UI + NativeWind', detail: 'Tailwind-powered' },
  { layer: 'Animations', tech: 'Reanimated 4', detail: 'React Native Reanimated' },
  { layer: 'Backend', tech: 'Supabase', detail: 'Postgres + Realtime + RLS + Edge Functions' },
  { layer: 'Image Storage', tech: 'Oracle Cloud (OCI)', detail: 'Object Storage + PAR tokens' },
  { layer: 'Auth', tech: 'University of Utah CAS SSO', detail: 'Supabase JWT sessions' },
  { layer: 'Moderation', tech: 'OpenAI Omni Moderation API', detail: 'Via Supabase Edge Function proxy' },
  { layer: 'Push Notifications', tech: 'Expo Push Service', detail: 'Token-based delivery' },
  { layer: 'Location', tech: 'Expo Location', detail: 'Custom Haversine distance utils' },
  { layer: 'React Version', tech: 'React 19.1', detail: 'React Compiler experiment enabled' },
]

export default function Features() {
  return (
    <div className="pt-16">
      {/* Page header */}
      <div className="bg-parchment border-b border-sand py-20">
        <div className="max-w-6xl mx-auto px-6">
          <span className="inline-block font-body text-xs text-sienna font-medium tracking-widest uppercase mb-4">Everything CommonGround Does</span>
          <h1 className="font-display text-5xl md:text-6xl font-medium text-bark mb-6 leading-tight">
            Built for the full<br />
            <em className="not-italic text-forest">campus experience</em>
          </h1>
          <p className="font-body text-stone text-lg max-w-2xl leading-relaxed">
            CommonGround isn't a messaging app with events bolted on. It's a social operating system where your classes, interests, events, and friendships all live in the same space and reinforce each other.
          </p>
        </div>
      </div>

      {/* ── IDENTITY & ONBOARDING ─── */}
      <FeatureSection
        id="onboarding"
        eyebrow="Getting Started"
        eyebrowColor="text-moss"
        title="Identity & Onboarding That Actually Means Something"
        subtitle="Sign in with your university credentials. No new account required. A thoughtful, sequenced onboarding then builds the foundation for everything that follows."
        bg="bg-cream"
        features={[
          {
            icon: '🎓',
            title: 'CAS Single Sign-On',
            body: 'Log in with your University of Utah institutional credentials. Zero friction, no separate account creation, ever.',
          },
          {
            icon: '🧠',
            title: 'Personalized from Day One',
            body: 'Answer a few quick questions about how you like to socialize. CommonGround uses your answers to shape who and what it surfaces for you from the start.',
          },
          {
            icon: '🏷️',
            title: 'Interest Tagging',
            body: 'Tag the topics you actually care about across dozens of categories. The more you share, the better CommonGround gets at connecting you to the right people.',
          },
          {
            icon: '📚',
            title: 'Class Registration',
            body: 'Register the courses you\'re actually enrolled in. Your class list becomes an organic connection engine.',
          },
          {
            icon: '🖼️',
            title: 'Your Profile, Your Story',
            body: 'Show off your photo, bio, interests, and classes in one place. Tap any avatar anywhere in the app to see someone\'s full profile without losing your spot.',
          },
        ]}
      />

      <hr className="divider-warm" />

      {/* ── EVENTS ─── */}
      <FeatureSection
        id="events"
        eyebrow="Discovery"
        eyebrowColor="text-sienna"
        title="Events: Where Discovery Meets Coordination"
        subtitle="A real-time campus event hub that goes beyond a simple calendar. Every event is a starting point for conversation."
        bg="bg-parchment"
        features={[
          {
            icon: '🔎',
            title: 'Browse & Filter',
            body: 'All approved events sorted chronologically with photo banners, descriptions, location details, and interest tags.',
          },
          {
            icon: '✅',
            title: 'RSVP with Guest Count',
            body: 'Bring a friend. The system tracks total headcount including guests. One tap to commit, one tap to cancel.',
          },
          {
            icon: '🔁',
            title: 'Recurring Event Series',
            body: 'Create weekly study groups or club meetings that auto-generate across multiple days with full recurrence metadata.',
          },
          {
            icon: '📍',
            title: 'GPS Distance Indicators',
            body: 'Every event card shows how far you are from the venue right now. One-tap navigation launches Maps.',
          },
          {
            icon: '💬',
            title: 'Event Group Chats',
            body: 'RSVP and you\'re automatically added to that event\'s group chat. You\'re not just going. You\'re already in the conversation.',
          },
          {
            icon: '🛡️',
            title: 'Admin Approval Queue',
            body: 'All user-submitted events go through a moderation queue before going live. Dual-layer content screening included.',
          },
        ]}
      />

      <hr className="divider-warm" />

      {/* ── GROUP CHATS ─── */}
      <FeatureSection
        id="chats"
        eyebrow="Social Layer"
        eyebrowColor="text-moss"
        title="Group Chats Built Around Shared Context"
        subtitle="No random invites. Every chat is anchored to something real: the class you share, the interest you have in common."
        bg="bg-cream"
        features={[
          {
            icon: '🏫',
            title: 'Class & Interest Chats',
            body: 'Chats are organized by shared courses and interest groups. When two students share both, a chat bridges them.',
          },
          {
            icon: '✨',
            title: 'Smart Chat Suggestions',
            body: 'CommonGround surfaces the group chats you\'d actually want to join based on your classes and interests. It even suggests creating new ones when nothing quite fits.',
          },
          {
            icon: '🧊',
            title: 'Icebreaker Gates',
            body: 'Before seeing any messages, answer the group\'s custom icebreaker question. Your answer becomes your introduction.',
          },
          {
            icon: '⚡',
            title: 'Messages That Just Work',
            body: 'Messages arrive instantly and stay in sync whether you\'re actively in the chat or jumping back in after switching apps. No refreshing, no missing messages.',
          },
          {
            icon: '↩️',
            title: 'Reply to Icebreaker Answers',
            body: 'Tap any member\'s icebreaker response to see the conversation thread it started. Context-first discussions.',
          },
          {
            icon: '🔗',
            title: 'Everything Stays Connected',
            body: 'Join a chat, RSVP to an event, or add a class and the rest of your experience updates automatically. No gaps, no manual setup.',
          },
        ]}
      />

      <hr className="divider-warm" />

      {/* ── HANGOUTS ─── */}
      <FeatureSection
        id="hangouts"
        eyebrow="Intimate Plans"
        eyebrowColor="text-sienna"
        title="Hangouts: Private Events in Your Circle"
        subtitle="The more intimate cousin of events. Hangouts live inside group chats, private plans for people who already have context."
        bg="bg-parchment"
        features={[
          {
            icon: '🤫',
            title: 'Chat-Private Plans',
            body: 'Hangouts are only visible to members of the group chat they belong to. Coordination stays in context.',
          },
          {
            icon: '📝',
            title: 'Full Event Details',
            body: 'Create with a title, description, time, location, and cover image. Everything needed to actually coordinate.',
          },
          {
            icon: '👍',
            title: 'RSVP Tracking',
            body: 'Members can RSVP and track who\'s going at a glance. No separate coordination thread needed.',
          },
          {
            icon: '🗂️',
            title: 'Hangout Hub',
            body: 'A dedicated screen shows all the hangouts you\'re part of across all your group chats. Nothing slips through.',
          },
          {
            icon: '💬',
            title: 'Hangout Chats',
            body: 'Each hangout gets its own coordination chat so the planning conversation doesn\'t pollute the main group.',
          },
          {
            icon: '🔒',
            title: 'Invite-Only by Design',
            body: 'Only people already in the group chat can see or join. No public discovery, just trusted connections.',
          },
        ]}
      />

      <hr className="divider-warm" />

      {/* ── DMs & FRIENDS ─── */}
      <FeatureSection
        id="friends"
        eyebrow="Your Social Graph"
        eyebrowColor="text-moss"
        title="Direct Messaging & Friends"
        subtitle="A full social graph with the features you'd expect, built with the care you wouldn't."
        bg="bg-cream"
        features={[
          {
            icon: '🤝',
            title: 'Friend Requests',
            body: 'Full pending/sent/received state management with push notifications on both send and accept.',
          },
          {
            icon: '🚫',
            title: 'Block System',
            body: 'Blocking removes any existing friend relation and prevents all future contact. Complete and immediate.',
          },
          {
            icon: '✉️',
            title: 'Direct Messages',
            body: 'Private 1:1 chats between friends with their own settings panel. Realtime delivery, same engine as group chats.',
          },
          {
            icon: '👤',
            title: 'Inline Profile Cards',
            body: 'Tap any avatar anywhere to see that person\'s full profile without leaving what you were doing.',
          },
          {
            icon: '👫',
            title: 'Friends List on Profile',
            body: 'Every user\'s profile shows friend status inline. Mutual connections surface naturally.',
          },
          {
            icon: '🔔',
            title: 'Social Notifications',
            body: 'Friend request received, accepted, and DM alerts delivered via Expo Push. Nothing gets missed.',
          },
        ]}
      />

      <hr className="divider-warm" />

      {/* ── NOTIFICATIONS ─── */}
      <FeatureSection
        id="notifications"
        eyebrow="Stay in the Loop"
        eyebrowColor="text-sienna"
        title="Stay Notified: Nothing Gets Missed"
        subtitle="A full push notification system built on Expo Push Tokens and Supabase Edge Functions."
        bg="bg-parchment"
        features={[
          {
            icon: '📲',
            title: 'Push Notifications',
            body: 'Friend requests, chat messages, event updates, and admin approvals all delivered to your device.',
          },
          {
            icon: '🔕',
            title: 'In-App Notification Center',
            body: 'A full notification inbox with read/unread state and one-tap mark-all-read.',
          },
          {
            icon: '🎯',
            title: 'Always Timely',
            body: 'Notifications go out the moment something happens, whether that\'s a friend request, a new message, or an event update. No delays, no batching.',
          },
          {
            icon: '⚙️',
            title: 'Expo Push Tokens',
            body: 'Device push tokens are registered and managed through Expo\'s notification service for cross-platform delivery.',
          },
        ]}
      />

      <hr className="divider-warm" />

      {/* ── CONTENT SAFETY ─── */}
      <FeatureSection
        id="safety"
        eyebrow="Safe by Design"
        eyebrowColor="text-moss"
        title="Content Safety at Scale"
        subtitle="Built for a campus environment. Safety isn't optional, it's foundational."
        bg="bg-cream"
        features={[
          {
            icon: '🤖',
            title: 'OpenAI Omni Moderation',
            body: 'Every chat message is screened in real time. Hate speech, harassment, threats, and self-harm content blocked before they reach anyone.',
          },
          {
            icon: '🔍',
            title: 'Dual-Layer Event Screening',
            body: 'Event and hangout content goes through a profanity word-list filter plus the OpenAI API with category score thresholds.',
          },
          {
            icon: '👮',
            title: 'Admin Review Queue',
            body: 'No public event goes live without human review. The moderation queue gives admins full context before approving.',
          },
          {
            icon: '📊',
            title: 'Category Score Thresholds',
            body: 'Borderline content is evaluated against specific category scores, not a simple allow/deny.',
          },
        ]}
      />

      {/* ── TECH STACK ─── */}
      <section className="py-20 bg-bark text-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <span className="inline-block font-body text-xs text-tan font-medium tracking-widest uppercase mb-3">Under the Hood</span>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-cream mb-4 leading-tight">
              Production-Grade Tech Stack
            </h2>
            <p className="font-body text-cream/60 text-base leading-relaxed max-w-xl">
              Every technology choice was made deliberately. No boilerplate stacks. Just the right tool for each job.
            </p>
          </div>

          <div className="rounded-2xl border border-tan/20 overflow-hidden">
            {/* Header row */}
            <div className="grid grid-cols-3 gap-4 px-6 py-3 bg-walnut/30 border-b border-tan/20">
              <span className="font-body text-xs text-tan/70 tracking-widest uppercase font-medium">Layer</span>
              <span className="font-body text-xs text-tan/70 tracking-widest uppercase font-medium">Technology</span>
              <span className="font-body text-xs text-tan/70 tracking-widest uppercase font-medium">Detail</span>
            </div>
            {techStack.map((row, i) => (
              <div
                key={row.layer}
                className={`grid grid-cols-3 gap-4 px-6 py-4 items-center transition-colors duration-150 hover:bg-cream/5 ${
                  i < techStack.length - 1 ? 'border-b border-cream/[0.07]' : ''
                }`}
              >
                <span className="font-body text-xs text-tan/50 tracking-widest uppercase font-medium">{row.layer}</span>
                <span className="font-body text-sm text-cream font-medium">{row.tech}</span>
                <span className="font-body text-sm text-cream/50">{row.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
