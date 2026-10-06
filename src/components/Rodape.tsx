import { INSTAGRAM_URL, NOTA_RODAPE } from '../data/conteudo'
import { Marca } from './ui/Marca'

const link = 'inline-flex min-h-11 items-center text-[#e8efec] underline decoration-white/40 underline-offset-4 hover:decoration-menta'

export function Rodape({ espacoBarra = true }: { espacoBarra?: boolean }) {
  return (
    <footer className={`fundo-escuro px-4 pt-16 sm:px-6 md:pb-16 ${espacoBarra ? 'pb-32' : 'pb-16'}`}>
      <div className="mx-auto w-full max-w-6xl">
        <Marca className="text-2xl text-[#e8efec]" />
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-suave-escuro">{NOTA_RODAPE}</p>
        <nav aria-label="Links do rodapé" className="mt-8">
          <ul className="flex flex-col gap-x-8 gap-y-1 sm:flex-row sm:flex-wrap">
            <li>
              <a className={link} href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                Instagram @efeitovini
              </a>
            </li>
            <li>
              <a className={link} href="/termos/">
                Termos de uso
              </a>
            </li>
            <li>
              <a className={link} href="/privacidade/">
                Política de privacidade
              </a>
            </li>
          </ul>
        </nav>
        <p className="mt-12 border-t border-white/10 pt-6 font-mono text-sm text-suave-escuro">por Agência Prumo · 2026</p>
      </div>
    </footer>
  )
}
