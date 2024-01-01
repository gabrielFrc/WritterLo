import Nav from "./components/navigation/nav"
import Footer from "./components/footer/foot"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <div className="relative z-0 pt-[80px] md:p-0 overflow-hidden">
        <div className="scale-150 md:scale-100">
          <Image
            src='/images/landing-literature.jpg'
            width={0}
            height={0}
            alt="Picture of the author"
            sizes="100vw"
            style={{ width: '100vw', height: 'auto' }}
          />
        </div>
        
        <div className="absolute flex flex-col justify-center items-center top-20 bottom-0 left-0 right-0">
          <h1 className="text-3xl text-center text-white font-extralight mx-6 mb-4">Hello user, welcome to the free writting website!</h1>
          <a href="" className="block"><button className="border px-4 py-2 rounded text-xl font-semibold text-zinc-950 border-skygold hover:invert hover:bg-white transition ease-out duration-500">
              READ here!
            </button></a>
        </div>
      </div>
      <div className="flex justify-center md:justify-around mt-36 mx-6 text-center flex-col md:flex-row">
        <div className="md:w-2/5">
          <h1>Best books here!</h1>
          <p>Over 130+ books from every theme. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates aspernatur quis quibusdam, assumenda, ad aliquam inventore eveniet unde cumque mollitia et fugit recusandae facilis velit laudantium quos sapiente! Labore, ipsa?</p>
          <p className="mt-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, laudantium necessitatibus aliquam culpa dignissimos rerum provident modi vitae harum quibusdam velit excepturi facilis nesciunt, esse quo, quia inventore numquam. Minus?</p>
        </div>
        <hr className="h-[.5px] w-auto bg-zinc-500 mx-4 my-8 md:h-auto md:w-[.5px] md:m-0"/>
        <div className="md:w-2/5">
          <p className="w-full block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nihil delectus ducimus dolor sit cum facere officiis nesciunt impedit sequi eius molestias, rem numquam aspernatur culpa? Rerum beatae praesentium ipsam! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta necessitatibus laborum illum voluptatibus, deserunt vel minus numquam ipsum architecto cum facere ab eum voluptas quis ad quaerat, commodi repellat labore?</p>
          <p className="mt-20">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, nam suscipit aliquam dolorum velit laboriosam itaque quas unde numquam laudantium doloremque sequi tempora, earum ipsam in vel provident, vitae iusto. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias molestiae nesciunt sint at! Numquam sequi tempora dolor neque, consectetur natus obcaecati quo enim sed cumque at ipsa, perspiciatis, fuga ratione?
          </p>
        </div>
      </div>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}
