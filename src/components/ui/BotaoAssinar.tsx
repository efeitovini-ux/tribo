import { CHECKOUT_TRIBO } from '../../data/conteudo'

type Props = {
  children: string
  tamanho?: 'grande' | 'medio'
  className?: string
}

/** Botão menta que leva à assinatura da Tribo na Kiwify. */
export function BotaoAssinar({ children, tamanho = 'grande', className = '' }: Props) {
  const tamanhoClasses = tamanho === 'grande' ? 'min-h-16 px-8 py-4 text-lg sm:text-xl' : 'min-h-12 px-6 py-3 text-base'
  return (
    <a
      href={CHECKOUT_TRIBO}
      className={`inline-flex max-w-full items-center justify-center rounded-xl bg-menta text-center font-sans font-bold text-tinta shadow-[0_12px_32px_-12px_rgb(94_211_179/0.7)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#74dcc0] motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${tamanhoClasses} ${className}`}
    >
      {children}
    </a>
  )
}
