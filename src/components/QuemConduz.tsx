import { INSTAGRAM_URL } from '../data/conteudo'
import { Imagem } from './ui/Imagem'
import { Revelar } from './ui/Revelar'
import { Secao, TITULO_SECAO } from './ui/Secao'

export function QuemConduz() {
  return (
    <Secao id="quem-conduz" numero="08" tom="claro-alt">
      <div className="grid items-start gap-12 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-16">
        <Revelar className="mx-auto w-full max-w-sm md:max-w-none">
          <Imagem
            src="/imagens/vinicius.webp"
            largura={1122}
            altura={1402}
            alt="Vinicius, criador da Tribo e do Meu Segundo Cérebro, sentado numa cadeira de diretor lendo uma revista com o símbolo do Meu Segundo Cérebro na capa."
            className="shadow-[0_40px_80px_-40px_rgb(14_23_21/0.45)]"
          />
        </Revelar>
        <div>
          <Revelar>
            <h2 className={TITULO_SECAO}>Quem conduz</h2>
          </Revelar>
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-suave-claro">
            <Revelar>
              <p>
                Eu sou o Vinicius. Toco uma agência sozinho e criei o Meu Segundo Cérebro porque precisava dele.
              </p>
            </Revelar>
            <Revelar>
              <p>
                Usando todo dia, percebi uma coisa que nenhum template resolve: sozinho, até eu paro. O que me fez
                continuar não foi mais disciplina. Foi ter com quem conversar sobre o que eu estava fazendo.
              </p>
            </Revelar>
            <Revelar>
              <p className="text-tinta">
                A Tribo é o lugar que eu queria ter tido nos dez anos em que tentei me organizar sem ninguém do lado.
              </p>
            </Revelar>
          </div>
          <Revelar className="mt-10">
            <p className="font-mono text-sm text-suave-claro">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center underline decoration-menta-escura decoration-2 underline-offset-4 hover:text-tinta"
              >
                @efeitovini
              </a>{' '}
              · Agência Prumo
            </p>
          </Revelar>
        </div>
      </div>
    </Secao>
  )
}
