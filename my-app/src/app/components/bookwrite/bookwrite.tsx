'use client'

import { useMutateData } from "@/app/BooksAPI/fetchbook";
import BookData from "@/app/interfaces/mutatebook-data";
import { useState } from "react";
import Nav from "../navigation/nav";

export function WriteComponent(){
    const [name, setName] = useState<string>('');
    const [resumo, setResumo] = useState<string>('');
    const [author, setAuthor] = useState<string>('');
    const [image_url, setImageUrl] = useState<string>('');
    const [price, setPrice] = useState<number>(0);
    const [categories, setCategories] = useState<string[]>([]);

    const { mutate } = useMutateData();

    const submit = () =>{
        const data : BookData = {
            name,
            resumo,
            author,
            image_url,
            price,
            categories,
        }
        mutate(data);
    }

    return(
        <>
            <Nav/>
            <div className="h-30 pt-28">
                <form onSubmit={submit} className="text-center">
                    <input type="text" placeholder="Titulo" value={name} onChange={(e) => setName(e.target.value)} required className="block mx-auto py-4 px-8 my-4 border-2"/>
                    <input type="text" placeholder="Resumo" value={resumo} onChange={(e) => setResumo(e.target.value)} required className="block mx-auto py-4 px-8 my-4 border-2"/>
                    <input type="text" placeholder="URL da imagem" value={image_url} onChange={(e) => setImageUrl(e.target.value)} required className="block mx-auto py-4 px-8 my-4 border-2"/>
                    <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} required className="block mx-auto py-4 px-8 my-4 border-2"/>
                    <input type="number" placeholder="price" value={price} onChange={(e) => setPrice(parseInt(e.target.value))} required className="block mx-auto py-4 px-8 my-4 border-2"/>
                    <div className="flex justify-center text-gray-500">
                        <label htmlFor="Horror">Horror</label>
                        <input className="ml-2 mr-4" type="checkbox" name="Horror" id="horror" onChange={(e) => {
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
                        <input className="ml-2 mr-4" type="checkbox" name="Fiction" id="fiction" onChange={(e) => {
                            if(e.target.checked){
                                setCategories([...categories, e.target.id])
                            }else{
                                var filteredArray = categories.filter(element => element !== e.target.id)
                                setCategories(filteredArray)
                            }
                        }
                    }/>
                        <label htmlFor="Comedy">Comedy</label>
                        <input className="ml-2 mr-4" type="checkbox" name="Comedy" id="comedy" onChange={(e) => {
                            if(e.target.checked){
                                setCategories([...categories, e.target.id])
                            }else{
                                var filteredArray = categories.filter(element => element !== e.target.id)
                                setCategories(filteredArray)
                            }
                        }
                    }/>
                    </div>

                    <input type="submit" placeholder="Enviar" className="cursor-pointer px-8 py-2 mt-4 bg-black rounded-full text-gray-200"/>
                </form>
            </div>
        </>
    );
}