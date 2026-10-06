import { m, useReducedMotion } from 'framer-motion'
import { RITMO } from '../data/conteudo'
import { Revelar } from './ui/Revelar'
import { REMATE, Secao, TITULO_SECAO } from './ui/Secao'

export function Ritmo() {
  const reduzir = useReducedMotion()
  return (
    <Secao id="ritmo" numero="04" tom="claro">
      <Revelar>
        <h2 className={`${TITULO_SECAO} max-w-3xl`}>Todo mês, o mesmo ritmo.</h2>
      </Revelar>
      <Revelar>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-suave-claro">
          Constância não depende de lembrar. Depende de saber o que acontece em cada semana. Na Tribo, o mês já
          vem desenhado.
        </p>
      </Revelar>

      <ol className="relative mt-12 grid gap-5 md:grid-cols-4">
        <span
          aria-hidden="true"
          className="absolute top-[22px] right-6 left-6 hidden h-[2px] bg-gradient-to-r from-menta-escura/70 to-menta-escura/15 md:block"
        />
        {RITMO.map((r, i) => (
          <Revelar
            como="li"
            atraso={i * 0.1}
            key={r.titulo}
            className="relative rounded-2xl border border-tinta/10 bg-white/85 p-6 pt-14 shadow-[0_20px_40px_-30px_rgb(14_23_21/0.25)]"
          >
            <m.span
              aria-hidden="true"
              className="absolute top-3 left-6 grid size-6 place-items-center rounded-full border-2 border-menta-escura bg-nevoa"
              {...(reduzir
                ? {}
                : {
                    initial: { scale: 0.4 },
                    whileInView: { scale: 1 },
                    viewport: { once: true },
                    transition: { duration: 0.5, delay: 0.2 + i * 0.12 },
                  })}
            >
              <span className="size-2.5 rounded-full bg-menta" />
            </m.span>
            <p className="font-mono text-sm text-menta-escura">{r.semana}</p>
            <h3 className="mt-1 text-xl font-semibold tracking-tight">{r.titulo}</h3>
            <p className="mt-2 text-base leading-relaxed text-suave-claro">{r.texto}</p>
          </Revelar>
        ))}
      </ol>

      <Revelar className="mt-8">
        <p className="font-mono text-sm leading-relaxed text-suave-claro">
          Ao longo do mês: conteúdo curto e a comunidade aberta no Discord, organizada pelas áreas do vault.
        </p>
      </Revelar>
      <Revelar className="mt-14">
        <p className={REMATE}>Constância não é talento. É ambiente.</p>
      </Revelar>
    </Secao>
  )
}
