import { CANCELAMENTO, GARANTIA, PRECO, UPSELL_HTML } from '../data/conteudo'
import { BotaoAssinar } from './ui/BotaoAssinar'
import { Simbolo } from './ui/Marca'

/**
 * O card escuro do preço. Na página de obrigado, se o código do upsell de 1 clique
 * da Kiwify estiver preenchido, ele entra no lugar do botão.
 */
export function CardPreco({ upsell = false }: { upsell?: boolean }) {
  return (
    <div className="fundo-escuro mx-auto max-w-xl rounded-2xl px-6 py-12 text-center shadow-[0_40px_80px_-30px_rgb(14_23_21/0.55)] ring-1 ring-tinta sm:px-12 sm:py-14">
      <Simbolo tamanho={48} className="mx-auto text-[#e8efec]" />
      <h2 className="mt-5 text-[clamp(2rem,8vw,3rem)] leading-none font-semibold tracking-[-0.03em] text-[#e8efec]">Tribo</h2>
      <p className="mt-4 text-lg text-suave-escuro">Encontro ao vivo + desafio + Roda + Discord + atualizações</p>

      <div className="my-10 border-y border-white/10 py-8">
        <p className="leading-none font-semibold tracking-[-0.05em] text-menta">
          <span className="text-[clamp(4.5rem,22vw,7rem)]">{PRECO}</span>
          <span className="ml-1 text-2xl tracking-normal text-suave-escuro">/mês</span>
        </p>
      </div>

      {upsell && UPSELL_HTML ? (
        <div dangerouslySetInnerHTML={{ __html: UPSELL_HTML }} />
      ) : (
        <BotaoAssinar className="w-full">Quero entrar na Tribo</BotaoAssinar>
      )}

      <p className="mt-6 text-base leading-relaxed text-suave-escuro">{CANCELAMENTO}</p>
      <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 font-mono text-sm text-[#e8efec] ring-1 ring-white/10">
        <span className="size-2 rounded-full bg-menta" aria-hidden="true" />
        Garantia de 7 dias
      </p>
      <p className="sr-only">{GARANTIA}</p>
    </div>
  )
}
