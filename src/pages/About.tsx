import RsvpIllustration from "../components/RsvpIllustration";

const About = () => {
  return (
    <section className="mx-auto max-w-3xl p-6">
      <h1 className="text-3xl font-bold mb-4">Sobre o Software de Leitura Dinâmica</h1>
      <p className="mb-4">
        Nosso software oferece uma solução inovadora para quem deseja ler grandes 
        quantidades de texto de forma mais rápida e eficiente. Ele se baseia em uma 
        técnica de leitura dinâmica que reduz o esforço de movimentação ocular e 
        otimiza o foco do leitor, utilizando o método <strong>RSVP (Rapid Serial Visual Presentation)</strong>.
        A seguir, apresentamos como funciona esse processo e por que ele é tão eficaz.
      </p>

      <RsvpIllustration />

      <h2 className="text-2xl font-semibold mt-8 mb-2">1. Segmentação do Texto</h2>
      <ul className="list-disc list-inside mb-4">
        <li>O usuário insere o texto que deseja ler no software.</li>
        <li>
          Em seguida, o programa faz a divisão (segmentação) das palavras ou dos blocos
          de palavras, preparando o conteúdo para a exibição dinâmica.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-2">2. Ajuste de Frequência</h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          Antes de iniciar a leitura, o usuário define a velocidade (frequência) de
          apresentação, que determina quantas palavras são exibidas por minuto 
          (<strong>WPM - words per minute</strong>).
        </li>
        <li>
          Cada palavra ou bloco de palavras será exibido na tela por um intervalo de
          tempo calculado a partir dessa configuração.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-2">
        3. Exibição Dinâmica (<em>RSVP</em>)
      </h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          As palavras são mostradas de forma sequencial, uma de cada vez (ou em pequenos
          blocos), sempre no centro da tela. Assim, o leitor não precisa percorrer linhas
          inteiras com os olhos, pois a informação “vem até ele” no mesmo ponto fixo.
        </li>
        <li>
          Para aprimorar a concentração, o software destaca um <strong>ponto focal</strong> 
          no centro de cada palavra. Esse recurso ajuda o leitor a se habituar rapidamente 
          à região mais importante do vocábulo, melhorando a fixação visual.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-2">4. Personalização</h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          O usuário pode ajustar livremente a velocidade de leitura, aumentando ou 
          diminuindo o WPM conforme a dificuldade do texto ou o seu nível de conforto.
        </li>
        <li>
          É possível ainda personalizar aspectos visuais, como tamanho e cor da fonte, 
          estilo de exibição e outras preferências, garantindo maior acessibilidade e 
          adequação às necessidades de cada leitor.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-2">
        Por que essa técnica acelera a leitura?
      </h2>
      <div className="mb-4">
        <h3 className="text-lg font-bold mt-4">Menos movimento ocular</h3>
        <p className="ml-4">
          Na leitura convencional, nossos olhos percorrem cada palavra ao longo de 
          uma linha de texto. Com a técnica RSVP, as palavras surgem em um único ponto 
          na tela, reduzindo drasticamente a movimentação ocular e economizando tempo.
        </p>

        <h3 className="text-lg font-bold mt-4">Foco na informação</h3>
        <p className="ml-4">
          O ponto focal central ajuda a direcionar o olhar para a parte essencial de 
          cada palavra. Com a prática, o leitor passa a reconhecer mais rapidamente cada 
          vocábulo e aprimora a compreensão do texto.
        </p>

        <h3 className="text-lg font-bold mt-4">Ritmo Controlado</h3>
        <p className="ml-4">
          Cada pessoa pode começar em uma velocidade moderada e aumentar gradualmente, 
          desenvolvendo mais agilidade na leitura sem perder a compreensão. Dessa forma, 
          o treinamento se adapta ao ritmo individual de aprendizado.
        </p>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Principais Benefícios</h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          <strong>Aumento de Produtividade:</strong> Ideal para estudantes e profissionais 
          que precisam lidar com grandes volumes de texto em curto espaço de tempo.
        </li>
        <li>
          <strong>Concentração Aprimorada:</strong> A apresentação das palavras em sequência 
          mantém o foco do leitor no que está sendo exibido, evitando distrações.
        </li>
        <li>
          <strong>Leitura Personalizada:</strong> Com configurações adaptáveis, cada leitor 
          encontra seu próprio ritmo, personalizando a experiência de acordo com suas 
          necessidades.
        </li>
        <li>
          <strong>Adaptável a Diferentes Formatos:</strong> Pode ser utilizado para leitura 
          de artigos científicos, livros digitais, relatórios, documentos profissionais e 
          muito mais.
        </li>
      </ul>

      <p className="mt-4">
        Esse método de leitura dinâmica não apenas acelera o processo de leitura, como 
        também pode melhorar a compreensão e a retenção de conteúdo. O software oferece 
        uma ferramenta prática e eficiente para quem deseja aproveitar ao máximo seu 
        tempo e manter o foco em qualquer tipo de texto, tornando-o um recurso valioso 
        para estudantes, pesquisadores e profissionais de todas as áreas.
      </p>
    </section>
  );
};

export default About;
