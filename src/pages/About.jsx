const team = [
  {
    name: "Arjun Sarkar",
    bio: null,
  },
  {
    name: "Bryce Saldajeno",
    bio: null,
  },
  {
    name: "Hudson Bowman",
    bio: null,
  },
  {
    name: "Peyton Jensen",
    bio: "Peyton is a Computer Science major completing his senior capstone in CS 4500. His current focus is in AI, AI-assisted development, and mobile app development. He has prior experience building web applications for the Cache Valley Gardeners Market, a local non-profit. Peyton is open to contact at peytonejensen2@gmail.com and maintains a personal portfolio at peytjensen.com.",
    email: "peytonejensen2@gmail.com",
    portfolio: "https://www.peytjensen.com",
  },
]

export default function About() {
  return (
    <div className="pt-16 min-h-screen">
      <div className="py-24">
        <div className="max-w-2xl mx-auto px-6 flex flex-col items-center text-center">
          {/* Text */}
          <span className="inline-block font-body text-xs text-moss font-medium tracking-widest uppercase mb-4">The Team</span>
          <h1 className="font-display text-5xl md:text-6xl font-medium text-bark mb-6 leading-tight">
            Built by students,<br />
            <em className="not-italic text-forest">for students</em>
          </h1>
          <p className="font-body text-stone text-lg leading-relaxed mb-12 max-w-md">
            CommonGround is our senior capstone project. Making friends in college is harder than it looks, and all four of us felt that. We built this because we wanted something that actually helped with it.
          </p>

          {/* Team photo */}
          <div className="rounded-2xl overflow-hidden border border-sand/40 shadow-sm mb-6 w-full max-w-md">
            <img
              src="/team.jpg"
              alt="The CommonGround team"
              className="w-full object-cover"
            />
          </div>

          {/* Names */}
          <div className="grid grid-cols-4 gap-2 w-full max-w-md mb-20">
            {team.map(({ name }) => (
              <div key={name}>
                <p className="font-body text-xs text-stone">{name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Staff bios */}
        <div className="max-w-2xl mx-auto px-6">
          <span className="inline-block font-body text-xs text-moss font-medium tracking-widest uppercase mb-10">CommonGround Staff</span>
          <div className="flex flex-col gap-10">
            {team.map(({ name, bio, email, portfolio }) => (
              <div key={name} className="border-t border-sand/40 pt-8">
                <p className="font-display text-xl font-medium text-bark mb-3">{name}</p>
                {bio ? (
                  <>
                    <p className="font-body text-sm text-stone leading-relaxed mb-3">{bio}</p>
                    <div className="flex flex-wrap gap-4">
                      {email && (
                        <a href={`mailto:${email}`} className="font-body text-xs text-moss hover:text-forest underline underline-offset-2">
                          {email}
                        </a>
                      )}
                      {portfolio && (
                        <a href={portfolio} target="_blank" rel="noopener noreferrer" className="font-body text-xs text-moss hover:text-forest underline underline-offset-2">
                          peytjensen.com
                        </a>
                      )}
                    </div>
                  </>
                ) : (
                  <p className="font-body text-sm text-stone/50 italic">Bio coming soon.</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
