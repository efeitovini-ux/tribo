import { useRef } from 'react'
import { LazyMotion, MotionConfig, domAnimation } from 'framer-motion'
import { Hero } from './components/Hero'
import { FaixaAreas } from './components/FaixaAreas'
import { Problema } from './components/Problema'
import { Virada } from './components/Virada'
import { Areas } from './components/Areas'
import { Ritmo } from './components/Ritmo'
import { Roda } from './components/Roda'
import { Recebe } from './components/Recebe'
import { SemAtalho } from './components/SemAtalho'
import { QuemConduz } from './components/QuemConduz'
import { Preco } from './components/Preco'
import { Duvidas } from './components/Duvidas'
import { Rodape } from './components/Rodape'
import { BarraMovel } from './components/BarraMovel'

/** Página de venda da Tribo: anúncio, bio, divulgação. */
export default function App() {
  const heroRef = useRef<HTMLElement>(null)
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <Hero ref={heroRef} />
        <main id="conteudo">
          <FaixaAreas />
          <Problema />
          <Virada />
          <Areas />
          <Ritmo />
          <Roda />
          <Recebe />
          <SemAtalho />
          <QuemConduz />
          <Preco />
          <Duvidas />
        </main>
        <Rodape />
        <BarraMovel alvo={heroRef} />
      </MotionConfig>
    </LazyMotion>
  )
}
