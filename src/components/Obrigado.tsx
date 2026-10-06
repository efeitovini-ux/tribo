import { useState } from 'react'
import { URL_TRIBO } from '../data/conteudo'
import { CardPreco } from './CardPreco'
import { ListaRecebe } from './Recebe'
import { Marca } from './ui/Marca'
import { Revelar } from './ui/Revelar'
import { Secao, TITULO_SECAO } from './ui/Secao'

const PASSOS = [
  {
    titulo: 'Abra o e-mail da Kiwify',
    texto: 'Ele chega em alguns minutos. Se não estiver na caixa de entrada, procure em promoções e no spam.',
  },
  {
    titulo: 'Entre na área de membros',
    texto: 'É lá que estão o .zip com o vault completo e o guia de início em PDF.',
  },
  {
    titulo: 'Siga o guia',
    texto: 'São cerca de dez minutos até a primeira vitória, com o prompt de despejo mental.',
  },
]

/** 1 · Confirmação primeiro: a compra deu certo e onde pegar o acesso. */
export function Confirmacao() {
  return (
    <header className="fundo-escuro px-4 pt-8 pb-16 sm:px-6 md:pb-20">
      <div className="mx-auto w-full max-w-6xl">
        <Marca className="text-lg text-[#e8efec]" />
        <div className="mt-14 md:mt-16">
          <p className="inline-flex items-center gap-2 rounded-full bg-menta/15 px-4 py-2 font-mono text-sm text-menta ring-1 ring-menta/30">
            <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 10.5l4 4 8-9" />
            </svg>
            compra confirmada
          </p>
          <h1 className="mt-6 text-[clamp(2.5rem,9vw,4.25rem)] leading-[1.03] font-semibold tracking-[-0.04em] text-balance text-[#e8efec]">
            Seu Segundo Cérebro <span className="text-menta">já é seu.</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-suave-escuro">
            O acesso chega pela área de membros da Kiwify. Três passos e você começa hoje.
          </p>
        </div>

        <ol className="mt-10 grid gap-4 md:grid-cols-3">
          {PASSOS.map((p, i) => (
            <li key={p.titulo} className="rounded-2xl bg-white/[0.04] p-6 ring-1 ring-white/10">
              <p className="font-mono text-sm text-menta">{String(i + 1).padStart(2, '0')}</p>
              <h2 className="mt-2 text-xl font-semibold tracking-tight text-[#e8efec]">{p.titulo}</h2>
              <p className="mt-2 text-base leading-relaxed text-suave-escuro">{p.texto}</p>
            </li>
          ))}
        </ol>
      </div>
    </header>
  )
}

/** 2 a 6 · A ponte, o que tem dentro, preço e uma saída honesta. */
export function Convite() {
  const [recusou, setRecusou] = useState(false)

  return (
    <>
      <Secao id="convite" numero="antes de você ir" tom="claro">
        <div className="max-w-3xl">
          <Revelar>
            <h2 className={TITULO_SECAO}>O template resolve o hoje. A Tribo resolve o continuar.</h2>
          </Revelar>
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-suave-claro">
            <Revelar>
              <p>
                Você acabou de fazer a parte mais difícil: decidir tentar de novo. Agora vem a parte em que a maioria
                para, lá pela terceira semana, quando a rotina aperta e ninguém percebe que você sumiu.
              </p>
            </Revelar>
            <Revelar>
              <p className="text-tinta">
                A Tribo existe pra essa parte. Um encontro ao vivo por mês, um desafio por mês e um grupo pequeno que
                espera você aparecer.
              </p>
            </Revelar>
          </div>
        </div>

        <div className="mt-12 grid items-start gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-12">
          <ListaRecebe compacta />
          <Revelar atraso={0.1}>
            <div id="preco">
              <CardPreco upsell />
            </div>
          </Revelar>
        </div>

        <div className="mt-10 text-center" aria-live="polite">
          {recusou ? (
            <p className="mx-auto max-w-xl text-lg leading-relaxed text-suave-claro">
              Combinado. Bom proveito com o seu Segundo Cérebro. Se mudar de ideia, a Tribo fica em{' '}
              <a className="font-semibold text-tinta underline decoration-menta-escura underline-offset-4" href={URL_TRIBO}>
                tribo.prumo.digital
              </a>
              .
            </p>
          ) : (
            <button
              type="button"
              onClick={() => setRecusou(true)}
              className="min-h-12 rounded-xl px-6 text-base font-medium text-suave-claro underline decoration-tinta/30 underline-offset-4 hover:text-tinta"
            >
              Agora não, quero usar o template primeiro
            </button>
          )}
        </div>
      </Secao>
    </>
  )
}
