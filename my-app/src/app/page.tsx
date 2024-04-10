import Image from "next/image"

export default function Home() {
  return (
    <>
      <div className="relative z-0 pt-[80px] md:p-0 overflow-hidden">
        <div className="scale-150 md:scale-100 bg-white">
          <Image
            src='/images/heropage.png'
            width={0}
            height={0}
            quality={75}
            priority
            alt="Picture of the author"
            sizes="100vw"
            style={{ width: '100vw', height: 'auto' }}
          />
          <div className="top-0 w-full h-full absolute z-10 bg-gradient-to-t to-transparent via-transparent via-transparent from-skylight">
          </div>
        </div>

        <div className="absolute flex flex-col justify-center items-center top-20 bottom-0 left-0 right-0">
          <h1 className="text-3xl text-center text-[#5B4218] font-extralight mx-6 mb-4">Hello user, welcome to the free writting website!</h1>
          <a href="/read" className="block"><button className="px-4 py-2 rounded text-xl font-semibold text-[#5B4218] bg-[rgba(255,255,255,.5)] shadow-xl hover:bg-white transition ease-out duration-500 ">
            Read here!
          </button></a>
        </div>
      </div>
      <div className="flex justify-center md:justify-around mt-36 mx-6 text-center flex-col md:flex-row">
        <div className="md:w-2/5">
          <p>Os livros são tesouros da humanidade, portadores de conhecimento, imaginação e sabedoria. Desde os primórdios da civilização, os livros têm desempenhado um papel fundamental na disseminação de ideias, na preservação da história e na expansão do pensamento humano. <br />

            Um livro é muito mais do que um conjunto de páginas encadernadas; é uma porta de entrada para outros mundos, uma janela para a mente do autor e uma ponte para o conhecimento. Cada livro conta uma história única, seja ela ficcional ou baseada em fatos reais, e oferece ao leitor a oportunidade de se aventurar em novos lugares, conhecer personagens fascinantes e explorar ideias inexploradas.</p>
          <p className="mt-20">Além disso, os livros são uma fonte inesgotável de aprendizado. Eles abrangem uma ampla variedade de tópicos e disciplinas, desde ciência e história até arte e filosofia, permitindo que os leitores ampliem seus horizontes e aprofundem seu entendimento sobre o mundo ao seu redor.

            Os livros também têm o poder de inspirar e transformar vidas. Uma única obra pode tocar profundamente o coração de alguém, despertar novas paixões, desafiar crenças antigas e motivar mudanças significativas. Eles são capazes de gerar empatia, promover o diálogo e conectar pessoas de diferentes origens e culturas.</p>
        </div>
        <hr className="h-[.5px] w-auto bg-zinc-500 mx-4 my-8 md:h-auto md:w-[.5px] md:m-0" />
        <div className="md:w-2/5">
          <p className="w-full block">Os livros são uma forma de preservar a história e a cultura de uma sociedade. Eles documentam os eventos importantes, as tradições e os costumes de uma época, garantindo que as gerações futuras possam aprender com o passado e construir um futuro melhor.

            Em resumo, os livros são verdadeiros tesouros que enriquecem nossas vidas de inúmeras maneiras. Eles nos desafiam, nos inspiram, nos educam e nos conectam uns aos outros, tornando-se companheiros inseparáveis ​​em nossa jornada pela vida.</p>
          <p className="mt-20">
            A leitura é uma atividade enriquecedora que oferece uma ampla gama de benefícios para a mente, o corpo e a alma. Aqui estão algumas razões convincentes pelas quais deveríamos ler regularmente:

            Expandir o Conhecimento: A leitura nos expõe a uma vasta quantidade de informações, ideias e perspectivas diferentes. Por meio dos livros, podemos aprender sobre qualquer assunto que nos interesse, desde história e ciência até filosofia e literatura mundial.

            Estimular a Imaginação: Os livros têm o poder de transportar os leitores para outros mundos, épocas e realidades. Eles estimulam nossa imaginação e criatividade, permitindo-nos vivenciar aventuras emocionantes e experiências emocionantes sem sair do lugar.

            Desenvolver Habilidades Cognitivas: A leitura regular ajuda a fortalecer o cérebro e a melhorar as habilidades cognitivas, como compreensão de leitura, pensamento crítico, concentração e habilidades de resolução de problemas.

            Reduzir o Estresse: A imersão em um bom livro pode ser uma forma eficaz de escapar do estresse e das preocupações do dia a dia. A leitura relaxa a mente e o corpo, diminuindo os níveis de cortisol e promovendo uma sensação de calma e tranquilidade.
          </p>
        </div>
      </div>
    </>
  )
}
