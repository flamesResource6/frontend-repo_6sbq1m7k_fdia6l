import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full flex items-center" id="hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <div className="inline-flex items-center text-sm px-2.5 py-1.5 rounded-full bg-white/80 backdrop-blur border border-white/40 shadow-sm mb-4 pointer-events-none">
            <span className="h-2 w-2 rounded-full bg-emerald-500 mr-2" />
            AI-powered process optimization
          </div>
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-gray-900">
            Find bottlenecks. Fix them fast. Focus on what matters.
          </h1>
          <p className="mt-6 text-lg text-gray-700 max-w-xl">
            Penrose Solutions analyzes your workflows, pinpoints friction, and deploys practical AI automations so your team can move faster with less effort.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex justify-center items-center px-5 py-3 rounded-md bg-gray-900 text-white hover:bg-gray-800 transition-colors">
              Book a discovery call
            </a>
            <a href="#how-it-works" className="inline-flex justify-center items-center px-5 py-3 rounded-md bg-white/80 backdrop-blur border border-white/40 hover:bg-white transition-colors">
              See how it works
            </a>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-white via-white/40 to-transparent" />
    </section>
  )
}
