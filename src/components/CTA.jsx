export default function CTA() {
  return (
    <section id="contact" className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold">Ready to remove the bottlenecks?</h2>
            <p className="mt-4 text-gray-300">Tell us where it hurts. We’ll propose a focused pilot and show measurable value fast.</p>
            <div className="mt-8">
              <a href="https://cal.com" target="_blank" className="inline-flex items-center px-5 py-3 rounded-md bg-white text-gray-900 hover:bg-gray-100 transition-colors">
                Book a discovery call
              </a>
            </div>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="rounded-2xl bg-white/5 border border-white/10 p-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <input className="w-full rounded-md bg-white/10 border border-white/20 px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="Name" />
              <input className="w-full rounded-md bg-white/10 border border-white/20 px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="Company" />
              <input className="sm:col-span-2 w-full rounded-md bg-white/10 border border-white/20 px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="Email" type="email" />
              <textarea className="sm:col-span-2 w-full h-28 rounded-md bg-white/10 border border-white/20 px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="Where are you seeing friction?" />
            </div>
            <button className="mt-4 w-full bg-white text-gray-900 rounded-md py-2.5 font-medium hover:bg-gray-100">Send</button>
          </form>
        </div>
      </div>
    </section>
  )
}
