import { useId, useState } from 'react'
import { AnimatePresence, m, useReducedMotion } from 'framer-motion'
import { DUVIDAS } from '../data/conteudo'
import { Revelar } from './ui/Revelar'
import { Secao, TITULO_SECAO } from './ui/Secao'

function Item({ pergunta, resposta }: { pergunta: string; resposta: string }) {
  const [aberto, setAberto] = useState(false)
  const reduzir = useReducedMotion()
  const id = useId()
  return (
    <li className="border-b border-tinta/15">
      <h3>
        <button
          type="button"
          id={`${id}-b`}
          aria-expanded={aberto}
          aria-controls={`${id}-p`}
          onClick={() => setAberto((v) => !v)}
          className="flex min-h-14 w-full items-center justify-between gap-6 py-5 text-left text-lg font-semibold"
        >
          <span>{pergunta}</span>
          <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" className={`shrink-0 transition-transform duration-300 motion-reduce:transition-none ${aberto ? 'rotate-45' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {aberto && (
          <m.div
            id={`${id}-p`}
            role="region"
            aria-labelledby={`${id}-b`}
            initial={reduzir ? false : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={reduzir ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="max-w-2xl pb-6 text-base leading-relaxed text-suave-claro">{resposta}</p>
          </m.div>
        )}
      </AnimatePresence>
    </li>
  )
}

export function Duvidas() {
  return (
    <Secao id="duvidas" numero="10" tom="claro-alt">
      <Revelar>
        <h2 className={TITULO_SECAO}>Dúvidas</h2>
      </Revelar>
      <Revelar className="mt-10">
        <ul className="border-t border-tinta/15">
          {DUVIDAS.map((d) => (
            <Item key={d.pergunta} {...d} />
          ))}
        </ul>
      </Revelar>
    </Secao>
  )
}
