import { RECEBE } from '../data/conteudo'
import { Revelar } from './ui/Revelar'
import { Secao, TITULO_SECAO } from './ui/Secao'

/** Lista do que vem na assinatura. Reutilizada, compacta, na página de obrigado. */
export function ListaRecebe({ compacta = false }: { compacta?: boolean }) {
  return (
    <ul className={`grid gap-4 ${compacta ? '' : 'sm:grid-cols-2'}`}>
      {RECEBE.map((r, i) => (
        <Revelar
          como="li"
          atraso={(i % 2) * 0.06}
          key={r.titulo}
          className={`flex gap-4 rounded-2xl border border-tinta/10 bg-white/85 shadow-[0_20px_40px_-30px_rgb(14_23_21/0.25)] ${
            compacta ? 'p-5' : 'p-6 sm:p-7'
          } ${!compacta && i === RECEBE.length - 1 ? 'sm:col-span-2' : ''}`}
        >
          <svg viewBox="0 0 20 20" width="22" height="22" aria-hidden="true" className="mt-0.5 shrink-0 text-menta-escura" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 10.5l4 4 8-9" />
          </svg>
          <span>
            <span className="block text-lg leading-snug font-semibold">{r.titulo}</span>
            <span className="mt-1 block text-base leading-relaxed text-suave-claro">{r.texto}</span>
          </span>
        </Revelar>
      ))}
    </ul>
  )
}

export function Recebe() {
  return (
    <Secao id="recebe" numero="06" tom="claro-alt">
      <Revelar>
        <h2 className={TITULO_SECAO}>O que você recebe</h2>
      </Revelar>
      <div className="mt-10">
        <ListaRecebe />
      </div>
    </Secao>
  )
}
