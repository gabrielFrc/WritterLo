import { useBookData } from "@/app/BooksAPI/fetchbook";
import { useEffect } from "react";

export default function BookRead({bookid} : { bookid: string }) {
    const { data } = useBookData();

    useEffect(() => {
        console.log(data)
    },[data]);
    
    let book;
    if(data != null){
        const result = data.find(({ id } : { id : number}) => id === parseInt(bookid));
        book = result;
    }

    return (
        <>
            <a href="/read" className="pt-[80px] pl-4 block"><span className="font-black text-lg">&#8617;</span> Back</a>
            {book && <div className="flex items-center flex-col">
                <h1 className="my-10 text-2xl">{book.name}</h1>
                <img src={book.image_url ? (book.image_url) : '/images/landing-literature.jpg'} width={374} height={480} alt="book" />
                <h3 className="my-20 mx-20 md:mx-36 text-xl">
                    {'Resumo da obra: ' + book.resumo}
                </h3>
                <h3 className="text-xl mt-14">Get now for</h3>
                <button className="border border-2 shadow-md rounded-xl bg-grey hover:bg-gray-200 hover:text-black transition-all duration-200 py-4 px-14">{book.price > 0 ? book.price + ' $' : 'Free!'}</button>
            </div>}
            <h1 className="ml-4">Book ID: {bookid}</h1>
        </>
    )
}