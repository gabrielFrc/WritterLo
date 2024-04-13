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
          <p>Books are treasures of humanity, carriers of knowledge, imagination, and wisdom. Since the dawn of civilization, books have played a fundamental role in disseminating ideas, preserving history, and expanding human thought. <br />

            A book is much more than a set of bound pages; it is a gateway to other worlds, a window into the author's mind, and a bridge to knowledge. Each book tells a unique story, whether fictional or based on real-life events, and offers the reader the opportunity to venture into new places, meet fascinating characters, and explore uncharted ideas.</p>
          <p className="mt-20">Furthermore, books are an endless source of learning. They cover a wide variety of topics and disciplines, from science and history to art and philosophy, allowing readers to broaden their horizons and deepen their understanding of the world around them.

            Books also have the power to inspire and transform lives. A single work can deeply touch someone's heart, awaken new passions, challenge old beliefs, and motivate significant changes. They are capable of generating empathy, promoting dialogue, and connecting people from different backgrounds and cultures.</p>
        </div>
        <hr className="h-[.5px] w-auto bg-zinc-500 mx-4 my-8 md:h-auto md:w-[.5px] md:m-0" />
        <div className="md:w-2/5">
          <p className="w-full block">Books are a way of preserving the history and culture of a society. They document important events, traditions, and customs of an era, ensuring that future generations can learn from the past and build a better future.

            In summary, books are true treasures that enrich our lives in countless ways. They challenge us, inspire us, educate us, and connect us to each other, becoming inseparable companions on our journey through life.</p>
          <p className="mt-20">
            Reading is an enriching activity that offers a wide range of benefits for the mind, body, and soul. Here are some compelling reasons why we should read regularly:

            Expand Knowledge: Reading exposes us to a vast amount of information, ideas, and different perspectives. Through books, we can learn about any subject that interests us, from history and science to philosophy and world literature.

            Stimulate Imagination: Books have the power to transport readers to other worlds, times, and realities. They stimulate our imagination and creativity, allowing us to experience exciting adventures and thrilling experiences without leaving our seats.

            Develop Cognitive Skills: Regular reading helps strengthen the brain and improve cognitive skills such as reading comprehension, critical thinking, concentration, and problem-solving abilities.

            Reduce Stress: Immersing ourselves in a good book can be an effective way to escape from the stress and worries of everyday life. Reading relaxes the mind and body, lowering cortisol levels and promoting a sense of calm and tranquility.
          </p>
        </div>
      </div>

    </>
  )
}
