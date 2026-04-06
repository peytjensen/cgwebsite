export default function About() {
  return (
    <div className="pt-16 min-h-screen">
      {/* Header */}
      <div className="bg-parchment/40 border-b border-sand/30 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <span className="inline-block font-body text-xs text-moss font-medium tracking-widest uppercase mb-4">The Team</span>
          <h1 className="font-display text-5xl md:text-6xl font-medium text-bark mb-6 leading-tight">
            Built by students,<br />
            <em className="not-italic text-forest">for students</em>
          </h1>
          <p className="font-body text-stone text-lg max-w-xl leading-relaxed">
            CommonGround was conceived, designed, and built at the University of Utah by students who experienced the same disconnection problem firsthand.
          </p>
        </div>
      </div>

      {/* Placeholder body */}
      <div className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="p-8 rounded-2xl bg-parchment/50 border border-sand/40 flex flex-col items-center text-center gap-4"
              >
                <div className="w-20 h-20 rounded-full bg-sage/15 border border-sage/20 flex items-center justify-center">
                  <span className="text-2xl">👤</span>
                </div>
                <div>
                  <div className="h-4 w-28 rounded bg-sand mx-auto mb-2" />
                  <div className="h-3 w-20 rounded bg-sand/60 mx-auto" />
                </div>
                <div className="space-y-1.5 w-full">
                  <div className="h-3 w-full rounded bg-sand/40" />
                  <div className="h-3 w-4/5 rounded bg-sand/40 mx-auto" />
                  <div className="h-3 w-3/5 rounded bg-sand/40 mx-auto" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-sand bg-parchment/50">
              <span className="text-sm">🌱</span>
              <span className="font-body text-sm text-stone">Team bios coming soon</span>
            </div>
          </div>
        </div>
      </div>

      {/* U of U section */}
      <section className="py-16 bg-parchment/40 border-t border-sand/30">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-6">
            <img
              src="/treelogo.png"
              alt="CommonGround"
              className="h-14 w-14 object-contain opacity-70"
            />
          </div>
          <h2 className="font-display text-2xl font-medium text-bark mb-4">University of Utah</h2>
          <p className="font-body text-stone text-base leading-relaxed">
            CommonGround started at the U, but the problem of campus disconnection is universal. We're building this to scale wherever students gather.
          </p>
        </div>
      </section>
    </div>
  )
}
