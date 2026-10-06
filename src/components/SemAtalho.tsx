import { Revelar } from './ui/Revelar'
import { REMATE, Secao, TITULO_SECAO } from './ui/Secao'

export function SemAtalho() {
  return (
    <Secao id="sem-atalho" numero="07" tom="claro">
      <div className="max-w-3xl">
        <Revelar>
          <h2 className={TITULO_SECAO}>Pra quem já entendeu que não tem atalho.</h2>
        </Revelar>
        <div className="mt-10 space-y-6 text-lg leading-relaxed text-suave-claro">
          <Revelar>
            <p>
              Se você procura uma fórmula pra virar a vida em trinta dias, a Tribo não é pra você. Aqui ninguém
              promete milagre, e quem promete está vendendo outra coisa.
            </p>
          </Revelar>
          <Revelar>
            <p>
              O que tem é repetição. Um mês depois do outro, abrindo o vault, fazendo o desafio, aparecendo na
              Roda. É chato de explicar e bonito de ver acontecer: quem fica três meses olha pra trás e vê o quanto
              andou.
            </p>
          </Revelar>
        </div>
        <Revelar className="mt-12">
          <p className={REMATE}>A Tribo não promete mudar sua vida em um mês. Promete que no mês que vem você ainda vai estar aqui.</p>
        </Revelar>
      </div>
    </Secao>
  )
}
