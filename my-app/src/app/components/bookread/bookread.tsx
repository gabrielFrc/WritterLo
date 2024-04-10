import { useBookData } from "@/app/BooksAPI/fetchbook";

export default function BookRead({bookid} : { bookid: string }) {
    const { data } = useBookData();
    
    let book;
    if(data != null){
        const result = data.find(({ id } : { id : number}) => id === parseInt(bookid));
        book = result;
    }

    return (
        <>
            {book ? <div className="flex items-center flex-col">
                <h1 className="my-10 text-2xl">{book.name}</h1>
                <img src={book.image_url ? (book.image_url) : '/images/nobook.png'} width={374} height={480} alt="book" />
                <h3 className="my-20 mx-20 md:mx-36 text-xl">
                    {'Story resume: ' + book.resumo}
                </h3>
                <h3 className="text-xl mt-14">Get now for</h3>
                <button className="border border-2 border-black shadow-md rounded-xl bg-neutral-800 text-white hover:bg-neutral-300 hover:text-black transition-all duration-200 py-4 px-14">{book.price > 0 ? book.price + ' $' : 'Free!'}</button>
            </div> : <div className="h-[80vh]"><p>1</p></div>}
            <h1 className="ml-4">Book ID: {bookid}</h1>
        </>
    )
}