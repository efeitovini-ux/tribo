import { m, useReducedMotion } from 'framer-motion'

/*
 * A Tribo em imagem: vários cérebros (cada um um núcleo com seus pontos) ligados entre si.
 * O núcleo marcado "você" começa solto e se conecta à rede.
 */

type Pessoa = { x: number; y: number; pontos: [number, number][] }

const PESSOAS: Pessoa[] = [
  { x: 150, y: 120, pontos: [[-34, -26], [-40, 18], [10, -44]] },
  { x: 330, y: 95, pontos: [[30, -34], [46, 8], [-12, -40]] },
  { x: 440, y: 250, pontos: [[44, -20], [40, 30], [12, 46]] },
  { x: 300, y: 400, pontos: [[40, 30], [-10, 48], [46, -14]] },
  { x: 120, y: 330, pontos: [[-44, 10], [-30, 40], [-20, -40]] },
]
const VOCE = { x: 250, y: 255 }
const LIGACOES: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 0],
  [0, 2],
  [1, 3],
]

export function RedeTribo() {
  const reduzir = useReducedMotion()
  const anima = <T extends object>(props: T) => (reduzir ? {} : props)

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]" aria-hidden="true">
      <svg viewBox="0 0 520 520" className="h-full w-full overflow-visible">
        {/* ligações entre as pessoas */}
        <g stroke="#5ED3B3" strokeOpacity="0.4" strokeWidth="1.3">
          {LIGACOES.map(([a, b], i) => (
            <m.line
              key={`l${i}`}
              x1={PESSOAS[a].x}
              y1={PESSOAS[a].y}
              x2={PESSOAS[b].x}
              y2={PESSOAS[b].y}
              {...anima({
                initial: { pathLength: 0 },
                animate: { pathLength: 1 },
                transition: { duration: 1, delay: 0.2 + i * 0.1 },
              })}
            />
          ))}
        </g>

        {/* "você" se liga à rede depois que ela aparece */}
        <g stroke="#5ED3B3" strokeWidth="2" strokeLinecap="round">
          {PESSOAS.map((p, i) => (
            <m.line
              key={`v${i}`}
              x1={VOCE.x}
              y1={VOCE.y}
              x2={p.x}
              y2={p.y}
              strokeOpacity="0.75"
              {...anima({
                initial: { pathLength: 0 },
                animate: { pathLength: 1 },
                transition: { duration: 0.8, delay: 1.6 + i * 0.15, ease: 'easeOut' },
              })}
            />
          ))}
        </g>

        {/* sinais correndo entre as pessoas */}
        {!reduzir &&
          LIGACOES.map(([a, b], i) => (
            <m.circle
              key={`s${i}`}
              r="3"
              fill="#5ED3B3"
              initial={{ cx: PESSOAS[a].x, cy: PESSOAS[a].y, opacity: 0 }}
              animate={{
                cx: [PESSOAS[a].x, PESSOAS[b].x],
                cy: [PESSOAS[a].y, PESSOAS[b].y],
                opacity: [0, 1, 1, 0],
              }}
              transition={{ duration: 2, delay: 2.4 + i * 0.6, repeat: Infinity, repeatDelay: 3, ease: 'easeInOut' }}
            />
          ))}

        {/* cada pessoa: um núcleo com seus pontos */}
        {PESSOAS.map((p, i) => (
          <m.g
            key={`p${i}`}
            style={{ transformOrigin: `${p.x}px ${p.y}px` }}
            {...anima({
              initial: { scale: 0, opacity: 0 },
              animate: { scale: 1, opacity: 1 },
              transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
            })}
          >
            <g stroke="#5ED3B3" strokeOpacity="0.55" strokeWidth="1.2">
              {p.pontos.map(([dx, dy], j) => (
                <line key={j} x1={p.x} y1={p.y} x2={p.x + dx} y2={p.y + dy} />
              ))}
            </g>
            <g fill="#E8EFEC">
              {p.pontos.map(([dx, dy], j) => (
                <circle key={j} cx={p.x + dx} cy={p.y + dy} r="4" />
              ))}
            </g>
            <circle cx={p.x} cy={p.y} r="11" fill="#5ED3B3" />
          </m.g>
        ))}

        {/* você */}
        <m.g
          style={{ transformOrigin: `${VOCE.x}px ${VOCE.y}px` }}
          {...anima({
            initial: { scale: 0, opacity: 0 },
            animate: { scale: 1, opacity: 1 },
            transition: { duration: 0.6, delay: 1.2, ease: [0.22, 1, 0.36, 1] },
          })}
        >
          <m.circle
            cx={VOCE.x}
            cy={VOCE.y}
            r="30"
            fill="none"
            stroke="#5ED3B3"
            strokeOpacity="0.4"
            style={{ transformOrigin: `${VOCE.x}px ${VOCE.y}px` }}
            {...anima({
              animate: { scale: [1, 1.35, 1], opacity: [0.8, 0, 0.8] },
              transition: { duration: 3, repeat: Infinity, ease: 'easeOut', delay: 2 },
            })}
          />
          <circle cx={VOCE.x} cy={VOCE.y} r="15" fill="#F7DC85" />
          <text
            x={VOCE.x}
            y={VOCE.y + 42}
            textAnchor="middle"
            fill="#F7DC85"
            fontSize="17"
            fontFamily="'Caveat', cursive"
            fontWeight="600"
          >
            você
          </text>
        </m.g>
      </svg>
    </div>
  )
}
