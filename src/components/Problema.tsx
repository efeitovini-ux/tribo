import { Revelar } from './ui/Revelar'
import { Secao, TITULO_SECAO } from './ui/Secao'

export function Problema() {
  return (
    <Secao id="problema" numero="01" tom="claro">
      <div className="grid items-center gap-14 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] md:gap-16">
        <div>
          <Revelar>
            <h2 className={TITULO_SECAO}>Você não parou por falta de vontade.</h2>
          </Revelar>
          <div className="mt-10 max-w-xl space-y-6 text-lg leading-relaxed text-suave-claro">
            <Revelar>
              <p>
                Você monta o sistema num domingo à noite, cheio de gás. Na primeira semana, abre todo dia. Na
                segunda, abre quando lembra. Na terceira, a semana aperta, você pula dois dias e, quando volta, já
                não sabe mais onde estava. Fecha tudo, promete que segunda recomeça, e a segunda não chega.
              </p>
            </Revelar>
            <Revelar>
              <p>
                Esse ciclo cansa. E o pior nem é o tempo perdido. É a sensação de que o problema é você.
              </p>
            </Revelar>
            <Revelar>
              <p className="text-xl font-semibold text-tinta sm:text-2xl">
                Não é. Ninguém sustenta uma mudança sozinho por muito tempo.
              </p>
            </Revelar>
            <Revelar>
              <p>
                Atleta tem treinador. Escritor tem editor. Quem toca tudo sozinho tem a própria cabeça, às onze da
                noite, decidindo se vale a pena continuar.
              </p>
            </Revelar>
          </div>
        </div>

        <Revelar atraso={0.15}>
          <figure className="relative mx-auto max-w-sm -rotate-2 md:max-w-none">
            <span
              aria-hidden="true"
              className="absolute -top-3 left-1/2 z-10 h-7 w-28 -translate-x-1/2 rotate-3 rounded-[2px] bg-white/60 shadow-sm"
            />
            <blockquote className="postit rounded-sm px-8 pt-12 pb-10 text-[clamp(1.9rem,6.5vw,2.6rem)] leading-[1.15] font-semibold">
              O template resolve o hoje. A Tribo resolve o continuar.
            </blockquote>
          </figure>
        </Revelar>
      </div>
    </Secao>
  )
}
