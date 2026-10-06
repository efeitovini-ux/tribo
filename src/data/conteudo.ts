/** Checkout da assinatura da Tribo na Kiwify. */
export const CHECKOUT_TRIBO = 'https://pay.kiwify.com.br/y9DYLJ1'

/**
 * Código do upsell de 1 clique da Kiwify (Produto Meu Segundo Cérebro → Upsell → código do botão).
 * Enquanto estiver vazio, o botão da página /obrigado leva ao checkout normal da assinatura.
 */
export const UPSELL_HTML = ''

/** Página de venda do Meu Segundo Cérebro. */
export const URL_SEGUNDO_CEREBRO = 'https://prumo.digital/'
export const INSTAGRAM_URL = 'https://www.instagram.com/efeitovini/'
export const URL_TRIBO = 'https://tribo.prumo.digital/'

export const PRECO = 'R$ 39'
export const RESPONSAVEL = 'Vinicius Henrique'
export const EMAIL_CONTATO = 'efeitovini@gmail.com'

export const CANCELAMENTO =
  'Cancele quando quiser pelo painel. Você continua com acesso até o fim do período pago. Sem multa, sem fidelidade.'

export const GARANTIA =
  'Você tem 7 dias, a partir da assinatura, para pedir o reembolso pela Kiwify. O valor volta integral.'

/** As mesmas nove áreas do vault do Meu Segundo Cérebro, cada uma com um canal no Discord. */
export const AREAS = [
  {
    nome: 'Trabalho',
    texto: 'Como cada pessoa da Tribo guarda o contexto de cada frente e volta a um projeto sem gastar vinte minutos lembrando onde parou.',
    desafio: 'Uma semana fechando cada sessão de trabalho com o prompt de fechamento.',
  },
  {
    nome: 'Projetos',
    texto: 'Projeto parado na metade é o que mais aparece. Aqui ele ganha um próximo passo e alguém perguntando por ele.',
    desafio: 'Escolher um projeto parado e dar três passos nele em trinta dias.',
  },
  {
    nome: 'Finanças',
    texto: 'Contas, metas e decisões de dinheiro anotadas com o porquê, pra você não decidir a mesma coisa duas vezes.',
    desafio: 'Um mês registrando cada decisão de dinheiro e o motivo dela.',
  },
  {
    nome: 'Saúde',
    texto: 'Sono, treino e consultas num lugar que você abre todo dia, com gente que também está tentando manter a rotina.',
    desafio: 'Trinta dias anotando sono e energia, e vendo o que muda quando você olha pra isso.',
  },
  {
    nome: 'Casa',
    texto: 'Manutenção, compras e os combinados com quem mora junto, sem depender de você lembrar de tudo.',
    desafio: 'Montar a lista de manutenção da casa e resolver um item por semana.',
  },
  {
    nome: 'Estudos',
    texto: 'Indicação de livros, anotações de leitura e o que cada um está aprendendo, trocado entre a Tribo.',
    desafio: 'Ler um livro no mês e transformar ele em cinco notas que você reencontra.',
  },
  {
    nome: 'Relações',
    texto: 'As pessoas que importam, as datas e as conversas que ficaram pra depois, guardadas pra você não esquecer de ninguém.',
    desafio: 'Retomar três conversas que ficaram pra depois.',
  },
  {
    nome: 'Ideias',
    texto: 'O canal pra soltar a ideia antes que ela suma e ouvir o que a Tribo acha dela.',
    desafio: 'Tirar uma ideia da gaveta e levar até um primeiro teste.',
  },
  {
    nome: 'Revisão',
    texto: 'Olhar pra trás e pra frente junto com outras pessoas, todo fim de mês, em vez de sozinho num domingo à noite.',
    desafio: 'Fazer a revisão do mês com o prompt novo e dividir um aprendizado com a Tribo.',
  },
] as const

/** O ritmo do mês: é ele que faz a pessoa voltar. */
export const RITMO = [
  {
    semana: 'Semana 1',
    titulo: 'Desafio do mês',
    texto: 'Abre o desafio, com um prompt feito pra ele. Uma área da vida, um objetivo simples, trinta dias.',
  },
  {
    semana: 'Semana 2',
    titulo: 'Encontro ao vivo',
    texto: 'Comigo. A gente olha o desafio, responde dúvidas e mostra o vault funcionando de verdade. A data sai no Discord com antecedência.',
  },
  {
    semana: 'Semana 3',
    titulo: 'Roda',
    texto: 'Seu grupo pequeno se encontra. Cada um leva o que travou e sai com um próximo passo.',
  },
  {
    semana: 'Semana 4',
    titulo: 'Estante e revisão',
    texto: 'Um livro indicado e como levar a ideia dele pro vault. A revisão do mês, juntos. E chega a atualização do template.',
  },
] as const

/** O que o assinante recebe, sem inflar. */
export const RECEBE = [
  { titulo: 'Um encontro ao vivo por mês', texto: 'Na segunda semana do mês, comigo.' },
  { titulo: 'Um desafio por mês', texto: 'Com prompt próprio e uma área da vida por vez.' },
  { titulo: 'Atualizações do template e prompts novos', texto: 'O seu vault melhora junto com o meu.' },
  { titulo: 'Conteúdo curto ao longo do mês', texto: 'Vídeos e textos rápidos, pra usar no mesmo dia.' },
  {
    titulo: 'Comunidade organizada por áreas',
    texto: 'No Discord, um canal para cada área do vault, e a sua Roda, o grupo pequeno que segura você.',
  },
] as const

export const DUVIDAS: { pergunta: string; resposta: string }[] = [
  {
    pergunta: 'Preciso ter o Meu Segundo Cérebro?',
    resposta:
      'Não é obrigatório, mas é a base. Os desafios e os prompts novos usam o template. Se você ainda não tem, ele está em prumo.digital.',
  },
  {
    pergunta: 'Como funciona o cancelamento?',
    resposta: CANCELAMENTO,
  },
  {
    pergunta: 'E se eu entrar e não gostar?',
    resposta: GARANTIA,
  },
  {
    pergunta: 'Quando é o encontro ao vivo?',
    resposta: 'Na segunda semana de cada mês. A data e o horário saem no Discord com antecedência.',
  },
  {
    pergunta: 'O que é a Roda?',
    resposta:
      'Um grupo pequeno e fixo, de cinco a seis pessoas com objetivos parecidos, que se encontra uma vez por mês. Cada um leva o que travou, os outros ajudam, e todo mundo sai com um próximo passo.',
  },
  {
    pergunta: 'Nunca usei Discord. Vou conseguir?',
    resposta:
      'Vai. O Discord é gratuito e funciona no celular e no computador. Assim que você assina, recebe o convite pra entrar, e os canais seguem as mesmas áreas do seu vault.',
  },
  {
    pergunta: 'Quanto custa?',
    resposta: 'R$ 39 por mês, cobrado pela Kiwify. Sem taxa de entrada e sem fidelidade.',
  },
]

export const NOTA_RODAPE =
  'A Tribo é uma comunidade de organização pessoal. Não substitui acompanhamento profissional e não promete resultado clínico.'
