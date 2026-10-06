import { EMAIL_CONTATO, RESPONSAVEL } from '../data/conteudo'
import { Clausula, PaginaLegal } from '../components/PaginaLegal'

export function Privacidade() {
  return (
    <PaginaLegal titulo="Política de privacidade" atualizacao="6 de outubro de 2026">
      <p className="text-lg leading-relaxed text-suave-claro">
        Esta política explica quais dados pessoais são coletados quando você visita esta página e assina a{' '}
        <strong className="text-tinta">Tribo</strong>, para que eles servem e quais são os seus direitos, de acordo
        com a Lei Geral de Proteção de Dados (Lei 13.709/2018). O responsável pelos dados é {RESPONSAVEL}, e o contato
        é {EMAIL_CONTATO}.
      </p>

      <Clausula numero="01" titulo="O resumo">
        <ul>
          <li>Esta página não tem formulário, não pede cadastro e não usa cookies de rastreamento nem ferramentas de análise de visitas.</li>
          <li>O pagamento acontece na Kiwify, e a comunidade fica no Discord.</li>
          <li>Não vendemos e não repassamos seus dados para publicidade.</li>
        </ul>
      </Clausula>

      <Clausula numero="02" titulo="Quando você visita a página">
        <p>
          <strong>Hospedagem.</strong> O site fica na Vercel, que registra dados técnicos de cada acesso, como endereço
          IP, tipo de navegador e páginas abertas, para manter o site seguro e funcionando.
        </p>
        <p>
          <strong>Fontes.</strong> As letras da página vêm do Google Fonts. Para carregá-las, seu navegador se conecta
          aos servidores do Google, que recebem o seu endereço IP.
        </p>
      </Clausula>

      <Clausula numero="03" titulo="Quando você assina">
        <p>
          A assinatura é feita na Kiwify, que coleta os dados necessários para a cobrança (como nome, e-mail, CPF e
          dados de pagamento) e cuida deles segundo a política dela. Nós não recebemos os dados do seu cartão.
        </p>
        <p>
          A Kiwify nos repassa apenas o necessário para liberar o acesso e dar suporte: seu nome, seu e-mail e as
          informações da assinatura.
        </p>
      </Clausula>

      <Clausula numero="04" titulo="Dentro da comunidade">
        <p>
          A comunidade fica no Discord. O que você publica lá fica visível para os outros membros e segue também a
          política de privacidade do Discord. Usamos seu nome de usuário apenas para organizar os canais e as Rodas.
        </p>
        <p>O vault que você usa no Obsidian continua no seu computador. Não temos acesso a ele.</p>
      </Clausula>

      <Clausula numero="05" titulo="Para que usamos seus dados">
        <ul>
          <li>liberar e manter o seu acesso;</li>
          <li>avisar sobre encontros, desafios e atualizações;</li>
          <li>organizar as Rodas;</li>
          <li>fazer o reembolso, se você pedir, e cumprir obrigações legais e fiscais.</li>
        </ul>
      </Clausula>

      <Clausula numero="06" titulo="Por quanto tempo guardamos">
        <p>
          Os dados da assinatura ficam guardados pelo tempo exigido pela lei, principalmente para fins fiscais.
          Quando você cancela, seu acesso ao Discord é encerrado no fim do período pago.
        </p>
      </Clausula>

      <Clausula numero="07" titulo="Seus direitos">
        <p>A qualquer momento, você pode pedir para:</p>
        <ul>
          <li>confirmar se temos dados seus e ver quais são;</li>
          <li>corrigir dados errados ou desatualizados;</li>
          <li>apagar dados que não precisamos mais guardar por lei;</li>
          <li>receber seus dados em formato que possa levar a outro serviço;</li>
          <li>saber com quem seus dados foram compartilhados.</li>
        </ul>
        <p>
          É só escrever para {EMAIL_CONTATO}. Se achar que algo está errado, você também pode procurar a Autoridade
          Nacional de Proteção de Dados (ANPD).
        </p>
      </Clausula>

      <Clausula numero="08" titulo="Mudanças nesta política">
        <p>Esta política pode ser atualizada. A data da última versão fica sempre no topo da página.</p>
      </Clausula>
    </PaginaLegal>
  )
}
