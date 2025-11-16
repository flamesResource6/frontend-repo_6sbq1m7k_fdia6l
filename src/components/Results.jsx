export default function Results() {
  const stats = [
    { value: '40%+', label: 'Cycle time reduction' },
    { value: '3x', label: 'Throughput increase' },
    { value: '99.5%', label: 'Accuracy on targeted tasks' },
    { value: '2-6 wks', label: 'From discovery to impact' },
  ]

  return (
    <section id="results" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-gray-200 bg-white p-8 sm:p-12 shadow-sm">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
            {stats.map((s) => (
              <div key={s.label} className="text-center sm:text-left">
                <div className="text-3xl sm:text-4xl font-semibold text-gray-900">{s.value}</div>
                <div className="mt-2 text-gray-700">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
