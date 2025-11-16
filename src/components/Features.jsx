import { Zap, Workflow, Bot, Gauge } from 'lucide-react'

export default function Features() {
  const feats = [
    { icon: Workflow, title: 'Process mapping', desc: 'Visualize pathways, handoffs, and failure points across teams.' },
    { icon: Gauge, title: 'Throughput gains', desc: 'Reduce cycle time, increase capacity, and raise consistency.' },
    { icon: Bot, title: 'AI copilots', desc: 'Task assistants that triage, draft, and coordinate across tools.' },
    { icon: Zap, title: 'Rapid automation', desc: 'Integrations and scripts that eliminate repetitive work.' },
  ]

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">What we deliver</h2>
          <p className="mt-4 text-gray-700">Tangible improvements you can see in your dashboards and feel in your day‑to‑day.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {feats.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <Icon className="h-6 w-6 text-gray-900" />
              <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-gray-700 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
