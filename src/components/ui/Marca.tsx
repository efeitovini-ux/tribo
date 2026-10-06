/** Símbolo da Tribo: três núcleos menta ligados entre si, cada um com seus pontos. Cada pessoa é um cérebro. */
export function Simbolo({ tamanho = 28, className = '' }: { tamanho?: number; className?: string }) {
  return (
    <svg viewBox="0 0 64 64" width={tamanho} height={tamanho} aria-hidden="true" className={className}>
      <g stroke="#5ED3B3" strokeWidth="3" strokeLinecap="round">
        <line x1="32" y1="16" x2="15" y2="44" />
        <line x1="32" y1="16" x2="49" y2="44" />
        <line x1="15" y1="44" x2="49" y2="44" />
      </g>
      <g stroke="#5ED3B3" strokeWidth="2" strokeLinecap="round" opacity="0.7">
        <line x1="32" y1="16" x2="32" y2="4" />
        <line x1="15" y1="44" x2="5" y2="53" />
        <line x1="49" y1="44" x2="59" y2="53" />
      </g>
      <g fill="currentColor">
        <circle cx="32" cy="4" r="3.5" />
        <circle cx="5" cy="54" r="3.5" />
        <circle cx="59" cy="54" r="3.5" />
      </g>
      <g fill="#5ED3B3">
        <circle cx="32" cy="16" r="7.5" />
        <circle cx="15" cy="44" r="7.5" />
        <circle cx="49" cy="44" r="7.5" />
      </g>
    </svg>
  )
}

export function Marca({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-3 font-sans font-semibold tracking-tight ${className}`}>
      <Simbolo />
      Tribo
    </span>
  )
}
