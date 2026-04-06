export default function Download() {
  return (
    <div className="pt-16 min-h-screen flex items-center justify-center bg-parchment/30">
      <div className="max-w-lg mx-auto px-6 py-24 text-center">
        {/* Logo */}
        <div className="flex justify-center mb-10">
          <div className="relative">
            <div className="w-28 h-28 rounded-full bg-sage/15 flex items-center justify-center">
              <img
                src="/treelogo.png"
                alt="CommonGround"
                className="w-20 h-20 object-contain"
              />
            </div>
            <div aria-hidden className="absolute inset-0 rounded-full bg-sage/10 blur-xl scale-150" />
          </div>
        </div>

        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-tan/40 bg-tan/10 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-tan" />
          <span className="font-body text-xs text-tan font-medium tracking-widest uppercase">Coming Soon</span>
        </span>

        <h1 className="font-display text-4xl md:text-5xl font-medium text-bark mb-5 leading-tight">
          The app is<br />on its way.
        </h1>

        <p className="font-body text-stone text-base leading-relaxed mb-8">
          CommonGround is currently in development for University of Utah students. Check back soon. We'll have download links for iOS and Android here when we launch.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            disabled
            className="flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-bark/10 border border-bark/15 text-bark/40 font-body text-sm font-medium cursor-not-allowed"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            App Store (iOS)
          </button>
          <button
            disabled
            className="flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-bark/10 border border-bark/15 text-bark/40 font-body text-sm font-medium cursor-not-allowed"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.18 23.76c.35.2.74.24 1.12.13l12.37-12.37-3.18-3.18L3.18 23.76zM22.32 10.34l-2.56-1.47-3.14 3.14 3.14 3.14 2.56-1.47c.73-.42.73-1.46 0-1.88l-.0.54zM1.38.23C1.14.5 1 .88 1 1.35v21.3c0 .47.14.85.38 1.12l.06.05L13.18 11.98v-.27L1.44.18l-.06.05zM13.81 8.03l3.18 3.18-2.62 2.62-12.01 6.9c-.41.24-.83.27-1.18.11L13.81 8.03z"/>
            </svg>
            Google Play (Android)
          </button>
        </div>
      </div>
    </div>
  )
}
