import { CANCELAMENTO, EMAIL_CONTATO, GARANTIA, PRECO, RESPONSAVEL } from '../data/conteudo'
import { Clausula, PaginaLegal } from '../components/PaginaLegal'

export function Termos() {
  return (
    <PaginaLegal titulo="Termos de uso" atualizacao="6 de outubro de 2026">
      <p className="text-lg leading-relaxed text-suave-claro">
        Estes termos valem para quem assina a <strong className="text-tinta">Tribo</strong>, clube oferecido por{' '}
        {RESPONSAVEL}. Ao assinar, você concorda com eles. Dúvidas: {EMAIL_CONTATO}.
      </p>

      <Clausula numero="01" titulo="O que é a Tribo">
        <p>A Tribo é um clube por assinatura mensal para quem organiza a vida com o Meu Segundo Cérebro. Inclui:</p>
        <ul>
          <li>um encontro ao vivo por mês, na segunda semana do mês, com data e horário avisados no Discord;</li>
          <li>um desafio por mês;</li>
          <li>atualizações do template e prompts novos;</li>
          <li>conteúdo curto ao longo do mês;</li>
          <li>comunidade no Discord, organizada por áreas, e a participação numa Roda (grupo pequeno e fixo).</li>
        </ul>
      </Clausula>

      <Clausula numero="02" titulo="Preço e cobrança">
        <p>
          A assinatura custa <strong>{PRECO} por mês</strong>, cobrada de forma recorrente pela Kiwify, que segue os
          próprios termos e formas de pagamento. Não há taxa de entrada nem fidelidade.
        </p>
      </Clausula>

      <Clausula numero="03" titulo="Cancelamento">
        <p>{CANCELAMENTO}</p>
      </Clausula>

      <Clausula numero="04" titulo="Garantia e reembolso">
        <p>{GARANTIA}</p>
        <p>Esse prazo segue o direito de arrependimento do Código de Defesa do Consumidor (art. 49).</p>
      </Clausula>

      <Clausula numero="05" titulo="Convivência na comunidade">
        <p>A Tribo funciona porque as pessoas se respeitam. Dentro do Discord e da Roda:</p>
        <ul>
          <li>trate os outros membros com respeito;</li>
          <li>não divulgue produtos ou serviços sem combinar antes;</li>
          <li>não compartilhe fora da Tribo o que outro membro contou na Roda ou nos canais;</li>
          <li>não repasse o acesso, os materiais ou as gravações a quem não é assinante.</li>
        </ul>
        <p>Quem desrespeitar essas regras pode ter o acesso encerrado, com aviso.</p>
      </Clausula>

      <Clausula numero="06" titulo="Ferramentas de terceiros">
        <p>
          A Tribo usa o Discord e a Kiwify, e os materiais funcionam com o Obsidian, o ChatGPT e o Claude. Cada uma
          tem os próprios termos e regras de privacidade, e pode mudar sem aviso. Não respondemos por mudanças,
          falhas ou cobranças dessas ferramentas.
        </p>
      </Clausula>

      <Clausula numero="07" titulo="Resultados">
        <p>
          A Tribo é uma comunidade de organização pessoal. O resultado depende da sua participação. Ela não substitui
          acompanhamento profissional e não promete resultado clínico.
        </p>
      </Clausula>

      <Clausula numero="08" titulo="Direitos sobre o conteúdo">
        <p>
          Os materiais, desafios, prompts, gravações e a marca pertencem a {RESPONSAVEL}. A assinatura dá direito de
          uso pessoal enquanto estiver ativa.
        </p>
      </Clausula>

      <Clausula numero="09" titulo="Mudanças">
        <p>
          O formato dos encontros, dos desafios e da comunidade pode evoluir com o tempo. Mudanças de preço são
          avisadas com antecedência e só valem a partir do ciclo seguinte.
        </p>
      </Clausula>

      <Clausula numero="10" titulo="Lei e foro">
        <p>Estes termos seguem as leis do Brasil. Qualquer questão é resolvida no foro do domicílio do consumidor.</p>
      </Clausula>
    </PaginaLegal>
  )
}
