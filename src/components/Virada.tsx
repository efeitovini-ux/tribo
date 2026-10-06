import { Revelar } from './ui/Revelar'
import { Secao, TITULO_SECAO } from './ui/Secao'

const PILARES = [
  { titulo: 'Ritmo', texto: 'Todo mês tem começo, meio e fim. Você sabe o que fazer em cada semana.' },
  { titulo: 'Gente', texto: 'Pessoas com o mesmo objetivo, trocando livro, ideia e caminho.' },
  { titulo: 'Sistema vivo', texto: 'O template e os prompts melhoram todo mês, e você recebe junto.' },
]

export function Virada() {
  return (
    <Secao id="virada" numero="02" tom="escuro">
      <Revelar>
        <h2 className={`${TITULO_SECAO} max-w-3xl text-[#e8efec]`}>Um lugar pra voltar quando a força de vontade some.</h2>
      </Revelar>
      <div className="mt-10 max-w-2xl space-y-6 text-lg leading-relaxed text-suave-escuro">
        <Revelar>
          <p>
            A Tribo não é mais um conteúdo pra você assistir e esquecer. É um ambiente com ritmo: todo mês tem um
            desafio, um encontro marcado e um grupo pequeno esperando você aparecer.
          </p>
        </Revelar>
        <Revelar>
          <p className="text-[#e8efec]">
            Quando você some, alguém percebe. Quando você trava, alguém já passou por isso.
          </p>
        </Revelar>
      </div>

      <ul className="mt-14 grid gap-5 md:grid-cols-3">
        {PILARES.map((p, i) => (
          <Revelar como="li" atraso={i * 0.08} key={p.titulo} className="rounded-2xl bg-white/[0.04] p-6 ring-1 ring-white/10 sm:p-8">
            <p className="flex items-center gap-2 font-mono text-sm text-menta" aria-hidden="true">
              <span className="size-2 rounded-full bg-menta" />
              {String(i + 1).padStart(2, '0')}
            </p>
            <h3 className="mt-3 text-xl font-semibold tracking-tight text-[#e8efec]">{p.titulo}</h3>
            <p className="mt-2 text-base leading-relaxed text-suave-escuro">{p.texto}</p>
          </Revelar>
        ))}
      </ul>
    </Secao>
  )
}
