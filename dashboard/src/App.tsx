
import {
  ArrowUpRight,
  RadioTower,
  CarFront,
  Activity,
  Wifi,
} from 'lucide-react'

function App() {
  return (
    <main className="min-h-screen bg-canvas p-6 md:p-12">
      <div className="mx-auto max-w-5xl">

        {/* Identidad del proyecto */}
        <header className="flex items-center justify-between
                           border-b border-line pb-6">

          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center
                            justify-center rounded-xl
                            bg-brand-700 text-white">
              <RadioTower size={26} />
            </div>

            <div>
              <h1 className="font-display text-xl font-extrabold">
                Smart Traffic<span className="text-brand-700">.</span>
              </h1>

              <p className="text-[10px] font-semibold
                            tracking-[0.2em] text-muted">
                CCT-UNI / MOBILITY LAB
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted">
            <Wifi size={16} />
            <span>Modo simulación</span>
          </div>

        </header>

        {/* Bienvenida */}
        <section className="py-12">

          <p className="mb-4 text-xs font-semibold
                        tracking-[0.2em] text-brand-700">
            TECNOLOGÍA EN MOVIMIENTO
          </p>

          <h2 className="font-display text-4xl font-extrabold
                         leading-tight md:text-6xl">
            Una ciudad que
            <br />
            <span className="text-brand-700">
              aprende a moverse.
            </span>
          </h2>

          <p className="mt-5 max-w-xl leading-relaxed text-muted">
            Explora cómo las telecomunicaciones y el Internet
            de las Cosas pueden transformar la movilidad urbana.
          </p>

          <button className="mt-7 inline-flex items-center gap-3
                             rounded-lg bg-brand-700 px-5 py-3
                             text-sm font-semibold text-white
                             transition-colors hover:bg-brand-800">
            Explorar sistema
            <ArrowUpRight size={18} />
          </button>

        </section>

        {/* Métricas de prueba */}
        <section className="grid gap-4 sm:grid-cols-3">

          <div className="rounded-xl border border-line
                          bg-surface p-6">
            <CarFront className="mb-5 text-brand-700" />
            <p className="text-sm text-muted">
              Vehículos detectados
            </p>
            <p className="mt-2 font-mono text-4xl font-semibold">
              024
            </p>
          </div>

          <div className="rounded-xl border border-line
                          bg-surface p-6">
            <RadioTower className="mb-5 text-brand-700" />
            <p className="text-sm text-muted">
              Sensores activos
            </p>
            <p className="mt-2 font-mono text-4xl font-semibold">
              4/4
            </p>
          </div>

          <div className="rounded-xl border border-line
                          bg-surface p-6">
            <Activity className="mb-5 text-brand-700" />
            <p className="text-sm text-muted">
              Estado del sistema
            </p>
            <p className="mt-2 font-display text-2xl font-bold
                          text-traffic-green">
              Operativo
            </p>
          </div>

        </section>

        <footer className="mt-10 border-t border-line
                           pt-5 text-xs text-muted">
          Smart Traffic · CCT-UNI · Open Day 2026
          <br />
          Prototipo visual con datos simulados.
        </footer>

      </div>
    </main>
  )
}

export default App
