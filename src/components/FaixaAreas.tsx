import { AREAS } from '../data/conteudo'

/** Faixa correndo com as nove áreas da vida, como uma vitrine do que a Tribo cobre. */
export function FaixaAreas() {
  const itens = AREAS.map((a) => a.nome)
  const linha = (oculta: boolean) => (
    <ul className="flex shrink-0 items-center gap-6 pr-6" aria-hidden={oculta || undefined}>
      {itens.map((nome) => (
        <li key={nome} className="flex items-center gap-6 whitespace-nowrap">
          <span className="text-xl font-semibold tracking-tight sm:text-2xl">{nome}</span>
          <span className="size-2 rounded-full bg-menta-escura" aria-hidden="true" />
        </li>
      ))}
    </ul>
  )
  return (
    <section aria-label="As nove áreas da vida que a Tribo trabalha" className="fundo-claro overflow-hidden border-b border-tinta/10 py-6">
      <div className="faixa-corre flex w-max">
        {linha(false)}
        {linha(true)}
      </div>
    </section>
  )
}
