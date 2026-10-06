import { RedeTribo } from './ui/RedeTribo'
import { Revelar } from './ui/Revelar'
import { Secao, TITULO_SECAO } from './ui/Secao'

export function Roda() {
  return (
    <Secao id="roda" numero="05" tom="escuro">
      <div className="grid items-center gap-12 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:gap-16">
        <div>
          <Revelar>
            <p className="font-serif text-xl text-suave-escuro italic sm:text-2xl">O grupo pequeno que segura você</p>
            <h2 className={`${TITULO_SECAO} mt-3 text-[#e8efec]`}>A Roda</h2>
          </Revelar>
          <div className="mt-8 max-w-xl space-y-6 text-lg leading-relaxed text-suave-escuro">
            <Revelar>
              <p>
                Dentro da Tribo, você entra numa Roda: um grupo fixo de cinco a seis pessoas com objetivos
                parecidos com os seus. Uma vez por mês vocês se encontram.
              </p>
            </Revelar>
            <Revelar>
              <p>
                Cada um leva o que travou, os outros ajudam a destravar, e todo mundo sai com um próximo passo e
                alguém pra quem contar se cumpriu.
              </p>
            </Revelar>
            <Revelar>
              <p>
                É ali que nasce o network de verdade: gente indicando livro, trocando caminho, abrindo porta uma pra
                outra.
              </p>
            </Revelar>
            <Revelar>
              <p className="text-xl font-semibold text-[#e8efec]">Comunidade grande inspira. Grupo pequeno sustenta.</p>
            </Revelar>
          </div>
        </div>
        <Revelar atraso={0.15}>
          <RedeTribo />
        </Revelar>
      </div>
    </Secao>
  )
}
