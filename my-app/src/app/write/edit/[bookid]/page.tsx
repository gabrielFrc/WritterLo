'use client'

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { useBookData } from "@/app/BooksAPI/fetchbook"
import { useMutatePartialData } from "@/app/BooksAPI/fetchbook";
import { useEffect, useState } from "react";
import { PartialBookData } from "@/app/interfaces/mutatebook-data";

export function BookEdit({params} : {params : {bookid : string}}){
    const { data } = useBookData();
    const { mutate } = useMutatePartialData();

    const [name, setName] = useState<string>('');
    const [author, setAuthor] = useState<string>('');
    const [image_url, setImageUrl] = useState<string>('');
    const [resumo, setResumo] = useState<string>('');
    const [price, setPrice] = useState<number>(0);
    const [categories, setCategories] = useState<string[]>([]);

    useEffect(() => {
        let result;
        if(data != null){
            result = data.find(({ id } : { id : number}) => id === parseInt(params.bookid));
        }
        if(result != null){
            setCategories(result.categories)
            setPrice(result.price)
            
        }
    }, [data])
    
    let book;
    if(data != null){
        const result = data.find(({ id } : { id : number}) => id === parseInt(params.bookid));
        book = result;
    }

    const submit = () => {
        const data : PartialBookData = {
            id : params.bookid,
            name : name,
            resumo : resumo,
            author : author,
            image_url : image_url,
            price : price,
            categories : categories,
        }
        mutate(data);
    }

    return(
        <>
            {book && <>
                <a href="/read" className="pt-[80px] pl-4 block"><span className="font-black text-lg">&#8617;</span> Back</a>
                <form className="flex items-center flex-col" onSubmit={(e) => {submit(); e.preventDefault()}}>
                    <label htmlFor="bookName">Livro</label>
                    <input name="bookName" id="bookName" className="my-4 text-2xl text-center px-4 py-2 shadow-md rounded-xl" placeholder={book.name} value={name} onChange={e => setName(e.target.value)}/>
                    <label htmlFor="author">Autor</label>
                    <input name="author" id="author" className="mb-10 text-1xl text-center px-4 py-2 shadow-md rounded-xl" placeholder={book.author} value={author} onChange={e => setAuthor(e.target.value)}/>
                    <div className="relative">
                        <input type="text" name="image" id="image" placeholder="URL" value={image_url} onChange={e => setImageUrl(e.target.value)} className="absolute left-[50%] translate-x-[-50%] top-[40%] px-4 py-2 shadow-md rounded-xl"/>
                        <img src={book.image_url ? (book.image_url) : '/images/landing-literature.jpg'} width={374} height={480} alt="book" />
                    </div>
                    <div className="my-20">
                        <h3 className="text-xl inline">
                            {'Resumo da obra: '}
                        </h3>
                        <input type="text" name="resumo" id="resumo" placeholder={book.resumo} onChange={e => setResumo(e.target.value)} value={resumo} className="inline text-xl px-4 py-2 shadow-md rounded-xl"/>
                    </div>
                    <h3 className="text-xl mt-14">Get now for</h3>
                    <input type="number" name="price" id="price" onChange={e => setPrice(parseInt(e.target.value))} value={price} className="border border-2 shadow-md rounded-xl bg-grey h-16 w-20 text-center text-lg"/>

                    <div className="flex justify-center text-gray-500 my-10">
                        <label htmlFor="Horror">Horror</label>
                        <input className="ml-2 mr-4" type="checkbox" name="Horror" id="horror" checked={categories.includes('horror')} onChange={(e) => {
                            if(e.target.checked){
                                console.log(true)
                                setCategories([...categories, e.target.id])
                            }else{
                                var filteredArray = categories.filter(element => element !== e.target.id)
                                setCategories(filteredArray)
                            }
                        }
                    }/>
                        <label htmlFor="Fiction">Fiction</label>
                        <input className="ml-2 mr-4" type="checkbox" name="Fiction" id="fiction" checked={categories.includes('fiction')} onChange={(e) => {
                            if(e.target.checked){
                                setCategories([...categories, e.target.id])
                            }else{
                                var filteredArray = categories.filter(element => element !== e.target.id)
                                setCategories(filteredArray)
                            }
                        }
                    }/>
                        <label htmlFor="Comedy">Comedy</label>
                        <input className="ml-2 mr-4" type="checkbox" name="Comedy" id="comedy" checked={categories.includes('comedy')} onChange={(e) => {
                            if(e.target.checked){
                                setCategories([...categories, e.target.id])
                            }else{
                                var filteredArray = categories.filter(element => element !== e.target.id)
                                setCategories(filteredArray)
                            }
                        }
                    }/>
                    </div>
                    
                    <input type="submit" value="Salvar" className="cursor-pointer px-8 py-2 bg-black rounded-full text-gray-200"/>
                </form>
                <h1 className="ml-4">Book ID: {params.bookid}</h1>
            </>}
        </>
    )
}

export default function BookEditProvider({params} : {params : {bookid : string}}){
    const queryClient = new QueryClient();
    return(
        <>
            <QueryClientProvider client={queryClient}>
                <BookEdit params={params}/>
            </QueryClientProvider>
        </>
    )
}