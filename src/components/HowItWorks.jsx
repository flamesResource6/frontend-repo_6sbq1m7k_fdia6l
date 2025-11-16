export default function HowItWorks() {
  const steps = [
    {
      title: 'Discovery & Mapping',
      desc: 'We map current workflows, systems, and team touchpoints to see where time and energy is lost.'
    },
    {
      title: 'Bottleneck Analysis',
      desc: 'We quantify impact and pinpoint the highest‑leverage constraints across your processes.'
    },
    {
      title: 'AI-Powered Solutions',
      desc: 'We design and implement automations, copilots, and integrations tailored to your stack.'
    },
    {
      title: 'Measure & Iterate',
      desc: 'We ship fast, measure outcomes, and refine until the gains stick.'
    }
  ]

  return (
    <section id="how-it-works" className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">How we work</h2>
          <p className="mt-4 text-gray-700">A lightweight, outcome‑driven engagement designed to show value in weeks, not months.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="h-10 w-10 rounded-md bg-gradient-to-br from-violet-500 via-fuchsia-500 to-amber-400 text-white flex items-center justify-center font-semibold">{i+1}</div>
              <h3 className="mt-4 font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-gray-700 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
