import { CardPreco } from './CardPreco'
import { Revelar } from './ui/Revelar'
import { Secao } from './ui/Secao'

export function Preco() {
  return (
    <Secao id="preco" numero="09" tom="claro">
      <Revelar>
        <CardPreco />
      </Revelar>
    </Secao>
  )
}
