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

        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-moss/30 bg-moss/10 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-moss" />
          <span className="font-body text-xs text-moss font-medium tracking-widest uppercase">iOS via TestFlight</span>
        </span>

        <h1 className="font-display text-4xl md:text-5xl font-medium text-bark mb-5 leading-tight">
          Download<br />CommonGround.
        </h1>

        <p className="font-body text-stone text-base leading-relaxed mb-3">
          CommonGround is currently available on iOS through TestFlight. Scan the QR code below to join the beta.
        </p>
        <p className="font-body text-stone/70 text-sm leading-relaxed mb-10">
          Android support may come in the future. We're starting with iOS for now.
        </p>

        {/* QR Code */}
        <div className="flex justify-center mb-10">
          <div className="p-4 rounded-2xl bg-white border border-sand/40 shadow-sm inline-block">
            <img
              src="/qr.png"
              alt="TestFlight QR code"
              className="w-48 h-48 object-contain"
            />
          </div>
        </div>

        {/* Feedback note */}
        <div className="rounded-xl border border-sand/50 bg-parchment/60 px-6 py-5 text-left">
          <p className="font-body text-sm text-bark font-medium mb-1">Feedback welcome</p>
          <p className="font-body text-sm text-stone leading-relaxed">
            We appreciate any feedback you have. Once you're in the app, there's a Google Form on the profile page where you can share your thoughts.
          </p>
        </div>
      </div>
    </div>
  )
}
