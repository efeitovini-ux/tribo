import { LazyMotion, MotionConfig, domAnimation } from 'framer-motion'
import { Confirmacao, Convite } from './components/Obrigado'
import { Duvidas } from './components/Duvidas'
import { Rodape } from './components/Rodape'

/** Página que abre depois da compra do Meu Segundo Cérebro: entrega primeiro, convite depois. */
export default function AppObrigado() {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <Confirmacao />
        <main id="conteudo">
          <Convite />
          <Duvidas />
        </main>
        <Rodape espacoBarra={false} />
      </MotionConfig>
    </LazyMotion>
  )
}
