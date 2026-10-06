import { useState } from 'react'
import { AnimatePresence, m, useReducedMotion } from 'framer-motion'
import { AREAS } from '../data/conteudo'
import { Revelar } from './ui/Revelar'
import { Secao, TITULO_SECAO } from './ui/Secao'

/** Nome do canal no Discord: minúsculo e sem acento. */
function canal(nome: string) {
  return `#${nome.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()}`
}

export function Areas() {
  const [atual, setAtual] = useState(0)
  const reduzir = useReducedMotion()
  const area = AREAS[atual]

  return (
    <Secao id="areas" numero="03" tom="claro-alt">
      <Revelar>
        <h2 className={`${TITULO_SECAO} max-w-3xl`}>Qual área da sua vida tá pedindo atenção agora?</h2>
      </Revelar>
      <Revelar>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-suave-claro">
          Escolha uma. A Tribo trabalha as mesmas nove áreas do seu vault, cada uma com um canal no Discord e
          desafios ao longo do ano.
        </p>
      </Revelar>

      <div className="mt-10 grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:gap-12">
        <Revelar>
          <ul className="flex flex-wrap gap-3" aria-label="Áreas da vida">
            {AREAS.map((a, i) => (
              <li key={a.nome}>
                <button
                  type="button"
                  aria-pressed={i === atual}
                  onClick={() => setAtual(i)}
                  className={`min-h-12 rounded-full px-5 text-base font-semibold ring-1 transition-colors motion-reduce:transition-none ${
                    i === atual
                      ? 'bg-tinta text-[#e8efec] ring-tinta'
                      : 'bg-white/80 text-tinta ring-tinta/15 hover:ring-menta-escura'
                  }`}
                >
                  {a.nome}
                </button>
              </li>
            ))}
          </ul>
        </Revelar>

        <div aria-live="polite">
          <AnimatePresence mode="wait">
            <m.div
              key={area.nome}
              initial={reduzir ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduzir ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fundo-escuro rounded-2xl p-6 shadow-[0_30px_60px_-30px_rgb(14_23_21/0.5)] sm:p-8"
            >
              <p className="font-mono text-sm text-menta">{canal(area.nome)} · no Discord</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[#e8efec]">{area.nome}</h3>
              <p className="mt-3 text-lg leading-relaxed text-suave-escuro">{area.texto}</p>
              <div className="postit mt-6 -rotate-1 rounded-sm px-5 py-4">
                <p className="text-lg leading-tight font-semibold">Exemplo de desafio</p>
                <p className="mt-1 text-[1.35rem] leading-snug">{area.desafio}</p>
              </div>
            </m.div>
          </AnimatePresence>
        </div>
      </div>
    </Secao>
  )
}
