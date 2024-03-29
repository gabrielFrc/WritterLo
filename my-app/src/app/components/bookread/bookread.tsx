import { useBookData } from "@/app/BooksAPI/fetchbook";
import { useEffect } from "react";

export default function BookRead({bookid} : { bookid: string }) {
    const { data } = useBookData();

    useEffect(() => {
        console.log(data)
    },[data]);
    
    let name : string = 'Nothing';
    let bookImage : string = '';
    let resumo : string = '';

    if(data != null){
        name = data[bookid].name;
        bookImage = data[bookid].image_url;
        resumo = data[bookid].resumo;
    }

    console.log(resumo)

    return (
        <>
            <div className="pt-[80px]">
                <div className="flex justify-between items-end">
                    <img src={'/' + bookImage} width={187} height={240} alt="book" className="ml-4 bg-black" />
                    <h1 className="mb-10">{name}</h1>
                    <span className="w-[240px]"></span>
                </div>
                <h3 className="my-20 mx-20 md:mx-36">
                    {'Resumo da obra: ' + resumo}
                </h3>
                <h2 className="text-xl py-6">Comments:</h2>
                <div className="border border-neutral-400">
                    <h4 className="py-8"><b>Joseph Costa:</b> Liked this book!</h4>
                    <h4 className="py-8"><b>Joseph Costa:</b> Liked this book!</h4>
                    <h4 className="py-8"><b>Joseph Costa:</b> Liked this book!</h4>
                    <h4 className="py-8"><b>Joseph Costa:</b> Liked this book!</h4>
                </div>
                <h1>Hello world, param: {bookid}</h1>
            </div>;
        </>
    )
}