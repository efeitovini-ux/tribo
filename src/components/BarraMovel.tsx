import { useEffect, useState, type RefObject } from 'react'
import { AnimatePresence, m, useReducedMotion } from 'framer-motion'
import { CHECKOUT_TRIBO, PRECO } from '../data/conteudo'

/** Botão fixo no celular depois do topo; some enquanto o card de preço está na tela. */
export function BarraMovel({ alvo }: { alvo: RefObject<HTMLElement | null> }) {
  const [topoFora, setTopoFora] = useState(false)
  const [precoNaTela, setPrecoNaTela] = useState(false)
  const reduzir = useReducedMotion()

  useEffect(() => {
    const el = alvo.current
    if (!el) return
    const o1 = new IntersectionObserver(([e]) => setTopoFora(!e.isIntersecting))
    o1.observe(el)
    const preco = document.getElementById('preco')
    const o2 = new IntersectionObserver(([e]) => setPrecoNaTela(e.isIntersecting), { threshold: 0.15 })
    if (preco) o2.observe(preco)
    return () => {
      o1.disconnect()
      o2.disconnect()
    }
  }, [alvo])

  return (
    <AnimatePresence>
      {topoFora && !precoNaTela && (
        <m.div
          initial={reduzir ? false : { y: '100%' }}
          animate={{ y: 0 }}
          exit={reduzir ? undefined : { y: '100%' }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-tinta/95 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur md:hidden"
        >
          <a
            href={CHECKOUT_TRIBO}
            className="flex min-h-12 w-full items-center justify-center rounded-xl bg-menta px-6 text-center text-lg font-bold text-tinta"
          >
            {`Entrar na Tribo — ${PRECO}/mês`}
          </a>
        </m.div>
      )}
    </AnimatePresence>
  )
}
